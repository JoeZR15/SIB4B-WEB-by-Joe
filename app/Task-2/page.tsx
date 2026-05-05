export default function Task2Page() {
    return (
        <div className= "bg-white h-235 w-335 flex gap-5 justify-center items-center flex-col">

            <div className="flex gap-5 justify-center">

            <div className= "bg-cyan-100 h-77 w-113 flex flex-col justify-between p-9 rounded-3xl text-blue-950 "> 
                <div className="flex gap-1">
                    <img src="palette.svg" />
                    <p>Design</p>
                </div>
                    <div>
                        <h1 className= "text-3xl font-bold">Adobe Photoshop</h1>
                    <br />

                        <div className="flex justify-between">
                            <p className="text-lg">In 3 Days</p>

                            <div className="flex -space-x-3 items-center"> 
                                <img src="/ProfilePict1.jpeg" className="w-6 h-6 rounded-full border-2 border-white" />
                                <img src="/ProfilePict2.jpeg" className="w-6 h-6 rounded-full border-2 border-white" />
                                <img src="/ProfilePict3.jpeg" className="w-6 h-6 rounded-full border-2 border-white" />

                                <div className="rounded-full bg-white w-6 h-6 p-1 text-xs"> +3  </div>
                            </div>
                        </div>
                        
                    </div>
            </div>

          <div className= "bg-green-100 h-77 w-113 flex flex-col justify-between p-9 rounded-3xl text-blue-950 "> 
            <div className="flex justify-between items-center">
                <div className="flex gap-4">
                    <img src="terminal2.svg" />
                    <p>AI</p>
                </div>
                <div> <img className="h-5 w-5" src="/star.svg" /> </div>
            </div>
                    <div>
                        <h1 className= "text-3xl font-bold">DALL-E 2, Midjourney, Stable Diffusion </h1>
                        <br />  

                        <div className="flex justify-between">
                            <p className="text-lg">In 5 Days</p>

                            <div className="flex -space-x-3 items-center"> 
                                <img src="/ProfilePict4.jpeg" className="w-6 h-6 rounded-full border-2 border-white" />
                                <img src="/ProfilePict5.jpeg" className="w-6 h-6 rounded-full border-2 border-white" />
                                <img src="/ProfilePict6.jpeg" className="w-6 h-6 rounded-full border-2 border-white" />

                                <div className="rounded-full bg-white p-1 w-6 h-6 text-xs"> +3 </div>
                            </div>
                        </div>
                        
                    </div>
           </div>
</div>


<div className="flex gap-5 justify-cennter"> 
    <div className="bg-purple-200 h-67 w-73 flex flex-col justify-between p-10 rounded-4xl text-blue-950" > 
                <div className="flex gap-4"> 
                    <img className="h-5 w-5" src="palette.svg" />
                    <p className="1xl font-bold">Design</p>
                </div>
            <div >
                <h1 className="text-4xl font-bold">Figma</h1>
                <p> 7 Hours Ago</p>
            </div>
        </div>

            <div className="bg-orange-200 h-67 w-73 flex flex-col justify-between p-10 rounded-4xl text-blue-950" > 
            <div className="flex gap-4"> 
                <img className="h-5 w-5" src="code.svg" />
                <p className="1xl font-bold">Codding</p>
            </div>
            <div >
                <h1 className="text-4xl font-bold">Phyton</h1>
                <p> 9 Hours Ago</p>
            </div>
        </div>

          <div className="bg-pink-200 h-67 w-73 flex flex-col justify-between p-10 rounded-4xl text-blue-950" > 
            <div className="flex gap-4"> 
                <img className="h-5 w-5" src="palette.svg" />
                <p className="1xl font-bold">Design</p>
            </div>
            <div >
                <h1 className="text-4xl font-bold">Sketch</h1>
                <p> 7 Days Ago</p>
            </div>
        </div>        
</div>
        </div>

        
    )
}