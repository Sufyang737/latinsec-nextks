import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import BgPrimary from '@/assets/images/bg-primary.webp';
import Image from "next/image";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "LatinSec",
  description: "Tu protección es nuestra especialidad",
  icons: {
    icon: "./favicon.png",
    type: "image/png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
      <div className="fixed top-0 z-[-10] h-screen w-screen">
        <div className="bg-black/30 w-full h-screen absolute top-0 left-0"></div>
        <Image src={BgPrimary} alt="" className="object-cover h-full w-full" />
      </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
