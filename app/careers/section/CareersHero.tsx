"use client";

import { useRef, useState } from "react";
import {
    FiMapPin,
    FiPause,
    FiPlay,
    FiSearch,
    FiX,
} from "react-icons/fi"

import styles from "../styles/CareersHero.module.css";

export function CareersHero() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [jobTitle, setJobTitle] = useState("");
    const [location, setLocation] = useState("");

    async function toogleVideoPlayback() {
        const video = videoRef.current;

        if (!video) return;

        if (video.paused) {
            try {
                await video.play();
                setIsPlaying(true);
            } catch {
                setIsPlaying(false);
            }
        } else {
            video.pause();
            setIsPlaying(false);
        }
    }

    return (
        <section
            className={styles.hero}
            aria-labelledby="careers-hero-title"
        >
            <video
                ref={videoRef}
                className={styles.video}
                src="/videos/careers-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            />

            <div className={styles.overlay} aria-hidden="true" />

                <button
                    type="button"
                    className={styles.playbackButton}
                    onClick={toogleVideoPlayback}
                    aria-label={
                        isPlaying
                            ? "Pausar vídeo"
                            : "Reproduzir vídeo"
                    }
                    aria-pressed={!isPlaying}
                >
                    {isPlaying ? (
                        <FiPause aria-hidden="true" />
                    ) : (
                        <FiPlay aria-hidden="true" />
                    )}
                </button>

            <div className={styles.content}>
                <h1
                    id="careers-hero-title"
                    className={styles.title}
                >
                    Construa o seu futuro conosco
                </h1>

                <form
                    className={styles.searchForm}
                    role="search"
                    onSubmit={(event) => event.preventDefault()}
                >
                    <div className={styles.searchField}>
                        <FiSearch
                            className={styles.fieldIcon}
                            aria-hidden="true"
                        />

                        <input
                            type="search"
                            name="jobTitle"
                            value={jobTitle}
                            onChange={(event) => 
                                setJobTitle(event.target.value)
                            }
                            placeholder="Pesquise o nome do cargo"
                            aria-label="Pesquise o nome do cargo"
                        />

                        {jobTitle.length > 0 && (
                            <button
                                type="button"
                                className={styles.clearButton}
                                aria-label="Limpar nome do cargo"
                                onClick={() => setJobTitle("")}
                            >
                                <FiX aria-hidden="true" />
                            </button>
                        )}
                    </div>

                    <div className={styles.searchField}>
                        <FiMapPin
                            className={styles.fieldIcon}
                            aria-hidden="true"
                        />

                        <input
                            type="text"
                            name="location"
                            value={location}
                            onChange={(event) => setLocation(event.target.value)}
                            placeholder="Pesquise a localização"
                            aria-label="Pesquise a localização"
                        />

                        {location.length > 0 && (
                            <button
                                type="button"
                                className={styles.clearButton}
                                aria-label="Limpar localização"
                                onClick={() => setLocation("")}
                            >
                                <FiX aria-hidden="true" />
                            </button>
                        )}
                    </div>

                    <button
                        type="submit"
                        className={styles.searchButton}
                    >
                        <span>Procurar</span>
                        <FiSearch aria-hidden="true" />
                    </button>
                </form>
            </div>
        </section>
    );
}