"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

import styles from "./Header.module.css";

const navigationLinks = [
    { label: "Sobre nós", href: "#sobre-nos", animation: styles.staggerAbout },
    { label: "Carreira", href: "#carreira", animation: styles.staggerCareer },
    { label: "Contato", href: "#contato", animation: styles.staggerContact },
    { label: "BG Digital", href: "#bg-digital", animation: styles.staggerDigital },
];

const SCROLL_THRESHOLD = 3;
const TOP_THRESHOLD = 8;

export function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [animationCycle, setAnimationCycle] = useState(0);

    const headerRef = useRef<HTMLElement>(null);
    const isVisibleRef = useRef(true);
    const navigationId = useId();

    useEffect(() => {
        let lastScrollY = window.scrollY;

        function handleScroll() {
            const currentScrollY = Math.max(0, window.scrollY);
            const scrollDifference = currentScrollY - lastScrollY;

            lastScrollY = currentScrollY;

            function showHeader() {
                if (isVisibleRef.current) {
                    return;
                }

                isVisibleRef.current = true;
                setIsVisible(true);
                setAnimationCycle((current) => current + 1);
            }

            function hideHeader() {
                if (!isVisibleRef.current) {
                    return;
                }

                const header = headerRef.current;
                const activeElement = document.activeElement;

                if (header?.contains(activeElement)) {
                    return;
                }

                isVisibleRef.current = false;
                setIsVisible(false);
                setIsMenuOpen(false);
            }

            if (currentScrollY <= TOP_THRESHOLD) {
                showHeader();
            } else if (scrollDifference > SCROLL_THRESHOLD) {
                hideHeader();
            } else if (scrollDifference < -SCROLL_THRESHOLD) {
                showHeader();
            }
        }

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            ref={headerRef}
            className={styles.header}
            data-visible={isVisible}
            data-menu-open={isMenuOpen}
            aria-hidden={!isVisible}
        >
            <div className={styles.inner} key={animationCycle}>
                <Link
                    href="/"
                    className={`${styles.logo} ${styles.staggerLogo}`}
                    aria-label="Belmont Global — página inicial"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <Image
                        src="/images/main-logo.png"
                        alt="Belmont Global"
                        width={266}
                        height={15}
                        priority
                        className={styles.logoImage}
                    />
                </Link>

                <button
                    type="button"
                    className={styles.menuToggle}
                    aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls={navigationId}
                    onClick={() => setIsMenuOpen((current) => !current)}
                >
                    <span />
                    <span />
                    <span />
                </button>

                <nav
                    id={navigationId}
                    className={styles.navigation}
                    aria-label="Navegação principal"
                >
                    {navigationLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`${styles.navLink} ${link.animation}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <Link 
                        href="/"
                        className={`${styles.loginLink} ${styles.staggerLogin}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <span>Login</span>

                        <svg
                            className={styles.loginArrow}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M3.333 8h9.334M8 3.333 12.667 8 8 12.667"
                                stroke="currentColor"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Link>
                </nav>
            </div>
        </header>
    );
}