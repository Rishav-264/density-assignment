"use client"

import {useRef} from 'react';

import {motion} from 'framer-motion'
import { BsApple } from 'react-icons/bs';
import { AiTwotoneStar } from 'react-icons/ai';

import animationData from '../../assets/phoneAnimation.json';
import Lottie from 'lottie-react';

export const Banner= (props) => {

    const animationRef = useRef(); 

    return(
      <div className="bg-violet-100 justify-left items-center flex pl-20 py-10 h-80vh rounded-lg m-4 mt-0">
        <div className="basis-1/2">
            <motion.div 
                className='semi-circle-top rotate-180 bg-red-300 relative 1536:bottom-[-3px] mac:bottom-[-38px] 1536:left-[800px] mac:left-[700px]'
                initial={{scale: 0.5, opacity: 0}}
                whileInView={{scale: 1, opacity: 1}}
                transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                      type: "spring",
                      damping: 5,
                      stiffness: 100,
                      restDelta: 0.001
                    }
                  }}
            ></motion.div>
            <motion.h4 
                className="font-medium pl-1"
                initial={{x:-50,opacity:0}}
                whileInView={{x:0,opacity:1}}
                viewport={{ once: true }}
            >
                Ahead app
            </motion.h4>
            <motion.h1 
                className="text-8xl font-medium"
                initial={{x:-50,opacity:0}}
                whileInView={{x:0,opacity:1}}
                viewport={{ once: true }}
            >
                Master your life by mastering emotions
            </motion.h1>
            <div className="flex mt-4 gap-2 bg-black text-white w-fit py-1 px-3 ml-1 rounded-lg">
                <BsApple className='text-4xl pt-1' />
                <span className='text-xs leading-1'>
                    Download on the <br />
                    <span className='text-lg font-medium'>App Store</span>
                </span>
            </div>
            <motion.div 
                className='semi-circle-bottom rotate-180 bg-red-400 relative 1536:bottom-[3px] mac:bottom-[38px] left-[450px]'
                initial={{scale: 0.5, opacity: 0}}
                whileInView={{scale: 1, opacity: 1}}
                transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                      type: "spring",
                      damping: 5,
                      stiffness: 100,
                      restDelta: 0.001
                    }
                  }}
            ></motion.div>
        </div>
        <div className="basis-1/2 flex justify-end">
            <Lottie 
                animationData={animationData} 
                lottieRef={animationRef}
                loop={true} 
                initialSegment={[20, 110]}
                style={{
                    height: "500px",
                    width: "500px"
                }}
            />
        </div>
      </div>
     )
   }