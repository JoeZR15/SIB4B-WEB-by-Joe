export default function LearnPage() {
    return (
        <div className= "bg-white h-screen flex gap-5 justify-center items-center">
        <div className="bg-purple-300 h-72 w-96 flex flex-col justify-between p-10 rounded-4xl text-blue-950" > 
            <div className="flex gap-4"> 
                <img src="palette.svg" />
                <p>Design</p>
            </div>
            <div >
                <h1 className="text-4xl font-bold">Figma</h1>
                <p> 7 Hours Ago</p>
            </div>
        </div>

            <div className="bg-orange-300 h-72 w-96 flex flex-col justify-between p-10 rounded-4xl text-blue-950" > 
            <div className="flex gap-4"> 
                <img src="palette.svg" />
                <p>Coding</p>
            </div>
            <div >
                <h1 className="text-4xl font-bold">Phyton</h1>
                <p> 9 Hours Ago</p>
            </div>
        </div>

          <div className="bg-pink-300 h-72 w-96 flex flex-col justify-between p-10 rounded-4xl text-blue-950" > 
            <div className="flex gap-4"> 
                <img src="palette.svg" />
                <p>Design</p>
            </div>
            <div >
                <h1 className="text-4xl font-bold">Sketch</h1>
                <p> 7 Days Ago</p>
            </div>
        </div>        
        </div>

        
    )
}