export const TopNav= (props) => {
  return(
    <div className="container flex py-6">
        <div className="basis-1/4 justify-center flex py-2 font-mono font-semibold tracking-wide text-violet-600">ahead</div>
        <div className="basis-1/2 justify-center flex">
            <ul className="flex gap-10 ">
                <li className="py-2 font-mono">Emotions</li>
                <li className="py-2 font-mono">Manifesto</li>
                <li className="py-2 font-mono">Self-awareness test</li>
                <li className="py-2 font-mono">Work With Us</li>
            </ul>
        </div>
        <div className="basis-1/4 justify-center flex">
            <div className="bg-slate-950 w-1/2 text-white justify-center flex rounded-full py-2">
                Download App
            </div>
        </div>
    </div>
   )
 }