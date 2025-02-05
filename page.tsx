import { SiteHeader } from "./components/site-header"
import { Hero } from "./components/hero"
import { Examples } from "./components/examples"

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Examples />
      </main>
    </div>
  )
}

