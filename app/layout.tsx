import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NordFlash — Web Apps & Data Dashboards",
  description:
    "Small to medium full‑stack projects (Next.js, Prisma, Neon) and analytics dashboards.",
  metadataBase: new URL("https://nordflash.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
