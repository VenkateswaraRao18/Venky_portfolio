import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingFooterNav from "@/components/FloatingFooterNav";
import StickySocials from "@/components/StickySocials";
import Loader from "@/components/Loader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Venkateswara Rao | Portfolio",
  description: "Machine Learning Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     <body className={`${inter.variable} font-sans antialiased`}>
  <Loader />
  {children}
  <StickySocials />
  <FloatingFooterNav />
</body>
    </html>
  );
}