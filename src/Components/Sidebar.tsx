import React from 'react'
import Filters from './Filters'
import Users from './Users'
import Login from './Login'

const Sidebar = () => {
    return (
        <div className='flex flex-col justify-between items-center h-screen w-full'>
            <Users />
            <Filters />
            <Login />
        </div>
    )
}

export default Sidebar