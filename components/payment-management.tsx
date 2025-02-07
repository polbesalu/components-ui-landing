"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MoreHorizontal } from "lucide-react"

const payments = [
  {
    status: "Success",
    email: "mark@example.com",
    amount: "$435.00",
  },
  {
    status: "Success",
    email: "alex@example.com",
    amount: "$89.74",
  },
  {
    status: "Processing",
    email: "laura@example.com",
    amount: "$934.20",
  },
  {
    status: "Failed",
    email: "leo@example.com",
    amount: "$651.03",
  },
]

export function PaymentManagement() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <Input placeholder="Filter emails..." className="max-w-sm" />
          <Button variant="outline">Columns</Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Status</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.email}>
                <TableCell>{payment.status}</TableCell>
                <TableCell>{payment.email}</TableCell>
                <TableCell className="text-right">{payment.amount}</TableCell>
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

