import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ShareDocument() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Share this document</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Anyone with the link can view this document.</p>
          <div className="flex space-x-2">
            <Input value="http://example.com/link/to/document" readOnly />
            <Button variant="secondary">Copy Link</Button>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-medium">People with access</h4>
          <div className="grid gap-4">
            {[
              { name: "Frank James", email: "fj@example.com" },
              { name: "Maria Fritz", email: "mf@example.com" },
              { name: "Ferb Langdon", email: "fl@example.com" },
            ].map((person) => (
              <div key={person.email} className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>{person.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-none">{person.name}</p>
                    <p className="text-sm text-muted-foreground">{person.email}</p>
                  </div>
                </div>
                <Select defaultValue="edit">
                  <SelectTrigger className="w-[110px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="edit">Can edit</SelectItem>
                    <SelectItem value="view">Can view</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

