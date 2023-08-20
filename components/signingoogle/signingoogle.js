"use client"
import {signIn, useSession } from "next-auth/react";
import { SlSocialGoogle } from "react-icons/sl";
const Signingoogle = () => {
    return (
<button type="submit" className=" flex flex-row gap-2 justify-center text-center w-80 p-3 border border-coral text-desert bg-cream rounded-full hover:bg-desert hover:text-cream m-4 drop-shadow-lg hover:drop-shadow-2xl" 
onClick={ () => { signIn()}   }>
Sign up with Google
<SlSocialGoogle size={25} />
</button>
    );
};
export {Signingoogle};