import ThemeToggle from "@/components/layout/ThemeToggle/theme-toggle";
import { cn } from "@/lib/utils";
import { MobileSidebar } from "./mobile-sidebar";

import Link from "next/link";

export default function Header() {
  return (
    
    <div className="fixed top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur z-20">
      <nav className="h-14 flex items-center justify-between px-4">
        <div className="hidden lg:block">
          <Link href="/dashboard">
            <img
              src="/logo.png" // Replace with the path to your logo.png
              alt="Logo"
              className="mr-2 h-12 w-12"// Doubled the size and added cursor-pointer
            />
          </Link>
        </div>
        <div className={cn("block lg:!hidden")}>
          <MobileSidebar />
        </div>

        <div className="flex items-center gap-2">
          
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
