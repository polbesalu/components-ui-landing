"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"

const sidebarItems = ["Profile", "Account", "Appearance", "Notifications", "Display"]

export function FormsInterface() {
  return (
    <Card className="h-[800px]">
      <CardContent className="flex h-full p-0">
        <div className="w-[200px] border-r p-6">
          <div className="space-y-1">
            {sidebarItems.map((item, index) => (
              <Button key={index} variant={item === "Profile" ? "secondary" : "ghost"} className="w-full justify-start">
                {item}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex-1 p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium">Settings</h3>
              <p className="text-sm text-muted-foreground">Manage your account settings and set e-mail preferences.</p>
            </div>
            <Separator />
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium">Profile</h3>
                <p className="text-sm text-muted-foreground">This is how others will see you on the site.</p>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="Dave" />
                  <p className="text-sm text-muted-foreground">
                    This is your public display name. It can be your real name or a pseudonym. You can only change this
                    once every 30 days.
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Select a verified email to display" />
                  <p className="text-sm text-muted-foreground">
                    You can manage verified email addresses in your email settings.
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea id="bio" defaultValue="I own a computer." />
                  <p className="text-sm text-muted-foreground">
                    You can @mention other users and organizations to link to them.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>URLs</Label>
                    <p className="text-sm text-muted-foreground">
                      Add links to your website, blog, or social media profiles.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Input defaultValue="https://dave.com" />
                    <Input defaultValue="http://twitter.com/dave" />
                  </div>
                  <Button variant="outline">Add URL</Button>
                </div>
                <div className="flex justify-end">
                  <Button>Update profile</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

