import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { SiApachenetbeanside } from "react-icons/si";
import { TfiViewGrid } from "react-icons/tfi";
import { TfiServer } from "react-icons/tfi";
import { RiLayout5Line } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
const Sidenav = ( ) => {
    const router = useRouter();
    const handleLogout = () => {
        router.push('/login');
    };
    return (
        <div className={`'translate-x-0' : '-translate-x-full'}`}>
        <div className='rounded-2xl bg-cream h-[37rem] min-[375px]:h-[31.5rem] min-[425px]:h-[28rem] md:h-[46.5rem] xl:h-[67rem] w-48 '>
            <div className='flex  flex-row flex-wrap space-x-2 p-6 px-10 mb-7 text-desert  text-center'>
                <div className='w-3' >
                    <b><SiApachenetbeanside /> </b>
                </div>
                <div className='tracking-wide'> <b>My Stack</b>
                </div>
            </div>
            <div className='space-y-5 md:space-y-12 lg:space-y-10 cursor-pointer'>
                <div className='text-desert  text-center px-10 md:px-7 lg:px-5 h-8 top-28 flex  flex-row flex-wrap space-x-2 p-1 hover:bg-peach' >
                    <div >
                        <TfiViewGrid />
                    </div>
                    <div className="invisible md:visible">
                        Courses
                    </div>
                </div>
                <div className='text-desert  text-center h-8 px-10 md:pl-7 lg:px-5 flex flex-row flex-wrap space-x-2 p-1 hover:bg-peach'>
                    <div>
                        <RiLayout5Line />
                    </div>
                    <div className="invisible md:visible">
                        Summer Coding
                    </div>
                </div>
                <div className='text-desert  text-center h-8 top-60 px-10 md:px-7 lg:px-5 flex  flex-row flex-wrap space-x-2 p-1 hover:bg-peach'>
                    <div>
                        <TfiServer />
                    </div>
                    <div className="invisible md:visible">
                        Data Science
                    </div>
                </div>
                <div className='text-desert text-center h-8 top-60 px-10 md:px-7 lg:px-5 flex  flex-row flex-wrap space-x-2 p-1 hover:bg-peach'>
                    <div>
                        <IoIosSettings size={20} />
                    </div>
                    <div className="invisible md:visible">
                        Settings
                    </div>
                </div>
            </div>
            <div className='text-desert  text-center mt-48 min-[375px]:mt-36 min-[425px]:mt-20 md:mt-60 lg:mt-80  px-10 md:px-7 lg:px-5 flex  flex-row flex-wrap space-x-2 cursor-pointer p-1 hover:bg-desert hover:text-cream' onClick={handleLogout}>
                <div >
                    <IoIosLogOut />
                </div>
                <div className="invisible md:visible">
                    Log Out
                </div>
            </div>
        </div>
        </div>
    )
}
export { Sidenav };