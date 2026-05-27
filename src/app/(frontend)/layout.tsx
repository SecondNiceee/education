import React from "react";
import "./globals.css";

export const metadata = {
  title: "ОбразованиеПлюс — Бесплатные курсы для школьников 1-6 класс",
  description:
    "Улучшите успеваемость вашего ребёнка с бесплатными онлайн-курсами по всем школьным предметам. Интерактивные уроки для учеников с 1 по 6 класс.",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="ru" className="bg-background">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
