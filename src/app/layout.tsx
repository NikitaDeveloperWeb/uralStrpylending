import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["cyrillic", "latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "УралСтройДерево — каркасные дома, бани, хозблоки | Златоуст",
  description:
    "Строим каркасные дома, бани и хозблоки в Златоусте по скандинавским технологиям. Гарантия качества, экологичные материалы, индивидуальный подход.",
  keywords: [
    "каркасные дома Златоуст",
    "баня Златоуст",
    "хозблок",
    "строительство дома Челябинская область",
    "каркасные дома",
    "скандинавские дома",
  ],
  openGraph: {
    title: "УралСтройДерево — скандинавские каркасные дома",
    description:
      "Строим каркасные дома, бани и хозблоки в Златоусте по скандинавским технологиям",
    type: "website",
    locale: "ru_RU",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${inter.variable} antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
