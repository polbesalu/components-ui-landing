"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Inbox, Send, Archive, Trash2, Users, Clock, ShoppingCart, AlertCircle } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

const emails = [
  {
    id: 1,
    from: "Francis Smith",
    subject: "Meeting",
    preview:
      "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.",
    time: "over 1 year ago",
    tags: ["meeting", "work", "important"],
    read: false,
  },
  {
    id: 2,
    from: "Michael Smith",
    subject: "Re: Project Update",
    preview:
      "Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive. The team has done a fantastic job, and I...",
    time: "over 1 year ago",
    tags: ["work", "important"],
    read: true,
  },
  // Add more emails as needed
]

export function MailInterface() {
  return (
    <Card className="h-[800px]">
      <CardContent className="flex h-full p-0">
        <div className="w-[240px] border-r p-4 space-y-4">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>AK</AvatarFallback>
            </Avatar>
            <Button variant="ghost" className="w-full justify-start font-normal">
              John Doe 
            </Button>
          </div>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <Inbox className="mr-2 h-4 w-4" />
              Inbox
              <Badge variant="secondary" className="ml-auto">
                128
              </Badge>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Send className="mr-2 h-4 w-4" />
              Sent
              <Badge variant="secondary" className="ml-auto">
                9
              </Badge>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Archive className="mr-2 h-4 w-4" />
              Archive
              <Badge variant="secondary" className="ml-auto">
                23
              </Badge>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Trash2 className="mr-2 h-4 w-4" />
              Trash
            </Button>
          </div>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <Users className="mr-2 h-4 w-4" />
              Social
              <Badge variant="secondary" className="ml-auto">
                972
              </Badge>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Clock className="mr-2 h-4 w-4" />
              Updates
              <Badge variant="secondary" className="ml-auto">
                342
              </Badge>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Shopping
              <Badge variant="secondary" className="ml-auto">
                8
              </Badge>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <AlertCircle className="mr-2 h-4 w-4" />
              Promotions
              <Badge variant="secondary" className="ml-auto">
                21
              </Badge>
            </Button>
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <div className="flex items-center gap-2 border-b p-2">
            <Input className="rounded-full" placeholder="Search" />
            <Button variant="ghost" size="icon">
              <Archive className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
          <ScrollArea className="flex-1">
            {emails.map((email) => (
              <div key={email.id} className="flex flex-col border-b p-4 hover:bg-muted/50">
                <div className="flex items-center gap-2">
                  <div className="font-semibold">{email.from}</div>
                  <div className="ml-auto text-sm text-muted-foreground">{email.time}</div>
                </div>
                <div className="text-sm font-medium">{email.subject}</div>
                <div className="text-sm text-muted-foreground line-clamp-2">{email.preview}</div>
                <div className="mt-2 flex gap-2">
                  {email.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </ScrollArea>
          <div className="border-t p-4">
            <div className="flex items-center gap-2 mb-2">
              <Switch id="mute" />
              <label htmlFor="mute" className="text-sm">
                Mute this thread
              </label>
            </div>
            <Textarea placeholder="Reply William Smith..." className="min-h-[100px]" />
            <div className="mt-2 flex justify-end">
              <Button>Send</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

