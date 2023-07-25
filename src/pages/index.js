import Image from 'next/image'
import { Inter } from 'next/font/google'
import React  from "react";
import  Homepage  from './homepage';

const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  return (
   <Homepage/>

  )
}
