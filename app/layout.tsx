import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavbarDefault from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DJ",
  description: "DJ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" min-h-screen relative">
        <NavbarDefault />
        <>{children}</>
        <Footer />
      </body>
    </html>
  );
}
