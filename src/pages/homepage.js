import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { useState } from "react";
import { Priority } from '@/components/priority';
import { Label } from '@/components/label';
import { SearchBar } from '../components/searchbar';
import { OnOffButton } from '@/components/onoffbutton';

import { SiApachenetbeanside } from "react-icons/si";
import { TfiViewGrid } from "react-icons/tfi";
import { TfiServer } from "react-icons/tfi";
import { RiLayout5Line } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoMdCalendar } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosPin } from "react-icons/io";
import { Attachment } from '@/components/attachment';
const inter = Inter({ subsets: ['latin'] })

function Homepage() {
   
    return (
        <div className='flex flex-row space-x-2 p-2 '>
            <div className='rounded-2xl bg-cream h-[30rem] w-48 '>
                <div className='flex  flex-row flex-wrap space-x-2 p-6 px-10 text-desert  text-center'>
                    <div className='w-3' >
                        <b><SiApachenetbeanside /> </b>
                    </div>
                    <div className='tracking-wide'> <b>My Stack</b>
                    </div>
                </div>
                <div className='space-y-2 cursor-pointer'>
                    <div className='text-desert  text-center px-7  h-8 top-28 flex  flex-row flex-wrap space-x-2 p-1 hover:bg-peach' >
                        <div >
                            <TfiViewGrid />
                        </div>
                        <div>
                            Courses
                        </div>
                    </div>
                    <div className='text-desert  text-center h-8 pl-7 flex flex-row flex-wrap space-x-2 p-1 hover:bg-peach'>
                        <div>
                            <RiLayout5Line />
                        </div>
                        <div>
                            Summer Coding
                        </div>
                    </div>
                    <div className='text-desert  text-center h-8 top-60 px-7 flex  flex-row flex-wrap space-x-2 p-1 hover:bg-peach'>
                        <div>
                            <TfiServer />
                        </div>
                        <div >
                            Data Science
                        </div>
                    </div>
                    <div className='text-desert  text-center h-8 top-60 px-7 flex  flex-row flex-wrap space-x-2 p-1 hover:bg-peach'>
                        <div>
                            <IoIosSettings size={20} />
                        </div>
                        <div >
                            Settings
                        </div>
                    </div>
                </div>
                <div className='text-desert  text-center top-96 mt-48 px-7 flex  flex-row flex-wrap space-x-2 cursor-pointer p-1 hover:bg-desert hover:text-cream'>
                    <div >
                        <IoIosLogOut />
                    </div>
                    <div>
                        Log Out
                    </div>
                </div>
            </div>


            <div className='rounded-2xl bg-cream h-[30rem] w-[55rem] '>

                <div className='flex justify-between text-desert p-4'>
                    <div className=''> Summer Coding Challenge
                    </div>
                    <div className='flex gap-2'>
                        <div className='m-1'>
                            <IoMdNotificationsOutline size={25} />
                        </div>
                        <div className='m-1'>
                            <IoMdHelpCircleOutline size={25} />
                        </div>
                        <div>
                        <Image className='rounded-full ' src="/assets/profile.png" alt='Profile Picture' width={40} height={40} />
                        </div>
                    </div>
                </div>
                <div className='grid grid-rows-7  divide-y divide-desert'>
                    <div className='text-desert flex justify-between  gap-2 p-4 '>

                        <div className='flex gap-2 pt-4'>
                            <IoMdCalendar size={25} />
                            To Do
                        </div>
                        <div className='flex '>
                            <div>
                                <SearchBar />
                            </div>
                            <div className='p-2'>
                                <IoMdNotifications size={25} />
                            </div>
                            <div className='p-2'>
                                <IoIosSettings size={25} />
                            </div>
                        </div>
                    </div>
                    <div className='row-span-6 grid grid-cols-3 grid-flow-col '>
                        <div className='rounded-2xl col-span-2 grid grid-cols-2 h-[21rem] bg-cream border-2 border-peach m-2 mb-5'>
                            <div className='bg-peach m-2 h-[19.5rem] rounded-2xl overflow-y-auto hide-scrollbar'>
                                <div className='text-desert p-2 font-bold'>
                                    To Do List
                                </div>
                                <Label />

                            </div>
                            <div className='bg-peach h-[19.5rem] m-2 rounded-2xl grid  overflow-y-auto hide-scrollbar '>
                                {/* {/* <div className='bg-coral row-span-2 m-4 rounded-2xl '> */}
                                
                                    <div className='m-2'>
                                 <textarea className='   p-5 m-1 w-full h-24 resize-none outline-none rounded-lg  drop-shadow-md text-cream bg-coral text-sm placeholder-cream'  placeholder="Add Description">
                                 </textarea>
                                 </div>
                               
                                <div className='flex flex-wrap gap-2 m-2'>
                                    <div className='flex flex-row mt-2 gap-0.5 text-desert text-md font-semibold'>
                                        Priority
                                    
                                    <Priority />
                                    </div>
                                    <div className='text-desert text-md font-semibold'>
                                        Repeat Every
                                    </div>
                                    <button className='rounded-full text-sm font-bold text-center px-4 py-0.5 h-6 w-18 border-2 border-cream text-cream'>
                                        2
                                    </button>
                                    <button className='rounded-full text-sm font-bold text-center px-4 py-0.5 h-6 w-18 border-2 border-desert text-desert'>
                                        Weeks
                                    </button>
                                </div>
                                <div className='flex flex-col m-2 gap-1'>
                               
                                    <div className='flex flex-row gap-2 text-desert text-md  font-semibold'>
                                        Add Attachment
                                  
                                        <IoIosAddCircleOutline size={20} />

                                       
                                    </div>
                                    <Attachment />
                                    <div className='flex flex-row gap-2 text-desert text-md m-0.5 mt-1 font-semibold'>
                                        Add Location
                                    
                                    <IoIosPin size={20}/>
                                    </div>
                                    <div className='flex flex-row gap-2 text-desert text-md m-0.5 mt-1 font-semibold'>
                                        Make Habit
                                    
                                    <OnOffButton />
                                    </div>
                                </div>
<div className='h-8 m-3 p-1 rounded-lg text-sm text-cream bg-coral'>
Add Tags like exercise , work etc
</div>
<div className='text-end'>
<button className="rounded-lg bg-desert w-16 h-8 text-center text-sm text-cream items-end m-2 px-4 py-1 hover:bg-cream hover:text-coral">
  Save
</button>
</div>

                            </div>
                        </div>
                        <div className='rounded-2xl m-2 mb-5 bg-peach grid grid-rows-6'>
                            <div className='text-center m-2 text-desert'>
                                Quote
                            </div>
                            <div className='bg-coral rounded-2xl m-2 row-span-5 mb-10 h-24 '>
                                <div className='text-cream  m-3 mt-6 font-mono'>
                                    -Life Goes On...
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>




    )
}
export default Homepage;