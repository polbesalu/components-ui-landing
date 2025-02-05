import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="space-y-4">
        <div className="space-y-2">
          <Link
            href="#"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
          >
            Blocks are open for contributions →
          </Link>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Build your component library</h1>
          <p className="max-w-[600px] text-muted-foreground">
            Beautifully designed components that you can copy and paste into your apps.
            <br />
            Made with Tailwind CSS. Open source.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button>Get Started</Button>
          <Button variant="outline">Browse Blocks</Button>
        </div>
      </div>
    </section>
  )
}

