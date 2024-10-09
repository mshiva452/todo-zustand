"use client";
import { TaskStatus } from '@/lib/constants';
import useTodoStore from '@/store/todoStore';
import { MouseEvent } from 'react';
const Filters = () => {
    const { selectedFilter, setFilter } = useTodoStore(state => state);
    const handleFilter = (e: MouseEvent<HTMLUListElement>) => {
        const status = e.target as HTMLUListElement
        setFilter(status.textContent as string)
    }
    return (
        <ul className='flex flex-col w-full items-center justify-center gap-1' onClick={handleFilter}>
            <li className='hover:bg-black hover:w-full w-full self-center text-center py-1' style={{ background: selectedFilter === TaskStatus.ALL_TASK ? "#000" : "" }}>{TaskStatus.ALL_TASK}</li>
            <li className='hover:bg-black hover:w-full w-full self-center text-center py-1' style={{ background: selectedFilter === TaskStatus.COMPLETED ? "#000" : "" }}>{TaskStatus.COMPLETED}</li>
            <li className='hover:bg-black hover:w-full w-full self-center text-center py-1' style={{ background: selectedFilter === TaskStatus.PENDING ? "#000" : "" }}>{TaskStatus.PENDING}</li>
            <li className='hover:bg-black hover:w-full w-full self-center text-center py-1' style={{ background: selectedFilter === TaskStatus.ARCHIVE ? "#000" : "" }}>{TaskStatus.ARCHIVE}</li>
        </ul>
    )
}

export default Filters