"use client";
import React from 'react';
import { Button } from './ui/button';
import { Plus } from 'lucide-react';
import TaskModel from './TaskModel';
import { Dialog, DialogTrigger } from './ui/dialog';
import useTodoStore from '@/store/todoStore';

const Header = () => {
    const { toggleTodoModal } = useTodoStore(state => state);
    const handleTodoModal = () => {
        toggleTodoModal()
    }
    return (
        <div className='flex flex-row justify-between items-center px-2 pb-2 w-full'>
            <h1>All Tasks</h1>
            <Button variant={'link'} className='text-slate-500 hover:text-slate-50' onClick={handleTodoModal}>
                <Plus />
            </Button>
        </div>
    )
}

export default Header