import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function PaymentMethod() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Method</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <Button variant="outline" className="h-20">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
            <span className="sr-only">Card</span>
          </Button>
          <Button variant="outline" className="h-20">
            <svg className="h-6 w-6" viewBox="0 0 24 24">
              <path
                d="M20.067 8.478c.492.88.556 2.014.3 3.327-.74 3.806-3.276 5.12-6.514 5.12h-.5a.805.805 0 0 0-.794.68l-.04.22-.63 4.876-.03.17a.804.804 0 0 1-.794.68h-2.52a.483.483 0 0 1-.477-.558l.922-5.866v-.011c.009-.077.08-.137.159-.137h1.14c4.73 0 7.753-1.988 8.577-6.58.018-.1.037-.2.052-.3.28-1.787-.002-3.062-.851-4.22v.013z"
                fill="#179BD7"
              />
              <path
                d="M9.479 8.455c.212-.013.426-.02.643-.02h3.98c.264 0 .522.018.774.053.67.094 1.245.265 1.73.51.28-1.787-.002-3.062-.851-4.22-.957-1.3-2.722-1.856-5.06-1.856H4.61a.804.804 0 0 0-.794.68L.095 18.44a.483.483 0 0 0 .477.558h3.482l.863-5.514L9.479 8.455z"
                fill="#253B80"
              />
            </svg>
            <span className="sr-only">PayPal</span>
          </Button>
          <Button variant="outline" className="h-20">
            <svg className="h-6 w-6" viewBox="0 0 24 24">
              <path
                d="M22.012 11.645c0-5.207-4.232-9.439-9.439-9.439-5.207 0-9.439 4.232-9.439 9.439 0 4.194 2.736 7.747 6.517 8.962v2.187h5.844v-2.187c3.781-1.215 6.517-4.768 6.517-8.962z"
                fill="#000000"
              />
            </svg>
            <span className="sr-only">Apple</span>
          </Button>
        </div>
        <div className="grid gap-2">
          <Input placeholder="Name" />
          <Input placeholder="Card number" />
          <div className="grid grid-cols-3 gap-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 12 }, (_, i) => (
                  <SelectItem key={i + 1} value={String(i + 1)}>
                    {String(i + 1).padStart(2, "0")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 10 }, (_, i) => (
                  <SelectItem key={i} value={String(new Date().getFullYear() + i)}>
                    {new Date().getFullYear() + i}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input placeholder="CVC" />
          </div>
        </div>
        <Button className="w-full">Continue</Button>
      </CardContent>
    </Card>
  )
}

