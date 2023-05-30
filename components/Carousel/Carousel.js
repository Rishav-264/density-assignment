"use client"
import React, {useState} from "react"

export const Carousel= (props) => {
    const [cardData, setCarouselData] = useState([
        {
            title:"Lorem ipsum dolor sit amet.",
            description:"Nunc non gravida ex, at consectetur lacus.Nunc non.",
            color:"bg-indigo-300"
        },
        {
            title:"Lorem ipsum dolor sit amet",
            description:"Nunc non gravida ex, at consectetur lacus.Nunc non.",
            color:"bg-indigo-600"
        },
        {
            title:"Lorem ipsum dolor sit amet",
            description:"Nunc non gravida ex, at consectetur lacus.Nunc non.",
            color:"bg-blue-300"
        },
        {
            title:"Lorem ipsum dolor sit amet",
            description:"Nunc non gravida ex, at consectetur lacus.Nunc non.",
            color:"bg-yellow-200"
        },
        {
            title:"Lorem ipsum dolor sit amet",
            description:"Nunc non gravida ex, at consectetur lacus.Nunc non.",
            color:"bg-lime-200"
        },
        {
            title:"Lorem ipsum dolor sit amet",
            description:"Nunc non gravida ex, at consectetur lacus.Nunc non.",
            color:"bg-yellow-100"
        }
    ])
    return(
      <div className="container p-6 w-[1500px] overflow-x-scroll">
        <h2 className="text-3xl font-bold ml-10">Does this sound familiar... </h2>
        <div className="flex gap-[30px]">
            {cardData.map((elem)=>{
                return(
                    <div className={`${elem.color} rounded-lg p-10 w-[600px]`}>
                        <h3>{elem.title}</h3>
                        <p>{elem.description}</p>
                    </div>
                )
            })}
        </div>
      </div>
     )
   }