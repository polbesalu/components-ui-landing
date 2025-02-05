"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const filters = ["Examples", "Mail", "Dashboard", "Tasks", "Playground", "Forms", "Music", "Authentication"]

export function ExamplesFilter({ onFilterChange }: { onFilterChange: (filter: string) => void }) {
  const [activeFilter, setActiveFilter] = useState("Examples")

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter)
    onFilterChange(filter)
  }

  return (
    <div className="inline-flex h-10 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => handleFilterClick(filter)}
          className={cn(
            "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            filter === activeFilter && "bg-background text-foreground shadow-sm",
          )}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}

