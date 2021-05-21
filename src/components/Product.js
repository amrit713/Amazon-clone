import React, { useEffect, useState } from 'react'
import Image from "next/image"
import {StarIcon} from "@heroicons/react/solid"
import Currency  from "react-currency-formatter"
import Aos from "aos"
import "aos/dist/aos.css"

const MAX_RATING = 5;
const MIN_RATING = 1;






function Product({title, image, price, category, description}) {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    

    const [rating] = useState(
        Math.floor(Math.random()*(MAX_RATING - MIN_RATING +1)) +MIN_RATING 
    )

    const [hasPrime] = useState(Math.random() < 0.5)

    
    return (
        <div className="  relative flex flex-col m-5 bg-white z-20 p-10 " data-aos="fade-up">
            <p className="absolute top-2 right-2 text-sm italic text-gray-400">{category}</p>
            
            <Image src={image} height={200} width={200} objectFit="contain" />
            
            <h4 className="flex">{title}</h4>

            <div className="flex">
                {Array(rating).fill().map((_,i)=>{
                     return <StarIcon className="h-5 text-yellow-500" />

                })}
                
            </div>

           <p className="text-xs my-2 line-clamp-2" data-aos="fade-out" data-aos-duration="3000" >{description}</p>
           <div className="mb-5">
               <Currency  quantity={price} currency="USD"/>
           </div>

           {
               hasPrime&&(
                   <div className="flex items-center space-x-2 mt-5">
                       <img  className="w-12" src="https://links.papareact.com/fdw" alt="" />
                       <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                   </div>
               )

           }

           <button className="mt-auto button">Add To Basket</button>
        </div>
    )
}

export default Product
