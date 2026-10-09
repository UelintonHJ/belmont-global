import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const canela = localFont({
  src: "./fonts/canela/canela-Regular.woff2",
  variable: "--font-canela",
  weight: "400",
  display: "swap",
});

const titilliumWeb = localFont({
  src: "./fonts/titillium-web/TitilliumWeb-Regular.woff2",
  variable: "--font-titillium-web",
  weight: "400",
  display: "swap",
});

const rtRondelle = localFont({
  src: "./fonts/rt-rondelle/rt-rondelle-regular.woff2",
  variable: "--font-rt-rondelle",
  weight: "400",
  display: "swap",
});

const wulkanDisplay = localFont({
  src: "./fonts/wulkan-display/Wulkan-Display-Medium.woff2",
  variable: "--font-wulkan-display",
  weight: "500",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Belmont Global",
  description: "Plataforma de Investimento Alternativo Global",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${canela.variable} ${titilliumWeb.variable} ${rtRondelle.variable} ${wulkanDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
