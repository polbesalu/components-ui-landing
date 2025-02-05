import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"

export function CookieSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cookie Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="necessary" className="flex flex-col space-y-1">
              <span>Strictly Necessary</span>
              <span className="text-xs text-muted-foreground">
                These cookies are essential in order to use the website and use its features.
              </span>
            </Label>
            <Switch id="necessary" defaultChecked />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="functional" className="flex flex-col space-y-1">
              <span>Functional Cookies</span>
              <span className="text-xs text-muted-foreground">
                These cookies allow the website to provide personalized functionality.
              </span>
            </Label>
            <Switch id="functional" />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="performance" className="flex flex-col space-y-1">
              <span>Performance Cookies</span>
              <span className="text-xs text-muted-foreground">
                These cookies help to improve the performance of the website.
              </span>
            </Label>
            <Switch id="performance" />
          </div>
        </div>
        <Button className="w-full">Save preferences</Button>
      </CardContent>
    </Card>
  )
}

