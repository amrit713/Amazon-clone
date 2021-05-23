import React from 'react'
import Image from "next/image"


import {
    MenuIcon, SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline"

import {signIn, signOut,useSession} from "next-auth/client"
import { useRouter} from "next/router"
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/basketSlice'

function Header() {

    const [session] = useSession();
    const router = useRouter();
    const items = useSelector(selectItems)

   


    return (
        <header>
            {/* top nav */}
           <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
               {/* amazon logo -left */}
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 " >
            <Image 
                onClick={()=>router.push("/")}
                src="https://links.papareact.com/f90"
                width={150}
                height={40}
                objectFit="contain"

                className="cursor-pointer"
            /> 
        </div>
            {/* search bar */}
                <div className="  sm:flex rounded-md cursor-pointer flex-grow bg-yellow-400 hover:bg-yellow-500 text-black hidden h-10">
                    <input className="focus:outline-none p-2 h-full w-6 flex-grow flex-shrink rounded-l-md px-4" type="text" />
                    <SearchIcon className=" h-12 p-4"/>

                </div>

            {/* Right side */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                
                <div className=" link" onClick={!session? signIn: signOut}>
                <p > 
                    {session? `Hello, ${session.user.name}` : "Sign In" }
                </p>
                
                <p className="font-extrabold md:text-sm"> Account & Lists</p>
                </div>

                <div className=" link">
                <p> Returns</p>
                <p className="font-extrabold md:text-sm">& Orders</p>
                </div>
               
                <div className=" relative link flex items-center "
                onClick={()=>router.push("/checkout")}>
                <ShoppingCartIcon className="h-10"/>
                <p className="hidden md:inline font-extrabold md:text-sm">Basket</p>
                <span className="flex items-center justify-center absolute top-0 right-0 md:right-11 h-4 w-4 rounded-full bg-yellow-400 text-black font-bold">
                   {items.length}
                </span>
                </div>

                </div>
            
           </div>

           {/* bottom nav */}
           <div className="flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6">

            <p className="link flex items-center">
                <MenuIcon className="h-6 mr-1"/>
                All
            </p>

            <p className="link">Prime Video</p>
            <p className="link">Amazon Business</p>
            <p className="link">Today's Deals</p>
            <p className="hidden lg:inline-flex link ">Electronics</p>
            <p className="hidden lg:inline-flex link ">Food & Grocery</p>
            <p className="hidden lg:inline-flex link ">Prime</p>
            <p className="hidden lg:inline-flex link ">Buy Again</p>
            <p className="hidden lg:inline-flex link ">Shopper Toolkit</p>
            <p className="hidden lg:inline-flex link ">Health & Personal Care </p>
           </div>
        </header>
    )
}

export default Header

