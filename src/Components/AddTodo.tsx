"use client";
import React from 'react';
import { Card } from './ui/card';
import { Plus } from 'lucide-react';
import useTodoStore from '@/store/todoStore';
const AddTodo = () => {
    const { toggleTodoModal } = useTodoStore(state => state)
    const handleTodoModal = () => {
        toggleTodoModal()
    }
    return (
        <Card className="flex flex-col justify-center items-center bg-black border-slate-700 text-slate-50 hover:bg-slate-900 p-4 w-[240px] h-[200px]" onClick={handleTodoModal}>
            <Plus />
        </Card>
    )
}

export default AddTodo