import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/presentation/components/theme/ThemeProvider";
import { site } from "@/infrastructure/content/site";

//const siteUrl = "https://sanasboui.dev";
const title = `${site.name} — Software Engineer`;
const description =
  `Portfolio of ${site.name}, software engineer focused on full-stack development, backend architecture and accessible web platforms.`;

export const metadata: Metadata = {
  // metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    //url: siteUrl,
    siteName: `${site.name}`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}