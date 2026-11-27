"use client";

import { useState } from "react";

import styles from "./Login.module.css";

export function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [captchaChecked, setCaptchaChecked] = useState(false);
    const [feedback, setFeedback] = useState("");

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setFeedback("");

        if (!username.trim() || !password) {
            setFeedback("Preencha seu nome de usuário e senha.");
            return;
        }

        if (!captchaChecked) {
            setFeedback("Confirme a verificação de segurança.");
            return;
        }

        setFeedback(
            "A interface está pronta, mas a autenticação ainda não foi integrada.",
        );
    }

    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit}
        >
            <div className={styles.formDivider}>
                <span aria-hidden="true" />

                <p className={styles.formLabel}>
                    LOGIN DO INVESTIDOR
                </p>

                <span aria-hidden="true" />
            </div>

            <div className={styles.fields}>
                <div className={styles.field}>
                    <label
                        className={styles.visuallyHidden}
                        htmlFor="login-username"
                    >
                        Nome de usuário
                    </label>

                    <input
                        id="login-username"
                        name="username"
                        type="text"
                        placeholder="Nome de usuário"
                        autoComplete="username"
                        value={username}
                        onChange={(event) => {
                            setUsername(event.target.value);
                            setFeedback("");
                        }}
                        required
                    />
                </div>

                <div className={styles.field}>
                    <label
                        className={styles.visuallyHidden}
                        htmlFor="login-password"
                    >
                        Senha
                    </label>

                    <div className={styles.passwordField}>
                        <input
                            id="login-password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Senha"
                            autoComplete="current-password"
                            value={password}
                            onChange={(event) => {
                                setPassword(event.target.value);
                                setFeedback("");
                            }}
                            required
                        />

                        <button
                            type="button"
                            className={styles.passwordToggle}
                            onClick={() => {
                                setShowPassword((current) => !current);
                            }}
                            aria-label={
                                showPassword
                                    ? "Ocultar senha"
                                    : "Mostrar senha"
                            }
                            aria-pressed={showPassword}
                        >
                            {showPassword ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />

                                    <circle
                                        cx="12"
                                        cy="12"
                                        r="3"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />

                                    <circle
                                        cx="12"
                                        cy="12"
                                        r="3"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <div className={styles.captcha}>
                <label className={styles.captchaCheckbox}>
                    <input 
                        type="checkbox" 
                        checked={captchaChecked}
                        onChange={(event) => {
                            setCaptchaChecked(event.target.checked);
                            setFeedback("");
                        }}
                    />

                    <span className={styles.checkboxVisual} />

                    <span className={styles.captchaText}>
                        Não sou um robô
                    </span>
                </label>

                <div className={styles.captchaBrand}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        fill="none"
                        aria-hidden="true"
                    >
                        <path 
                            d="M16 3 27 8v8c0 7-4.5 11.2-11 13C9.5 27.2 5 23 5 16V8l11-5Z"
                            stroke="#4285f4"
                            strokeWidth="2"
                        />

                        <path 
                            d="m11 16 3.5 3.5L21 13"
                            stroke="#4285f4"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    <span className={styles.captchaBrandText}>
                        Verificação de segurança
                    </span>

                    <span className={styles.captchaDisclaimer}>
                        Demo
                    </span>
                </div>
            </div>

            <p className={styles.captchaNotice}>
                Verificação demonstrativa. O reCAPTHCA real ainda 
                não está integrado.
            </p>

            <div className={styles.forgotPassword}>
                <a href="/contact">
                    Esqueceu a senha?
                </a>
            </div>

            <button
                type="submit"
                className={styles.submitButton}
            >
                Login
            </button>

            {feedback && (
                <p
                    className={styles.feedback}
                    role="status"
                    aria-live="polite"
                >
                    {feedback}
                </p>
            )}

            <p className={styles.registerText}>
                Não registrado?{" "}
                <a href="/contact">
                    Crie uma conta.
                </a>
            </p>
        </form>
    );
}