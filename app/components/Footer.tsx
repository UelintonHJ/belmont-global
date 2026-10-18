import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";

import styles from "./Footer.module.css";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.mainGrid}>
                    <div className={styles.information}>
                        <Link
                            href="/"
                            className={styles.logoLink}
                            aria-label="Belmont Global - página inicial"
                        >
                            <Image 
                                src="/images/main-logo.png"
                                alt="Belmont Global"
                                width={1600}
                                height={96}
                                className={styles.logo}
                                sizes="(max-width: 600px) 100vw, 384px"
                            />
                        </Link>

                        <div className={styles.navigationGrid}>
                            <nav
                                className={styles.primaryNavigation}
                                aria-label="Navegação institucional"
                            >
                                <Link
                                    href="#sobre-nos"
                                    className={styles.primaryLink}
                                >
                                    Quem Somos
                                </Link>

                                <Link
                                    href="#carreira"
                                    className={styles.primaryLink}
                                >
                                    Carreiras
                                </Link>

                                <Link
                                    href="#contato"
                                    className={styles.primaryLink}
                                >
                                    Contato
                                </Link>

                                <Link
                                    href="#bg-digital"
                                    className={styles.digitalLink}
                                >
                                    BG Digital
                                </Link>
                            </nav>

                            <nav className={styles.socialLinks}>
                                <a 
                                    href="https://www.linkedin.com/company/belmont-global/"
                                    className={styles.socialLink}
                                >
                                    <FaLinkedinIn 
                                        className={styles.socialIcon}
                                        aria-hidden="true"
                                    />
                                    <span>
                                        LinkedIn/Belmont Global
                                    </span>
                                </a>

                                <a 
                                    href="https://www.linkedin.com/company/bg-digital-belmontglobal/"
                                    className={styles.socialLink}
                                >
                                    <FaLinkedinIn 
                                        className={styles.socialIcon}
                                        aria-hidden="true"
                                    />
                                    <span>
                                        LinkedIn/BG Digital
                                    </span>
                                </a>
                            </nav>
                        </div>

                        <div className={styles.secondaryGrid}>
                            <nav
                                className={styles.legalNavigation}
                                aria-label="Informações legais"
                            >
                                <a 
                                    href="#politica-de-privacidade"
                                    className={styles.secondaryLink}
                                >
                                    Política de Privacidade
                                </a>

                                <a 
                                    href="#termos-de-uso"
                                    className={styles.secondaryLink}
                                >
                                    Termos de Uso
                                </a>
                            </nav>

                            <nav
                                className={styles.accessNavigation}
                                aria-label="Acesso e comunicados"
                            >
                                <a 
                                    href="#solicitar-acesso"
                                    className={styles.secondaryLink}
                                >
                                    Solicitar Acesso
                                </a>

                                <a 
                                    href="#avisos-e-comunicados"
                                    className={styles.secondaryLink}
                                >
                                    Avisos e Comunicados
                                </a>
                            </nav>
                        </div>

                        <p className={styles.copyright}>
                            © 2026 Belmont Global. Todos os direitos reservados.
                        </p>
                    </div>

                    <div className={styles.contact}>
                        <h2 className={styles.contactTitle}>
                            Contato
                        </h2>

                        <div className={styles.contactGroup}>
                            <p className={styles.contactLabel}>
                                Relações com Investidores / Dúvidas sobre Fundos:
                            </p>

                            <div className={styles.contactLinks}>
                                <a 
                                    href="mailto:ri@belmontglobal.com.br"
                                    className={styles.contactLink}
                                >
                                    ri@belmontglobal.com.br
                                </a>

                                <a 
                                    href="tel:+551138974200"
                                    className={styles.contactLink}
                                >
                                    BR: +55 11 3897-4200
                                </a>

                                <a 
                                    href="tel:+442079460812"
                                    className={styles.contactLink}
                                >
                                    UK: +44 20 7946 0812
                                </a>

                                <a 
                                    href="tel:+12125550184"
                                    className={styles.contactLink}
                                >
                                    US: +1 (212) 555-0184
                                </a>
                            </div>
                        </div>

                        <div className={styles.contactGroup}>
                            <p className={styles.contactLabel}>
                                Demais Assuntos:
                            </p>

                            <a 
                                href="tel:+551138974000"
                                className={styles.contactLink}
                            >
                                +55 11 3897-4000
                            </a>
                        </div>

                        <div className={styles.contactGroup}>
                            <p className={styles.contactLabel}>
                                Assessoria de Imprensa:
                            </p>

                            <div className={styles.contactLinks}>
                                <p className={styles.contactDetail}>
                                    Marina Fontes de Alencar
                                </p>

                                <p className={styles.contactDetail}>
                                    Diretora de Comunicação
                                </p>

                                <a 
                                    href="tel:+551138974255"
                                    className={styles.contactLink}
                                >
                                    +55 11 3897-4255
                                </a>

                                <a 
                                    href="mailto:imprensa@belmontglobal.com.br"
                                    className={styles.contactLink}
                                >
                                    imprensa@belmontglobal.com.br
                                </a>
                            </div>
                        </div>

                        <div className={styles.contactGroup}>
                            <p className={styles.contactDetail}>
                                Vanguard Alliance Capital Group
                            </p>

                            <a 
                                href="mailto:comunicacao@vanguardalliance.com"
                                className={styles.contactLink}
                            >
                                belmontglobal@vanguardalliance.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}