import React, { useEffect, useState } from 'react'
import Image from "next/image"
import {StarIcon} from "@heroicons/react/solid"
import Currency  from "react-currency-formatter"
import Aos from "aos"
import "aos/dist/aos.css"
import { useDispatch } from 'react-redux'
import {addToBasket} from "../slices/basketSlice"

const MAX_RATING = 5;
const MIN_RATING = 1;






function Product({title, image, price, category, description,id}) {

    const dispatch = useDispatch()

    useEffect(()=>{
        Aos.init({duration:1500})
    },[])

    
    
    const [rating] = useState(
        Math.floor(Math.random()*(MAX_RATING - MIN_RATING +1)) +MIN_RATING 
    )

    const [hasPrime] = useState(Math.random() < 0.5)


    const addItemToBasket =() =>{
        const product = {
            id,
            title,
             image,
             price,
             category,
             description,
             rating,
             hasPrime
        }
        dispatch(addToBasket(product))
    }

        
   
    

    
    return (
        <div className="  relative flex flex-col m-5 bg-white z-20 p-10  rounded-2xl hover:shadow-2xl" data-aos="fade-up">
            <p className="absolute top-2 right-2 text-sm italic text-gray-400">{category}</p>
            
            <Image src={image} height={200} width={200} objectFit="contain" />
            
            <h4 className="flex">{title}</h4>

            <div className="flex">
                {Array(rating).fill().map((_,i)=>{
                     return <StarIcon key={i} className="h-5 text-yellow-500" />

                })}
                
            </div>

           <p className="text-xs my-2 line-clamp-2 text-gray-600" data-aos="fade-out" data-aos-duration="3000" >{description}</p>
           <div className="mb-5">
               <Currency  quantity={price} currency="NPR"/>
           </div>

           {
               hasPrime&&(
                   <div className="flex items-center space-x-2 mt-5">
                       <img  className="w-12" src="https://links.papareact.com/fdw" alt="" />
                       <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                   </div>
               )

           }

           <button className="mt-auto button" 
           onClick={addItemToBasket}
           >Add To Basket</button>
        </div>
    )
}

export default Product
