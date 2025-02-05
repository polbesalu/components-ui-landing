import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function GoalExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Move Goal</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground">Set your daily activity goal.</div>
        <div className="mt-4 flex items-center justify-between">
          <Button variant="outline" size="icon">
            -
          </Button>
          <div className="flex-1 text-center">
            <div className="text-4xl font-bold">350</div>
            <div className="text-[0.70rem] uppercase text-muted-foreground">CALORIES/DAY</div>
          </div>
          <Button variant="outline" size="icon">
            +
          </Button>
        </div>
        <Button className="mt-4 w-full">Set Goal</Button>
      </CardContent>
    </Card>
  )
}

