import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function CalendarExample() {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="text-sm">June 2023</div>
        <div className="mt-4 grid grid-cols-7 gap-2 text-center text-sm">
          <div className="text-muted-foreground">Su</div>
          <div className="text-muted-foreground">Mo</div>
          <div className="text-muted-foreground">Tu</div>
          <div className="text-muted-foreground">We</div>
          <div className="text-muted-foreground">Th</div>
          <div className="text-muted-foreground">Fr</div>
          <div className="text-muted-foreground">Sa</div>
          <Button variant="ghost" className="h-8 w-8 p-0 opacity-50">
            28
          </Button>
          <Button variant="ghost" className="h-8 w-8 p-0 opacity-50">
            29
          </Button>
          <Button variant="ghost" className="h-8 w-8 p-0 opacity-50">
            30
          </Button>
          <Button variant="ghost" className="h-8 w-8 p-0">
            1
          </Button>
          <Button variant="ghost" className="h-8 w-8 p-0">
            2
          </Button>
          <Button variant="ghost" className="h-8 w-8 p-0">
            3
          </Button>
          <Button variant="ghost" className="h-8 w-8 p-0">
            4
          </Button>
          <Button variant="ghost" className="h-8 w-8 p-0">
            5
          </Button>
          <Button variant="ghost" className="h-8 w-8 p-0">
            6
          </Button>
          <Button variant="ghost" className="h-8 w-8 p-0">
            7
          </Button>
          <Button variant="ghost" className="h-8 w-8 p-0">
            8
          </Button>
          <Button variant="ghost" className="h-8 w-8 p-0">
            9
          </Button>
          <Button variant="ghost" className="h-8 w-8 p-0">
            10
          </Button>
          <Button variant="ghost" className="h-8 w-8 p-0">
            11
          </Button>
          <Button variant="ghost" className="h-8 w-8 p-0">
            12
          </Button>
          <Button variant="ghost" className="h-8 w-8 p-0">
            13
          </Button>
          <Button variant="ghost" className="h-8 w-8 p-0 bg-primary/10">
            14
          </Button>
          <Button variant="ghost" className="h-8 w-8 p-0">
            15
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

