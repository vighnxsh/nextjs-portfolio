import type { Metadata } from "next";
import "./globals.css";
import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TooltipProvider } from "@/components/ui/tooltip";


export const metadata: Metadata = {
  title: "vighnesh.me",
  description: "Portfolio of Vighnesh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-sky-500 via-sky-300 to-sky-200 antialiased relative tracking-tighter bg-background overflow-hidden">
          <div className="relative z-10 flex-grow">
          <TooltipProvider delayDuration={0}>
          <Navbar  />
          {children}
            </TooltipProvider >
            <div className=" pt-60 items-center justify-center">
           
            <Footer />
            </div>
          </div>
         
          <DotPattern
            className={cn(
              "absolute inset-0 [mask-image:radial-gradient(900px_circle_at_center,white,transparent)] z-0",
            )}
          />
        </div>
      </body>
    </html>
  );
}