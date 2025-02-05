"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function IssueReportForm() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Report an issue</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>What area are you having problems with?</Label>
          <div className="grid gap-4 md:grid-cols-2">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Area" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="billing">Billing</SelectItem>
                <SelectItem value="technical">Technical</SelectItem>
                <SelectItem value="account">Account</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Security Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Severity 1</SelectItem>
                <SelectItem value="2">Severity 2</SelectItem>
                <SelectItem value="3">Severity 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-2">
          <Label>Subject</Label>
          <Input placeholder="I need help with..." />
        </div>
        <div className="space-y-2">
          <Label>Description</Label>
          <Textarea placeholder="Please include all information relevant to your issue." />
        </div>
        <div className="flex justify-end space-x-4">
          <Button variant="outline">Cancel</Button>
          <Button>Submit</Button>
        </div>
      </CardContent>
    </Card>
  )
}

