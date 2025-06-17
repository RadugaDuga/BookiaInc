import styles from "./StorySection.module.css";
import useParticles from "../../hooks/UseParticles/useParticles";
import { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import WithFadeIn from "../../components/WithFadeIn";

function StorySection() {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );
        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    const particles = useParticles({
        containerRef,
        count: 14,
        minSize: 30,
        maxSize: 35,
        minX: 5,
        maxX: 95,
        minY: 105,
        maxY: 200,
        active: isVisible,
    });

    return (
        <section
            className={styles.container}
            id="story-section"
            ref={containerRef}
        >
            {particles.map((p, i) => (
                <div
                    key={i}
                    className={styles.youtubeS}
                    ref={p.ref}
                    style={{
                        width: p.size,
                        height: p.size,
                        transform: `rotate(${p.initialRotate}deg)`,
                    }}
                />
            ))}

            <StoryContent />
        </section>
    );
}

function StoryContent() {
    const { t } = useTranslation();
    return (
        <div className={styles.content}>
            <div className={styles.image_container}>
                <WithFadeIn offset={20} direction="right">
                    <div className={styles.image}></div>
                </WithFadeIn>
            </div>
            <div className={styles.text}>
                <WithFadeIn>
                    <h1 className={styles.title}>{t("story.title")}</h1>
                </WithFadeIn>
                <WithFadeIn>
                    <p>{t("story.description")}</p>
                </WithFadeIn>
            </div>
        </div>
    );
}

export default StorySection;
