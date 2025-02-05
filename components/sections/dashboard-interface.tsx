"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Download, Users, CreditCard, Activity } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", value: 3000 },
  { month: "Feb", value: 2800 },
  { month: "Mar", value: 3200 },
  { month: "Apr", value: 1000 },
  { month: "May", value: 4500 },
  { month: "Jun", value: 4500 },
  { month: "Jul", value: 1500 },
  { month: "Aug", value: 4000 },
  { month: "Sep", value: 3500 },
  { month: "Oct", value: 6000 },
  { month: "Nov", value: 2800 },
  { month: "Dec", value: 1200 },
]

const recentSales = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: "+$1,999.00",
  },
  {
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    amount: "+$39.00",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    amount: "+$299.00",
  },
  {
    name: "William Kim",
    email: "will@email.com",
    amount: "+$99.00",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    amount: "+$39.00",
  },
]

export function DashboardInterface() {
  return (
    <Card className="h-[800px]">
      <CardContent className="p-6">
        <div className="flex items-center justify-between space-y-2">
          <div className="space-y-0.5">
            <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
            <p className="text-sm text-muted-foreground">Jan 20, 2023 - Feb 09, 2023</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                  <h3 className="text-sm font-medium">Total Revenue</h3>
                </div>
                <div className="mt-4 space-y-1">
                  <p className="text-2xl font-bold">$57,582.83</p>
                  <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <h3 className="text-sm font-medium">Subscriptions</h3>
                </div>
                <div className="mt-4 space-y-1">
                  <p className="text-2xl font-bold">+4890</p>
                  <p className="text-xs text-muted-foreground">+180.1% from last month</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <CalendarDays className="h-4 w-4 text-muted-foreground" />
                  <h3 className="text-sm font-medium">Sales</h3>
                </div>
                <div className="mt-4 space-y-1">
                  <p className="text-2xl font-bold">+11,528</p>
                  <p className="text-xs text-muted-foreground">+19% from last month</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Activity className="h-4 w-4 text-muted-foreground" />
                  <h3 className="text-sm font-medium">Active Now</h3>
                </div>
                <div className="mt-4 space-y-1">
                  <p className="text-2xl font-bold">+328</p>
                  <p className="text-xs text-muted-foreground">+201 since last hour</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardContent className="p-6">
                <div className="flex items-center justify-between space-y-2">
                  <h3 className="text-lg font-medium">Overview</h3>
                </div>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Bar dataKey="value" fill="currentColor" opacity={0.2} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardContent className="p-6">
                <div className="flex items-center justify-between space-y-2">
                  <h3 className="text-lg font-medium">Recent Sales</h3>
                  <p className="text-sm text-muted-foreground">You made 265 sales this month.</p>
                </div>
                <div className="space-y-8 mt-6">
                  {recentSales.map((sale, index) => (
                    <div key={index} className="flex items-center">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src="/placeholder.svg" alt={sale.name} />
                        <AvatarFallback>{sale.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="ml-4 space-y-1">
                        <p className="text-sm font-medium leading-none">{sale.name}</p>
                        <p className="text-sm text-muted-foreground">{sale.email}</p>
                      </div>
                      <div className="ml-auto font-medium">{sale.amount}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  )
}

