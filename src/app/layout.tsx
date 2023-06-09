import MobileMenu from "@/components/MobileMenu";
import Navbar from "@/components/Navbar";
import Providers from "@/components/ui/Providers";
import { Toaster } from "@/components/ui/Toast";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("bg-white text-slate-900 antialiased", inter.variable)}
    >
      <body className="min-h-screen bg-slate-50 dark:bg-slate-900 antialiased">
        <Providers>
          <Toaster position="bottom-right" />
          {/* @ts-expect-error Server Component */}
          <Navbar />
          <MobileMenu />
          <main>{children}</main>
        </Providers>

        {/* Allow for more height on mobile devices */}
        <div className="h-40 md:hidden" />
      </body>
    </html>
  );
}
