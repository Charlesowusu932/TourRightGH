import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-sans",
  display: "swap",
});

const serif = DM_Serif_Display({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ghana for the Diaspora · Your Return Home Travel Guide",
  description:
    "The checked, dated travel guide for second-generation Ghanaians, heritage travellers and anyone heading back after years away. Entry rules, money, mobile money, transport, Detty December and 50 places worth the trip.",
  openGraph: {
    title: "Ghana for the Diaspora · Your Return Home Travel Guide",
    description:
      "Entry rules, money, mobile money, transport, Detty December and 50 places worth the trip. Edition 2026/2027.",
    images: ["/images/cover.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
