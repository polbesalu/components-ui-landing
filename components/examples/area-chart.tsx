"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Jan", Mobile: 4000, Desktop: 2400 },
  { name: "Feb", Mobile: 3000, Desktop: 1398 },
  { name: "Mar", Mobile: 2000, Desktop: 9800 },
  { name: "Apr", Mobile: 2780, Desktop: 3908 },
  { name: "May", Mobile: 1890, Desktop: 4800 },
  { name: "Jun", Mobile: 2390, Desktop: 3800 },
]

export function AreaChartExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Area Chart - Stacked</CardTitle>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="Mobile" stackId="1" stroke="#8884d8" fill="#8884d8" />
              <Area type="monotone" dataKey="Desktop" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="text-sm text-muted-foreground mt-2">Trending up by 5.2% this month</div>
      </CardContent>
    </Card>
  )
}

