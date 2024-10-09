"use client";
import * as z from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "./ui/popover"
import { Input } from './ui/input';
import { Button } from './ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select"
import { Calendar } from './ui/calendar';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { TaskStatus } from '@/lib/constants';
import useTodoStore, { ITodos } from '@/store/todoStore';
const formSchema = z.object({
    title: z.string().trim().min(3),
    desc: z.string().trim().min(3),
    status: z.enum([TaskStatus.PENDING, TaskStatus.COMPLETED, TaskStatus.ARCHIVE]).default(TaskStatus.PENDING),
    createdAt: z.date().default(new Date())
})
const TodoForm = () => {
    const { setTodo, toggleTodoModal } = useTodoStore(state => state)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            desc: "",
            status: TaskStatus.PENDING,
            createdAt: new Date()
        }
    })
    const handleSubmit = (values: z.infer<typeof formSchema>) => {
        const task = JSON.parse(JSON.stringify(values))
        task["id"] = crypto.randomUUID();
        task.createdAt = format(task.createdAt, "MM/dd/yyyy")
        setTodo(task as ITodos);
        toggleTodoModal()
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className='flex flex-col gap-5'>
                <FormField control={form.control} name="title" render={({ field }) => {
                    return <FormItem>
                        <FormControl>
                            <Input {...field} type='text' placeholder='Enter Title' />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }} />
                <FormField control={form.control} name="desc" render={({ field }) => {
                    return <FormItem>
                        <FormControl>
                            <Input {...field} type='text' placeholder='Enter Description' />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }} />
                <FormField control={form.control} name="status" render={({ field }) => {
                    return <FormItem>
                        <FormControl className='w-full'>
                            <Select {...field} onValueChange={field.onChange}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value={TaskStatus.PENDING}>{TaskStatus.PENDING}</SelectItem>
                                    <SelectItem value={TaskStatus.COMPLETED}>{TaskStatus.COMPLETED}</SelectItem>
                                    <SelectItem value={TaskStatus.ARCHIVE}>{TaskStatus.ARCHIVE}</SelectItem>
                                </SelectContent>
                            </Select>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }} />
                <FormField control={form.control} name="createdAt" render={({ field }) => {
                    return <FormItem>
                        <FormControl>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className="w-full"
                                    >
                                        {field.value ? (
                                            format(field.value, "PPP")
                                        ) : (
                                            <span>Pick a date</span>
                                        )}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-80">
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        className="rounded-md border"
                                    />
                                </PopoverContent>
                            </Popover>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }} />
                <Button type="submit" className='w-full'>Submit</Button>
            </form>
        </Form>
    )
}

export default TodoForm