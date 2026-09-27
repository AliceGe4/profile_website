import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alice German | Software Developer",
  description: "Portfolio of Alice German, a computer science graduate building web applications and software projects.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
