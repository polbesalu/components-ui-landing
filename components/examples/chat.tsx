import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"

export function ChatExample() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <Avatar className="h-8 w-8">
          <AvatarImage src="/placeholder.svg" alt="Sofia Davis" />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <div className="ml-3">
          <p className="text-sm font-medium">Sofia Davis</p>
          <p className="text-sm text-muted-foreground">m@example.com</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex gap-3">
            <p className="rounded-xl bg-muted p-3 text-sm">Hey, I'm having trouble with my account.</p>
          </div>
          <div className="flex gap-3">
            <p className="rounded-xl bg-primary p-3 text-sm text-primary-foreground">What seems to be the problem?</p>
          </div>
          <div className="flex gap-3">
            <p className="rounded-xl bg-muted p-3 text-sm">I can't log in.</p>
          </div>
          <div className="flex">
            <Input className="rounded-full" placeholder="Type your message..." />
            <Button size="icon" className="ml-2 rounded-full">
              <span className="sr-only">Send message</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

