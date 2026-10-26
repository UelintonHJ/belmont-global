"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import styles from "./Footer.module.css";

type FooterLinkProps = {
    href: string;
    children: ReactNode;
}

export function FooterLink({ href, children}: FooterLinkProps) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={styles.primaryLink}
            aria-current={isActive ? "page" : undefined}
            data-active={isActive}
        >
            {children}
        </Link>
    )
}