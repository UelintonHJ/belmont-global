import type { Metadata } from "next";

import { LoginForm } from "./LoginForm";
import styles from "./Login.module.css";

export const metadata: Metadata = {
    title: "Portal Belmont Global",
    description:
        "Acesse o Portal do Investidor Belmont Global.",
};

export default function LoginPage() {
    return (
        <main className={styles.page}>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    Bem-vindo ao{" "} 
                    <span>Portal do Investidor</span>{" "}
                    <span>Belmont Global</span>
                </h1>

                <section
                    className={styles.loginCard}
                    aria-label="Acesso ao Portal do Investidor"
                >
                    <LoginForm />
                </section>

                <nav
                    className={styles.legalNavigation}
                    aria-label="Informações legais"
                >
                    <a href="/contact">
                        Política de Cookies
                    </a>

                    <span 
                        className={styles.legalDivider}
                        aria-hidden="true"
                    />

                    <a href="/contact">
                        Avisos Legais
                    </a>
                </nav>
            </div>
        </main>
    );
}