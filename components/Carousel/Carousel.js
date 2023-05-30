"use client"
import React, {useState} from "react"
import { motion } from 'framer-motion'
import { BsFillEmojiAngryFill } from 'react-icons/bs';
import { BsFillEmojiHeartEyesFill } from 'react-icons/bs';


export const Carousel= (props) => {
    const [cardData, setCarouselData] = useState([
        {
            title:"Lorem ipsum dolor sit amet.",
            description:"Nunc non gravida ex, at consectetur lacus.Nunc non.",
            color:"bg-indigo-300",
            icon: <img src='/emoji-1.png' alt="emoji" className="w-[50px] h-[50px]"/>
        },
        {
            title:"Lorem ipsum dolor sit amet",
            description:"Nunc non gravida ex, at consectetur lacus.Nunc non.",
            color:"bg-lime-200",
            icon: <img src='/emoji-1.png' alt="emoji" className="w-[50px] h-[50px]"/>
        },
        {
            title:"Lorem ipsum dolor sit amet",
            description:"Nunc non gravida ex, at consectetur lacus.Nunc non.",
            color:"bg-orange-100",
            icon: <img src='/emoji-1.png' alt="emoji" className="w-[50px] h-[50px]"/>
        },
        {
            title:"Lorem ipsum dolor sit amet",
            description:"Nunc non gravida ex, at consectetur lacus.Nunc non.",
            color:"bg-teal-200",
            icon: <img src='/emoji-1.png' alt="emoji" className="w-[50px] h-[50px]"/>
        },
        {
            title:"Lorem ipsum dolor sit amet",
            description:"Nunc non gravida ex, at consectetur lacus.Nunc non.",
            color:"bg-yellow-200",
            icon: <img src='/emoji-1.png' alt="emoji" className="w-[50px] h-[50px]"/>
        }
    ])

    const cardVariants = {
        hidden: { opacity: 1, x: 0 },
        visible: { opacity: 1, x: -300 },
        exit: { opacity: 1, x: -500 }
    };

    return(
      <div className="container p-6 w-[1500px] overflow-x-hidden">
        <motion.h2 
            className="text-3xl font-bold ml-10"
            initial={{x:-300, opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{ duration: 0.5 }}
        >
            Does this sound familiar... 
        </motion.h2>
        <motion.div 
            className="flex gap-[20px] mt-[20px]"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            transition={{ duration: 0.5 }}
        >
            {cardData.map((elem)=>{
                return(
                        <div className={`${elem.color} flex-none rounded-lg p-10 w-[400px]`}>
                            <div className="mb-5 text-amber-300">{elem.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{elem.title}</h3>
                            <p className="text-slate-600 font-medium">{elem.description}</p>
                        </div>
                )
            })}
        </motion.div>
      </div>
     )
   }