import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const tasks = [
  {
    task: "TASK-001",
    title: "Do something with this or that",
    status: "Done",
    priority: "Medium",
  },
  {
    task: "TASK-002",
    title: "Do something with this or that part 2",
    status: "In Progress",
    priority: "High",
  },
  {
    task: "TASK-003",
    title: "Do something with this or that pt 3",
    status: "To Do",
    priority: "Low",
  }
]

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-slate-700 flex flex-col items-center justify-center">
      {/* Center Container */}
      <div className="w-auto flex self-center bg-slate-200">
      <Table className="bg-slate-800">
      {/* <TableCaption>A list of your recent tasks.</TableCaption> */}
      <TableHeader className="bg-slate-900">
        <TableRow>
          <TableHead>Check</TableHead>
          <TableHead>Task</TableHead>
          <TableHead className="w-[30rem]">Title</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task) => (
          <TableRow key={task.task}>
            <TableCell><Checkbox></Checkbox></TableCell>
            <TableCell className="font-medium">{task.task}</TableCell>
            <TableCell>{task.title}</TableCell>
            <TableCell>{task.status}</TableCell>
            <TableCell className="text-right">{task.priority}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
      </div>
    </div>
  );
}
