
import { Square, PanelsTopLeft, BriefcaseBusiness, PencilLine, Link } from 'lucide-react';

export default function Footer({setPage}){
    let iconSize = 28
    let strokeWidth = 1.8

    return(
    <footer  className=" flex justify-center items-center gap-8  fixed bottom-0 w-[100%] p-5 border-t-[0.15rem] ">
       <Square onClick={()=>setPage('Default Page')} strokeWidth={1.8} size={iconSize} className='hover:stroke-[#048688] hover:-translate-y-1 transition-transform duration-175 ease-in'/>

       <PanelsTopLeft onClick={()=>setPage('Projects')} strokeWidth={strokeWidth} size={iconSize} className='hover:stroke-[#048688] hover:-translate-y-1 transition-transform duration-175 ease-in'/>

       <BriefcaseBusiness onClick={()=>setPage('Experience')} strokeWidth={strokeWidth} size={iconSize} className='hover:stroke-[#048688] hover:-translate-y-1 transition-transform duration-175 ease-in'/>

       <PencilLine onClick={()=>setPage('Blogs')} strokeWidth={strokeWidth} size={iconSize} className='hover:stroke-[#048688] hover:-translate-y-1 transition-transform duration-175 ease-in'/>

       <Link onClick={()=>setPage('Social Media')} strokeWidth={strokeWidth} size={iconSize} className='hover:stroke-[#048688] hover:-translate-y-1 transition-transform duration-175 ease-in'/> 
    </footer>
    )
}
