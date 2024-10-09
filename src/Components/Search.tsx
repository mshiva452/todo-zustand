import React from 'react'
import { Input } from './ui/input'
import { Search as SearchIcon } from "lucide-react"
import { Label } from './ui/label'
const Searchs = () => {
    return (
        <div className='flex p-1'>
            <Label htmlFor='search' className='flex flex-row-reverse relative'>
                <SearchIcon className='absolute top-3 right-2 cursor-pointer' size={15} />
                <Input placeholder='Search Task' name='search' type='text' className='pr-8' />
            </Label>
        </div>
    )
}

export default Searchs