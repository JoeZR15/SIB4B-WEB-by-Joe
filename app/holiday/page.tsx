export default function Latihansendiri() {
  return (
    <div className="bg-gray-200 h-screen flex justify-center item-center">
        <div className="bg-white h-120 w-70 rounded-4xl"> 
            <div className="p-2 flex item-center"> 
                <img src="/sfbridge.png" className=" h-68 w-68 rounded-4xl" />
            </div>

            <div className="flex flex-col gap-1">

                <div className="p-2">
                <h1 className="font-bold text-xl text-black">San Fransisco </h1>
                <p className="text-xs text-gray-300">Premium Economy</p> 
            </div>

            <div className="flex p-4 gap-7"> 
                <div className="flex gap-2"> 
                    <img src="/tag.svg" className="h-4 w-4"/>
                    <p className="text-black text-xs">From $240</p>
                </div>

                <div className="flex gap-2"> 
                    <img src="/plane-tilt.svg" className="h-4 w-4"/>
                    <p className="text-black text-xs">SFO</p>
                </div>
            </div>
            <div className="flex justify-item justify-center w-50 h-10 bg-black rounded-full"> 
                <button className="text-white"> Search Flight</button>
            </div>
                

            </div>
        </div>
    </div>






  )}