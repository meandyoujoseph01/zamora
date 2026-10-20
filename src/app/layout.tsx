import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZAMORA | Africa's Marketplace",
  description:
    "ZAMORA is a modern marketplace connecting customers with trusted sellers across Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black antialiased">
        {children}
      </body>
    </html>
  );
}