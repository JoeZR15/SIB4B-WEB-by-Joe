export default function Latihansendiri() {
  return (
    <div className="bg-gray-300 h-screen flex justify-center items-center">

      <div className="bg-white w-80 p-5 rounded-2xl flex flex-col gap-4 text-blue-950">

        
        <div className="flex justify-between items-center">
          <p className="font-semibold text-sm">Client details</p>
          <div className="cursor-pointer text-gray-400">X</div>
        </div>

        
        <div className="flex gap-3 items-center">
          <img
            src="/ProfilePict1.jpeg"
            className="w-12 h-12 rounded-full object-cover"
          />

          <div className="flex flex-col gap-1">
            <p className="font-semibold text-sm">
              Cornelius Greenfelder
            </p>

            <div className="bg-green-100 text-green-600 px-2 rounded-full flex items-center gap-1 w-fit">
              <img src="/palette.svg" className="h-4" />
              <p className="text-xs font-semibold">Verified</p>
            </div>
          </div>
        </div>

       
       <div className="bg-gray-100 rounded-xl p-3 flex flex-col gap-2">
  <h1 className="font-semibold text-sm">Projects</h1>

  <div className="flex justify-between">

    
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-1">
        <img src="/palette.svg" className="w-3.5" />
        <p className="text-xs text-gray-400">Ongoing</p>
      </div>

      <p className="font-semibold text-sm">2 ($3.8k)</p>
    </div>

    
    <div className="flex flex-col gap-1 items-end">
      <div className="flex items-center gap-1">
        <img src="/palette.svg" className="w-3.5" />
        <p className="text-xs text-gray-400">Completed</p>
      </div>

      <p className="font-semibold text-sm">25 ($54k)</p>
    </div>

  </div>
</div>

        
        <div className="flex justify-between items-center">
          <p className="text-xs font-bold">Location</p>
          <p className="text-sm text-gray-400">
            United States, New York
          </p>
        </div>

        
        <div className="flex justify-between items-center">
          <p className="text-xs font-bold">With Us</p>
          <p className="text-sm text-gray-400">6 Jan 2024</p>
        </div>

        
       <div className="flex items-center gap-2 mt-2">

  <div className="w-10 h-10 rounded-full bg-gray-100 flex justify-center items-center">
    :
  </div>

  <div className="flex-1 h-10 rounded-full text-white font-semibold 
    bg-linear-to-r from-blue-500 to-purple-500 
    flex justify-center items-center gap-2">

    <img src="/palette.svg" className="w-4 h-4" />
    <p>Message</p>

  </div>

</div>

      </div>
    </div>
  )
}