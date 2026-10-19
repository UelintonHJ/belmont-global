"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./Footer.module.css";

export function FooterAboutLink() {
    const pathname = usePathname();
    const isActive = pathname === "/about-us";

    return (
        <Link
            href="/about-us"
            className={styles.primaryLink}
            aria-current={isActive ? "page" : undefined}
            data-active={isActive}
        >
            Quem Somos
        </Link>
    );
}