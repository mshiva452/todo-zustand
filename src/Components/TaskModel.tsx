"use client";
import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import useTodoStore from '@/store/todoStore'
import TodoForm from './TodoForm';

const TaskModel = () => {
    const { toggleTodoModal, toggleAddTodo } = useTodoStore(state => state);
    const handleTodoModal = () => {
        toggleTodoModal();
    }
    return (
        <Dialog defaultOpen={false} modal={toggleAddTodo} open={toggleAddTodo} onOpenChange={handleTodoModal}>
            <DialogContent className='bg-slate-50' onInteractOutside={(e) => e.preventDefault()}>
                <DialogHeader>
                    <DialogTitle>Add Task</DialogTitle>
                    <DialogDescription>
                        <TodoForm />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default TaskModel