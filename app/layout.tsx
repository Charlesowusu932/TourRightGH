import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Ghana for the Diaspora · Your Return Home Travel Guide",
  description:
    "The checked, dated travel guide for second-generation Ghanaians, heritage travellers and anyone heading back after years away. Entry rules, money, mobile money, transport, Detty December and 50 places worth the trip.",
  applicationName: "Ghana for the Diaspora",
  appleWebApp: {
    capable: true,
    title: "Ghana Guide",
    statusBarStyle: "default",
  },
  formatDetection: { telephone: false },
  openGraph: {
    title: "Ghana for the Diaspora · Your Return Home Travel Guide",
    description:
      "Entry rules, money, mobile money, transport, Detty December and 50 places worth the trip. Edition 2026/2027.",
    images: ["/images/cover.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover", // lets the sticky header and buy bar use the safe areas on notched phones
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
