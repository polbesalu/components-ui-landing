"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Save, Code, Share, MoreHorizontal, Type, Download, FileText } from "lucide-react"
import { Label } from "@/components/ui/label"

export function PlaygroundInterface() {
  return (
    <Card className="h-[800px]">
      <CardContent className="p-0">
        <div className="flex h-full">
          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-medium">Playground</h3>
              <div className="flex items-center gap-2">
                <Select defaultValue="text-davinci-003">
                  <SelectTrigger className="w-[180px] bg-background">
                    <SelectValue placeholder="Load a preset..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="text-davinci-003">text-davinci-003</SelectItem>
                    <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
                    <SelectItem value="gpt-4">GPT-4</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="secondary" size="sm">
                  <Save className="h-4 w-4" />
                  <span className="ml-2">Save</span>
                </Button>
                <Button variant="secondary" size="sm">
                  <Code className="h-4 w-4" />
                  <span className="ml-2">View code</span>
                </Button>
                <Button variant="secondary" size="sm">
                  <Share className="h-4 w-4" />
                  <span className="ml-2">Share</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex-1 p-4">
              <Textarea
                placeholder="Write a tagline for an ice cream shop"
                className="min-h-[600px] resize-none bg-background"
              />
            </div>
            <div className="border-t p-4">
              <div className="flex gap-2">
                <Button>Submit</Button>
                <Button variant="secondary" size="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-4 w-4">
                    <path
                      fill="currentColor"
                      d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88Zm16-120h-32a8 8 0 0 0-8 8v96a8 8 0 0 0 16 0v-40h24a32 32 0 0 0 0-64Zm0 48h-24v-32h24a16 16 0 0 1 0 32Z"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
          <div className="w-[300px] border-l p-4 space-y-6">
            <div className="space-y-2">
              <Label>Mode</Label>
              <div className="bg-muted inline-flex rounded-md p-1">
                <Button variant="ghost" size="sm" className="w-10 h-10 p-0">
                  <Type className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="w-10 h-10 p-0">
                  <Download className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="w-10 h-10 p-0">
                  <FileText className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Model</Label>
              <Select defaultValue="text-davinci-003">
                <SelectTrigger>
                  <SelectValue placeholder="Select model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="text-davinci-003">text-davinci-003</SelectItem>
                  <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
                  <SelectItem value="gpt-4">GPT-4</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Temperature</Label>
                  <span className="text-sm text-muted-foreground">0.56</span>
                </div>
                <Slider
                  defaultValue={[0.56]}
                  max={1}
                  step={0.01}
                  className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Maximum Length</Label>
                  <span className="text-sm text-muted-foreground">256</span>
                </div>
                <Slider
                  defaultValue={[256]}
                  max={1000}
                  step={1}
                  className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Top P</Label>
                  <span className="text-sm text-muted-foreground">0.9</span>
                </div>
                <Slider
                  defaultValue={[0.9]}
                  max={1}
                  step={0.01}
                  className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
                />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

