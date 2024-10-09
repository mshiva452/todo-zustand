"use client";
import useTodoStore from "@/store/todoStore"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { MouseEvent } from "react";
import { Button } from "./ui/button";
import { TaskStatus } from "@/lib/constants";


const Todo = () => {
    const { todos, selectedFilter, updateStatus } = useTodoStore((state) => state);
    const todoList = todos.filter(item => {
        if (selectedFilter !== "All Task") {
            return item.status === selectedFilter
        }
        return item;
    })
    const handleStatus = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const id = e.target as HTMLButtonElement;
        updateStatus(id.dataset.taskId as string)
    }
    return (
        todoList?.map(todo => {
            return (
                <Card className="flex flex-col justify-between items-start bg-black border-slate-700 text-slate-50 hover:bg-slate-900 p-2 w-[240px] h-[200px]" key={todo.id}>
                    <CardHeader className="flex flex-row items-center justify-between p-1 w-full">
                        <CardTitle>{todo.title}</CardTitle>
                        <CardDescription>{todo.createdAt}</CardDescription>
                    </CardHeader>
                    <CardContent className="py-2 px-1 overflow-y-hidden">
                        <p>{todo.desc}</p>
                    </CardContent>
                    <CardFooter className="p-1">
                        <Button variant="outline" data-task-id={todo.id} onClick={handleStatus} className={
                            todo.status === TaskStatus.COMPLETED ? "border-green-700 hover:bg-green-700 hover:text-slate-50" : (todo.status === TaskStatus.ARCHIVE ? "border-slate-700 hover:bg-slate-700 hover:text-slate-50" : "border-orange-700 hover:bg-orange-700 hover:text-slate-50")
                        }>
                            {todo.status}
                        </Button>
                    </CardFooter>
                </Card>
            )
        })
    )
}

export default Todo