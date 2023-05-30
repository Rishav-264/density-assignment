"use client"
import {motion} from 'framer-motion'

export const BannerThree= (props) => {
    return(
      <div className="p-6 bg-sky-100 m-6 rounded-lg">
        <p className='text-center text-lg font-semibold mt-[5rem]'>Let your friends, family and co-workers (anonymously) rate your social skills</p>
        <h1 className='text-center text-5xl font-bold mb-[3rem]'>Ever wondered what others think of you?</h1>
        <div className="flex justify-center gap-[20px] w-[100%] m-auto relative 1536:after:w-[58%] mac:after:w-[62%] after:border-t-4 after:absolute after:border-dashed after:top-[23px] 1536:after:left-[300px] mac:after:left-[250px] after:border-orange-400">
            <div>
                <div className='flex basis-1/3 justify-center flex-col  flex-none w-[400px]'>
                <motion.div 
                    className="circle-xs m-auto bg-orange-400 text-white flex justify-center items-center relative z-[1]"
                    initial={{scale: 0.8, opacity: 0}}
                    whileInView={{scale: 1, opacity: 1}}
                    transition={{
                        duration: 0.1,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001
                        }
                    }}
                >1</motion.div>
                <motion.div
                    className="text-center"
                    initial={{scale: 0.2, opacity: 0}}
                    whileInView={{scale: 1, opacity: 1}}
                    transition={{
                        duration: 0.3,
                }}
                >
                    <h1 className="font-medium text-slate-600">Answer Questions on your social skills</h1>
                </motion.div>  
                </div>              
            </div>
            <div>
                <div className='flex basis-1/3 justify-center flex-col flex-none w-[400px]'>
                <motion.div 
                    className="circle-xs m-auto bg-orange-400 text-white flex justify-center items-center relative z-[1]"
                    initial={{scale: 0.8, opacity: 0}}
                    whileInView={{scale: 1, opacity: 1}}
                    transition={{
                        duration: 0.1,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001
                        }
                    }}
                >2</motion.div>
                <motion.div
                    className="text-center"
                    initial={{scale: 0.2, opacity: 0}}
                    whileInView={{scale: 1, opacity: 1}}
                    transition={{
                        duration: 0.3,
                }}
                >
                    <h1 className="font-medium text-slate-600">Let others anonymously answer the same qiestions about you</h1>
                </motion.div>  
                </div>              
            </div>
            <div>
                <div className='flex basis-1/3 justify-center flex-col  flex-none w-[400px]'>
                <motion.div 
                    className="circle-xs m-auto bg-orange-400 text-white flex justify-center items-center relative z-[1]"
                    initial={{scale: 0.8, opacity: 0}}
                    whileInView={{scale: 1, opacity: 1}}
                    transition={{
                        duration: 0.1,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001
                        }
                    }}
                >3</motion.div>
                <motion.div
                    className="text-center"
                    initial={{scale: 0.2, opacity: 0}}
                    whileInView={{scale: 1, opacity: 1}}
                    transition={{
                        duration: 0.3,
                }}
                >
                    <h1 className="font-medium text-slate-600">Find out where you and others see things the same way - and where not!</h1>
                </motion.div>  
                </div>              
            </div>
        </div>
      </div>
     )
   }