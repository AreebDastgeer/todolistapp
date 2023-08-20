import Image from 'next/image'
import { Inter } from 'next/font/google'
import React  from "react";
import SignUp from './signup/page';

const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  return (<main>
   <SignUp />
</main>
  )
}
