"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { Priority } from '@/components/priority/priority';
import { Label } from '@/components/label/label';
import { SearchBar } from '@/components/searchbar/searchbar';
import { OnOffButton } from '@/components/onoffbutton/onoffbutton';
import { Attachment } from '@/components/attachment/attachment';
import { Sidenav } from '@/components/sidenav/sidenav';
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { IoMdCalendar } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosPin } from "react-icons/io";
import { FiMenu } from 'react-icons/fi';
const inter = Inter({ subsets: ['latin'] })

function Homepage() {
    const [showSidenav, setShowSidenav] = useState(false);
    const toggleSidenav = () => {
        <Sidenav/>
    };
    
    return (
        <div className='flex flex-row space-x-2 p-2 min-h-full '>
        <div className={`max-[475px]:hidden ${showSidenav ? 'sidenav-open' : 'sidenav-closed'}`}>
                <Sidenav />
            </div>
            <div className='rounded-2xl bg-cream h-[37rem] min-[375px]:h-[31.5rem] min-[425px]:h-[28rem] md:h-[46.5rem] xl:h-[67rem] w-[55rem] xl:w-[80rem]'>
            <div className='flex justify-between text-desert p-4'>
                    <div className=' items-center flex'>
                        <FiMenu size={25} className='cursor-pointer md:hidden' onClick={toggleSidenav} />
                        <span className='ml-2'>Summer Coding Challenge</span>
                    </div>
                    <div className='flex gap-2'>
                        <div className='m-1'>
                            <IoMdNotificationsOutline size={25} />
                        </div>
                        <div className='m-1'>
                            <IoMdHelpCircleOutline size={25} />
                        </div>
                        <div>
                            <Image  className='rounded-full ' src='/profile.png ' alt=' None' width={40} height={40} />
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
                    <div className='row-span-6 grid grid-cols-2 lg:grid-cols-3 grid-flow-col '>
                        <div className='rounded-2xl col-span-2 h-[25.5rem] min-[375px]:h-[20rem] min-[425px]:h-[17rem] md:h-[36rem] xl:h-[56.5rem] md:w-80 lg:w-[550px] xl:w-[50rem] grid grid-col-1 lg:grid-cols-2  bg-cream border-2 border-peach m-1 mt-2 md:m-2 mb-5'>
                            <div className='bg-peach m-1 md:m-2 lg:h-[18 rem]  rounded-2xl overflow-y-auto hide-scrollbar'>
                                <div className='text-desert p-2 font-bold'>
                                    To Do List
                                </div>
                                <Label />

                            </div>
                            <div className='bg-peach lg:h-[18 rem] m-2 rounded-2xl grid  overflow-y-auto overflow-x-hidden hide-scrollbar '>

                                <div className='m-1'>
                                    <textarea className='   p-5 m-1 md:m-1.5 h-24 w-[9rem] md:w-[17rem] lg:w-[14.5rem] xl:w-[22.5rem] resize-none outline-none rounded-lg  drop-shadow-md text-cream bg-coral text-sm placeholder-cream hide-scrollbar'
                                        placeholder='Add Description'>
                                    </textarea>
                                </div>

                                <div className='flex flex-wrap gap-2 m-1'>
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

                                        <IoIosPin size={20} />
                                    </div>
                                    <div className='flex flex-row gap-2 text-desert text-md m-0.5 mt-1 font-semibold'>
                                        Make Habit

                                        <OnOffButton />
                                    </div>
                                </div>
                                <textarea className='h-8 xl:h-[3rem] m-3 p-1 w-[8.5rem] md:w-[17rem] lg:w-[14.5rem] xl:w-[22.5rem] rounded-lg text-sm text-cream bg-coral resize-none outline-none hide-scrollbar placeholder:text-cream' placeholder=' Add Tags like exercise , work etc'>
                                   
                                </textarea>
                                <div className='text-center md:text-end'>
                                    <button className="rounded-lg bg-desert w-16 h-8 text-center text-sm text-cream items-end m-2 px-4 py-1 hover:bg-cream hover:text-coral">
                                        Save
                                    </button>
                                </div>

                            </div>
                        </div>
                        <div className='rounded-2xl m-2 mb-5 md:mt-4  lg:ml-4 xl:ml-0 min-[1088px]:w-[16.5rem] xl:w-[24rem] min-[1088px]:ml-0 bg-peach  md:h-[35.15rem] xl:h-[56rem] md:w-64 lg:w-[15.5rem] grid grid-rows-6'>
                            <div className='text-center m-2 text-desert font-semibold'>
                                Quote
                            </div>
                            <textarea className='bg-coral rounded-2xl m-2 row-span-5 mb-10 h-24 w-[9rem] md:w-[15rem] lg:w-[14.5rem] xl:w-[23rem] resize-none outline-none p-2 md:p-5 font-mono placeholder:text-cream' placeholder=' -Life Goes On...'>
                           
                            </textarea>
                        </div>

                    </div>
                </div>
            </div>
        </div>




    )
}
export default Homepage;