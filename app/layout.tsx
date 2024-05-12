import React from "react";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import Providers from "@/components/layout/providers";
import { Toaster } from "@/components/ui/toaster";
//import "@uploadthing/react/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeToggle from "@/components/layout/ThemeToggle/theme-toggle";
import { cn } from "@/lib/utils";
import { MobileSidebar } from "@/components/layout/mobile-sidebar";
//import { getServerSession } frcom "next-auth";
import Link from "next/link";
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return ( 
  
    <html>
      <>
      
      <div className="fixed top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur z-20">
          <nav className="h-14 flex items-center justify-between px-4">
            <div className="hidden lg:block">
              <ClerkProvider>
                <SignedOut>
                  <SignInButton />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
                
              </ClerkProvider>
            </div>
            <div className={cn("block lg:!hidden")}>
              <MobileSidebar />
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      
     
        <body>
        <main>{children}</main>
      </body>
     
    </html>
  );
}
