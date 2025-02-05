"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RevenueChart } from "./examples/revenue-chart"
import { TeamMembers } from "./examples/team-members"
import { ChatExample } from "./examples/chat"
import { CalendarExample } from "./examples/calendar"
import { GoalExample } from "./examples/goal"

export function Examples() {
  return (
    <div className="container space-y-4 py-8">
      <Tabs defaultValue="examples" className="space-y-4">
        <TabsList>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="mail">Mail</TabsTrigger>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="playground">Playground</TabsTrigger>
          <TabsTrigger value="forms">Forms</TabsTrigger>
          <TabsTrigger value="music">Music</TabsTrigger>
          <TabsTrigger value="authentication">Authentication</TabsTrigger>
        </TabsList>
        <TabsContent value="examples" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <RevenueChart />
            <TeamMembers />
            <ChatExample />
            <CalendarExample />
            <GoalExample />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

