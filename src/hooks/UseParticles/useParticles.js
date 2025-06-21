import { useMemo, useEffect, useRef } from "react";
import React from "react";
import { gsap } from "gsap";

// Константы для opacity партиклов story section
export const STORY_PARTICLE_OPACITY_MIN = 0.2;
export const STORY_PARTICLE_OPACITY_MAX = 0;

// Константа для диапазона скорости партиклов
const PARTICLE_SPEED_MIN = 40;
const PARTICLE_SPEED_MAX = 70;

/**
 * Универсальный хук для генерации и анимации партиклов.
 * @param {Object} options
 * @param {object} options.containerRef - ref контейнера
 * @param {number} options.count - Количество партиклов
 * @param {number} options.minSize - Минимальный размер (px)
 * @param {number} options.maxSize - Максимальный размер (px)
 * @param {number} options.minX - Минимальный X (% от ширины контейнера)
 * @param {number} options.maxX - Максимальный X (% от ширины контейнера)
 * @param {number} options.minY - Минимальный Y (% от высоты контейнера)
 * @param {number} options.maxY - Максимальный Y (% от высоты контейнера)
 * @returns {Array} Массив объектов с параметрами партиклов (с refs)
 */
export default function useParticles({
    containerRef,
    count,
    minSize,
    maxSize,
    minX = 0,
    maxX = 100,
    minY = 110,
    maxY = 150,
    active = true,
}) {
    const memoizedParams = useRef([]);
    const isActive = useRef(false);
    const timelinesRef = useRef([]);

    // refs для партиклов
    const particleRefs = useMemo(
        () => Array.from({ length: count }, () => React.createRef()),
        [count]
    );

    // Генерация параметров для партиклов
    const particles = useMemo(() => {
        const step = (maxX - minX) / (count - 1);
        return particleRefs.map((ref, i) => {
            const size = Math.round(
                minSize + Math.random() * (maxSize - minSize)
            );
            const base = i / (count - 1);
            const speed = PARTICLE_SPEED_MIN + Math.random() * (PARTICLE_SPEED_MAX - PARTICLE_SPEED_MIN); // скорость теперь случайная в диапазоне 30-100
            const startXPercent =
                minX + i * step + (Math.random() - 0.5) * step * 0.3;
            const startYPercent = minY + Math.random() * (maxY - minY);
            const rotateZ = -150 + 350 * base + Math.random() * 30 - 15;
            const initialRotate = Math.random() * 360;
            const delay = base * 2 + Math.random() * 0.7;
            return {
                ref,
                size,
                speed,
                startXPercent,
                startYPercent,
                rotateZ,
                initialRotate,
                delay,
            };
        });
    }, [particleRefs, count, minSize, maxSize, minX, maxX, minY, maxY]);

    // Мемоизация параметров для анимации
    if (memoizedParams.current.length !== particles.length) {
        memoizedParams.current = particles.map((p) => {
            const scaleK = 1.2 + Math.random() * 0.5;
            return {
                ...p,
                scaleK,
            };
        });
    }

    // Анимация партиклов
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let timelines = [];

        function startAnimation() {
            if (isActive.current) return;
            isActive.current = true;
            const containerHeight = container.clientHeight;
            const containerWidth = container.clientWidth;

            memoizedParams.current.forEach(
                ({
                    ref,
                    startXPercent,
                    speed,
                    rotateZ,
                    startYPercent,
                    delay,
                    scaleK,
                }) => {
                    const particle = ref.current;
                    if (!particle) return;
                    const startX = (startXPercent / 100) * containerWidth;
                    const startY = (startYPercent / 100) * containerHeight;
                    const initialWidth = particle.offsetWidth;
                    const initialHeight = particle.offsetHeight;
                    const zIndex = Math.round(10 + scaleK * 10);
                    gsap.set(particle, {
                        x: startX,
                        y: startY,
                        scale: 1,
                        width: initialWidth,
                        height: initialHeight,
                        willChange: "transform, opacity, width, height",
                        opacity: STORY_PARTICLE_OPACITY_MIN,
                        zIndex: zIndex,
                    });
                    const duration =
                        (startY - -5) /
                        (speed) /
                        2;

                    const tl = gsap.timeline({
                        repeat: -1,
                        delay: delay,
                        onRepeat: () => {
                            const newStartY =
                                ((110 + Math.random() * 40) / 100) *
                                containerHeight;
                            gsap.set(particle, {
                                y: newStartY,
                                opacity: 1,
                            });
                        },
                    });

                    tl.to(
                        particle,
                        {
                            y: -5,
                            rotateZ: rotateZ,
                            duration: duration,
                            ease: "linear",
                        },
                        0
                    ).to(
                        particle,
                        {
                            opacity: STORY_PARTICLE_OPACITY_MAX,
                            duration: duration * 0.3, // opacity меняется только в конце пути
                            ease: "power1.in",
                        },
                        duration * 0.7
                    );

                    timelines.push(tl);
                }
            );
            timelinesRef.current = timelines;
        }

        startAnimation();

        return () => {
            isActive.current = false;
            timelines.forEach((tl) => tl.kill());
            timelines = [];
            timelinesRef.current = [];
        };
    }, [containerRef, particles]);

    // Следим за active
    useEffect(() => {
        if (!active) {
            timelinesRef.current.forEach((tl) => tl.pause());
        } else {
            timelinesRef.current.forEach((tl) => tl.resume());
        }
    }, [active]);

    // Возвращаем параметры для рендера партиклов
    return particles;
}
