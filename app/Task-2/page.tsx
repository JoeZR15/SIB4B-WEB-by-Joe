export default function Task2Page() {
    return (
        <div className= "bg-white h-screen flex gap-5 justify-center items-center">

            <div className= "bg-cyan-100 h-72 w-115 flex flex-col justify-between p-11 rounded 4x1 text-blue-950 "> 
                <div className="flex gap-1">
                    <img src="palette.svg" />
                    <p>Design</p>
                </div>
                    <div>
                        <h1 className= "text-3x1 font-bold">Adobe Photoshop</h1>
                    <br />

                        <div className="flex justify-between">
                            <p className="text-lg">In 3 Days</p>

                            <div className="flex -space-x-3 items-center"> 
                                <img src="/ProfilePict1.jpeg" className="w-6 h-6 rounded-full border-2 border-white" />
                                <img src="/ProfilePict2.jpeg" className="w-6 h-6 rounded-full border-2 border-white" />
                                <img src="/ProfilePict3.jpeg" className="w-6 h-6 rounded-full border-2 border-white" />

                                <div className="rounded-full bg-white px-2 text-xs"> +3 </div>
                            </div>
                        </div>
                        
                    </div>
            </div>

          <div className= "bg-green-100 h-72 w-115 flex flex-col justify-between p-11 rounded 4x1 text-blue-950 "> 
            <div className="flex justify-between items-center">
                <div className="flex gap-4">
                    <img src="terminal2.svg" />
                    <p>AI</p>
                      <div> <img src="/star.svg" /> </div>
                </div>
            </div>
                    <div>
                        <h1 className= "text-3x1 font-bold">DALL-E 2, Midjourney, Stable Diffusion </h1>
                        <br />  

                        <div className="flex justify-between">
                            <p className="text-lg">In 5 Days</p>

                            <div className="flex -space-x-3 items-center"> 
                                <img src="/ProfilePict4.jpeg" className="w-6 h-6 rounded-full border-2 border-white" />
                                <img src="/ProfilePict5.jpeg" className="w-6 h-6 rounded-full border-2 border-white" />
                                <img src="/ProfilePict6.jpeg" className="w-6 h-6 rounded-full border-2 border-white" />

                                <div className="rounded-full bg-white px-2 text-xs"> +3 </div>
                            </div>
                        </div>
                        
                    </div>
           </div>

        </div>

        
    )
}