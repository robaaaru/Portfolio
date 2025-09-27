
import { Square, PanelsTopLeft, BriefcaseBusiness, PencilLine, Link } from 'lucide-react';

export default function Footer(){
    let iconSize = 24

    return(
    <footer className=" flex justify-center items-center gap-8  fixed bottom-0 bg-[#f2ebbf] w-[100%] p-5 border-t-[0.17rem] ">
       <Square color="#048688" size={iconSize}/>
       <PanelsTopLeft  size={iconSize}/>
       <BriefcaseBusiness size={iconSize}/>
       <PencilLine size={iconSize}/>
       <Link size={iconSize}/> 
    </footer>
    )
}
