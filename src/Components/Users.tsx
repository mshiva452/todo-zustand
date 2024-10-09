import { CircleUserRound } from 'lucide-react';
import { Separator } from './ui/separator';
import Search from './Search';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
const Users = () => {
    return (
        <div className='flex flex-col items-center w-full'>
            <div className='pb-16 pt-2 flex flex-col items-center justify-center'>
                <Avatar className='w-[100px] h-[100px] rounded-lg flex items-center justify-center'>
                    <AvatarImage src="https://avatars.githubusercontent.com/u/124599?v=4" className='rounded-full' />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className='pt-2'>SM</span>
            </div>
            <Search />
            {/*  <Separator className='w-full bg-slate-500' /> */}
        </div>
    )
}

export default Users