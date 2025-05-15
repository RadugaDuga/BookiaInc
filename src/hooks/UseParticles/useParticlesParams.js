import { useMemo } from "react";
import React from "react";

/**
 * Универсальный хук генерации параметров партиклов для анимации.
 * @param {Object} options
 * @param {number} options.count - Количество партиклов
 * @param {number} options.minSize - Минимальный размер (px)
 * @param {number} options.maxSize - Максимальный размер (px)
 * @param {number} options.minX - Минимальный X (% от ширины контейнера)
 * @param {number} options.maxX - Максимальный X (% от ширины контейнера)
 * @param {number} options.minY - Минимальный Y (% от высоты контейнера)
 * @param {number} options.maxY - Максимальный Y (% от высоты контейнера)
 * @param {function} [options.getExtra] - Функция для добавления кастомных параметров
 * @returns {Array} Массив объектов с параметрами партиклов
 */
export default function useParticles({
    count,
    minSize,
    maxSize,
    minX = 0,
    maxX = 100,
    minY = 110,
    maxY = 150,
    getExtra,
}) {
    const particleRefs = useMemo(
        () => Array.from({ length: count }, () => React.createRef()),
        [count]
    );

    const particles = useMemo(() => {
        const step = (maxX - minX) / (count - 1);
        return particleRefs.map((ref, i) => {
            const size = Math.round(minSize + Math.random() * (maxSize - minSize));
            const base = i / (count - 1);
            const speed = 30 + (size - minSize) * 3;
            const startXPercent = minX + i * step + (Math.random() - 0.5) * step * 0.3;
            const startYPercent = minY + Math.random() * (maxY - minY);
            const rotateZ = -150 + 350 * base + Math.random() * 30 - 15;
            const initialRotate = Math.random() * 360;
            const delay = base * 2 + Math.random() * 0.7;
            const extra = getExtra ? getExtra({ i, base, size }) : {};
            return {
                ref,
                size,
                speed,
                startXPercent,
                startYPercent,
                rotateZ,
                initialRotate,
                delay,
                ...extra,
            };
        });
    }, [particleRefs, count, minSize, maxSize, minX, maxX, minY, maxY, getExtra]);

    return particles;
}
