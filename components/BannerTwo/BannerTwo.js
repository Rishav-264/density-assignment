"use client"

import animationData from '../../assets/meetAnimation.json'
import Lottie from 'lottie-react';
import {motion} from 'framer-motion';

export const BannerTwo= (props) => {
    return(
      <div className="p-6 pb-10 m-5 bg-orange-100 rounded-lg">
         <p className="mb-2 text-base font-semibold">Built out of frustration</p>
         <h1 className="text-4xl font-bold mb-10">Meet the ahead app</h1>
         <div className="flex gap-[30px]">
            <div className="basis-1/4 relative">
                <motion.div 
                    className="circle-small bg-orange-200 absolute left-[18rem]"
                    initial={{scale: 0.5, opacity: 0}}
                    whileInView={{scale: 1, opacity: 1}}
                    transition={{
                    duration: 0.9,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                      type: "spring",
                      damping: 5,
                      stiffness: 100,
                      restDelta: 0.001
                    }
                  }}
                ></motion.div>
                <motion.div 
                    className="circle-medium bg-orange-200 absolute top-[3rem] left-[10rem]"
                    initial={{scale: 0.5, opacity: 0}}
                    whileInView={{scale: 1, opacity: 1}}
                    transition={{
                    duration: 0.6,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                      type: "spring",
                      damping: 5,
                      stiffness: 100,
                      restDelta: 0.001
                    }
                  }}
                ></motion.div>
                <motion.div 
                    className="circle-big bg-orange-200 absolute top-[14rem] left-[5rem]"
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
                <Lottie 
                    animationData={animationData} 
                    style={{
                        height:"400px",
                        width:"400px",
                        margin:"auto"
                    }}
                />
            </div>
            <div className="basis-auto">
                <p className="text-lg text-slate-600 font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non metus lorem. Curabitur ligula turpis, lacinia ac dapibus quis, fringilla eget est. Vestibulum aliquam ante at turpis laoreet, eget posuere tortor lobortis. Nullam ac feugiat eros. Duis ac velit eget mauris interdum molestie. Fusce auctor lorem at mi malesuada condimentum. Fusce maximus fermentum facilisis. Integer nec felis in ipsum sodales efficitur. Sed egestas lacinia nisi varius commodo. Fusce et erat vitae sapien venenatis dictum. Nam viverra semper ultricies. Integer aliquam mi condimentum sapien vulputate laoreet. Suspendisse sed nibh ac urna lacinia lacinia at fringilla dolor. Phasellus interdum leo metus, sed laoreet nunc porttitor sodales. Duis accumsan non nunc a gravida. Donec efficitur arcu ut eros malesuada, vitae posuere ipsum tempus. Maecenas sit amet metus et diam placerat maximus eget id metus. Cras imperdiet fringilla pharetra. Morbi ut ultrices erat. Duis at aliquet tortor, ut lobortis mauris. Cras elit lacus, porttitor vitae molestie ac, fringilla at ex. Ut dapibus lorem eu consectetur placerat.</p>
                <p className="text-lg text-slate-600 font-semibold">Curabitur tempus diam vel ultrices dignissim. Praesent lacus est, venenatis sit amet turpis at, porta venenatis nibh. Aenean id est quis quam laoreet dignissim ac at eros. Donec tincidunt dapibus ex, ornare pharetra diam mattis vel. Quisque vel auctor tortor. In in orci faucibus, aliquet velit eget, maximus sapien. Maecenas in lectus massa. Nam vel erat fermentum, laoreet eros non, tristique ligula.</p>
            </div>
         </div>
      </div>
     )
   }