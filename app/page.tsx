"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { ExamplesFilter } from "@/components/examples-filter"
import { CreateAccount } from "@/components/examples/create-account"
import { CookieSettings } from "@/components/examples/cookie-settings"
import { PaymentMethod } from "@/components/examples/payment-method"
import { PaymentManagement } from "@/components/payment-management"
import { ShareDocument } from "@/components/examples/share-document"
import { IssueReportForm } from "@/components/issue-report-form"
import { AreaChartExample } from "@/components/examples/area-chart"
import { BarChartExample } from "@/components/examples/bar-chart"
import { PieChartExample } from "@/components/examples/pie-chart"
import { MailInterface } from "@/components/sections/mail-interface"
import { TasksInterface } from "@/components/sections/tasks-interface"
import { PlaygroundInterface } from "@/components/sections/playground-interface"
import { MusicInterface } from "@/components/sections/music-interface"
import { FormsInterface } from "@/components/sections/forms-interface"
import { DashboardInterface } from "@/components/sections/dashboard-interface"

export default function Page() {
  const [activeFilter, setActiveFilter] = useState("Examples")

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
  }

  const renderContent = () => {
    switch (activeFilter) {
      case "Examples":
        return (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <CreateAccount />
            <CookieSettings />
            <PaymentMethod />
            <PaymentManagement />
            <ShareDocument />
            <IssueReportForm />
            <AreaChartExample />
            <BarChartExample />
            <PieChartExample />
          </div>
        )
      case "Mail":
        return <MailInterface />
      case "Dashboard":
        return <DashboardInterface />
      case "Tasks":
        return <TasksInterface />
      case "Playground":
        return <PlaygroundInterface />
      case "Forms":
        return <FormsInterface />
      case "Music":
        return <MusicInterface />
      case "Authentication":
        return <CreateAccount className="max-w-md mx-auto" />
      default:
        return <div>Content not available</div>
    }
  }

  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="w-full max-w-none px-4 md:px-6 lg:px-8 py-6">
          <div className="flex justify-center mb-8">
            <ExamplesFilter onFilterChange={handleFilterChange} />
          </div>
          {renderContent()}
        </div>
      </main>
    </div>
  )
}

