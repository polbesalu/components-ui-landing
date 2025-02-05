import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function RevenueChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Total Revenue</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">$15,231.89</div>
        <p className="text-xs text-muted-foreground">+20.1% from last month</p>
        <div className="mt-4 h-[80px]" />
      </CardContent>
    </Card>
  )
}

