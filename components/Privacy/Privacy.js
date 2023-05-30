"use client"

import {motion} from 'framer-motion'

export const Privacy= (props) => {
    return(
      <div className="p-6 mt-[5rem]">
         <p className="text-lg text-center font-semibold mb-[2rem]">We take privacy seriously</p>
         <h1 className="text-5xl text-center font-bold">Before you get Started</h1>
         <h3 className="text-center mt-[2rem] text-slate-600 font-medium">"We wont share your answers with anyone (and won't ever tell <br/> you which friends said what about you)"</h3>
         <p className="text-center mt-[2rem] mb-[2rem]">with Love, <span className="font-mono font-bold italic">Team ahead</span></p>
         <div className="text-center mb-[0.3rem] w-full flex justify-center">
            <motion.div 
                initial={{scale: 0.5, opacity: 0}}
                whileInView={{scale: 1, opacity: 1}}
                transition={{
                    duration: 0.5,
                  }}
                className="button text-xs font-medium"
            >
                Start a Test
            </motion.div>
        </div>
         <p className="text-center text-[10px] font-medium mb-[3rem]">Take only 5 minutes</p>
         <hr />
      </div>
     )
   }