"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { name: "Jan", Desktop: 4000, Mobile: 2400 },
  { name: "Feb", Desktop: 3000, Mobile: 1398 },
  { name: "Mar", Desktop: 2000, Mobile: 9800 },
  { name: "Apr", Desktop: 2780, Mobile: 3908 },
  { name: "May", Desktop: 1890, Mobile: 4800 },
  { name: "Jun", Desktop: 2390, Mobile: 3800 },
]

export function BarChartExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart - Multiple</CardTitle>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Desktop" fill="#8884d8" />
              <Bar dataKey="Mobile" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="text-sm text-muted-foreground mt-2">Trending up by 5.2% this month</div>
      </CardContent>
    </Card>
  )
}

