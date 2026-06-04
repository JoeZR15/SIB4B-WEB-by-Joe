export default function Buttonnav({imgSrc, title} : {imgSrc : string; title : string;}) {
  return (

     <button className="flex gap-2">
                <img src={imgSrc} className="h-5 w-5" />
              <p className="font-xs text-black text-xs">{title}</p>
        </button>
  )
}