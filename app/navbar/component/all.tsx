import Buttonnav from "./button";


export default function All() {
  return (


      <div>
        

      <div className="flex flex-col gap-5 p-4">
          <div className="flex flex-col gap-2">
            <Buttonnav imgSrc="layout-dashboard.svg" title="Dashboard" />
            <Buttonnav imgSrc="message-circle.svg" title="Messages" />
            <Buttonnav imgSrc="checks.svg" title="Tasks" />
            <Buttonnav imgSrc="pencil.svg" title="Notes" />
            <Buttonnav imgSrc="mail.svg" title="Emails" />
            <Buttonnav imgSrc="stack-back.svg" title="Reports" />
            <Buttonnav imgSrc="arrow-fork.svg" title="Automations" />
            <Buttonnav imgSrc="usb.svg" title="Workflows" />
          </div>


      <div className="flex gap-2">
         <Buttonnav imgSrc="chevron-down.svg" title="Favorites" />
      </div>

          <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <Buttonnav imgSrc="key.svg" title="Key Account" />
            <Buttonnav imgSrc="antenna-bars-5.svg" title="Strategic Initiatives" />
            <Buttonnav imgSrc="timeline.svg" title="Focus Area" />
            <Buttonnav imgSrc="flame.svg" title="Starred Items" />
          </div>
          

        
</div>
          </div>
        </div>
        
    
  );
}
