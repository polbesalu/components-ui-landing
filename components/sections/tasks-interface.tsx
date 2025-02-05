"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { MoreHorizontal, ArrowUpDown } from "lucide-react"

const tasks = [
  {
    id: "TASK-1",
    type: "Documentation",
    title: "You can't upload '.rar' files...",
    status: "In Progress",
    priority: "Medium",
  },
  {
    id: "TASK-2",
    type: "Documentation",
    title: "Storybook documentation...",
    status: "In Progress",
    priority: "Medium",
  },
  {
    id: "TASK-3",
    type: "Code",
    title: "Fix backend functionalities...",
    status: "In Progress",
    priority: "Medium",
  },
  {
    id: "TASK-4",
    type: "Database",
    title: "New Stored function for payment details...",
    status: "In Progress",
    priority: "Medium",
  },
  {
    id: "TASK-5",
    type: "Client",
    title: "Solve tickets about errors in product...",
    status: "In Progress",
    priority: "High",
  },
  {
    id: "TASK-6",
    type: "Meeting",
    title: "One to One at 12:00 p.m...",
    status: "New",
    priority: "High",
  },
  {
    id: "TASK-7",
    type: "Documentation",
    title: "You can't upload '.zip' files...",
    status: "In Progress",
    priority: "Medium",
  },
  {
    id: "TASK-8",
    type: "Documentation",
    title: "Do documentation about the product...",
    status: "In Progress",
    priority: "Low",
  },
  {
    id: "TASK-9",
    type: "Client",
    title: "New payment functionalities...",
    status: "In Progress",
    priority: "High",
  },
  {
    id: "TASK-10",
    type: "Code",
    title: "Revise code, add good practices...",
    status: "In Progress",
    priority: "Medium",
  },
  {
    id: "TASK-11",
    type: "Meeting",
    title: "Meeting at 7:00 a.m...",
    status: "New",
    priority: "Low",
  },
  {
    id: "TASK-12",
    type: "Code",
    title: "Add more site features...",
    status: "In Progress",
    priority: "High",
  }
  // Add more tasks...
]

export function TasksInterface() {
  return (
    <Card className="h-[800px]">
      <CardHeader>
        <CardTitle>Welcome back!</CardTitle>
        <p className="text-sm text-muted-foreground">Here's a list of your tasks for this month!</p>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 mb-4">
          <Input placeholder="Filter tasks..." className="max-w-sm" />
          <Button variant="outline" size="sm">
            <ArrowUpDown className="h-4 w-4 mr-2" />
            Status
          </Button>
          <Button variant="outline" size="sm">
            <ArrowUpDown className="h-4 w-4 mr-2" />
            Priority
          </Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox />
              </TableHead>
              <TableHead className="w-[100px]">Task</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead className="w-[70px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>{task.id}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{task.type}</Badge>
                    <span className="truncate">{task.title}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary">{task.status}</Badge>
                </TableCell>
                <TableCell>
                  <Badge>{task.priority}</Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

