import BackgroundSVG from "../public/background-stars.svg";
import type { Metadata } from "next";
import Image from "next/image";
import "../sass/index.scss";
import Navigation from "@/components/Navigation";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Planets Fact Site",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="between">
          <h1>
            <Link href={"/"}>The Planets</Link>
          </h1>
          <Navigation />
        </header>
        {children}
        <Image className="global-background" src={BackgroundSVG} alt="background of start" width={0} height={0} sizes="100vw" style={{ height: "100%", objectFit: "cover" }} />
      </body>
    </html>
  );
}
