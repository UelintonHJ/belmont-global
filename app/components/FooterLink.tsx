"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import styles from "./Footer.module.css";

type FooterLinkProps = {
    href: string;
    children: ReactNode;
    variant?: "default" | "digital";
}

export function FooterLink({ 
    href, 
    children, 
    variant = "default", 
}: FooterLinkProps) {
    const pathname = usePathname();
    const isActive = pathname === href;

    const linkClassName =
        variant === "digital"
            ? styles.digitalLink
            : styles.primaryLink;

    return (
        <Link
            href={href}
            className={linkClassName}
            aria-current={isActive ? "page" : undefined}
            data-active={isActive}
        >
            {children}
        </Link>
    );
}