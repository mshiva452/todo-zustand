import AddTodo from '@/Components/AddTodo';
import Todo from '@/Components/Todo';
import { ScrollArea } from '@/Components/ui/scroll-area';
import React from 'react';
const TodoListPage = () => {
    return (
        <ScrollArea className='flex flex-row'>
            <div className='flex flex-row min-h-10 w-[100%] gap-2 flex-wrap'>
                <Todo />
                <AddTodo />
            </div>
        </ScrollArea>
    )
}

export default TodoListPage