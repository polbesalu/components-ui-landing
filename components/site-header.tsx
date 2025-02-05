import Link from "next/link"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-5 w-5">
              <rect width="256" height="256" fill="none"></rect>
              <line
                x1="208"
                y1="128"
                x2="128"
                y2="208"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></line>
              <line
                x1="192"
                y1="40"
                x2="40"
                y2="192"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></line>
            </svg>
            <span className="font-bold">components/ui</span>
          </Link>
        </div>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href="#" className="transition-colors hover:text-foreground/80">
            Docs
          </Link>
          <Link href="#" className="transition-colors hover:text-foreground/80">
            Components
          </Link>
          <Link href="#" className="transition-colors hover:text-foreground/80">
            Blocks
          </Link>
          <Link href="#" className="transition-colors hover:text-foreground/80">
            Charts
          </Link>
          <Link href="#" className="transition-colors hover:text-foreground/80">
            Themes
          </Link>
          <Link href="#" className="transition-colors hover:text-foreground/80">
            Colors
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Input type="search" placeholder="Search documentation..." className="h-8 w-[200px] lg:w-[250px]" />
          </div>
          <Button variant="ghost" size="icon">
            <a href=""><Github className="h-5 w-5" /></a>
            <span className="sr-only">GitHub</span>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

