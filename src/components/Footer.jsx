
import { Square, PanelsTopLeft, BriefcaseBusiness, PencilLine, Link } from 'lucide-react';

export default function Footer({setPage}){
    let iconSize = 28
    let strokeWidth = 1.8
    const baseClasses = 'hover:stroke-[#048688] hover:-translate-y-1 transition-transform duration-175 ease-in'

    const setPageHelper = () =>setPage('Default Page')

    let icons = [
        {icon: Square, key:'Square'},
        {icon: PanelsTopLeft, key:'PanelsTopLeft'},
        {icon: BriefcaseBusiness, key:'BriefcaseBusiness'},
        {icon: PencilLine, key:'PencilLine'},
        {icon: Link, key:'Link'},
    ]   

    let iconsArr = icons.map(element =>{
        const Icon = element.icon
        return <Icon key={element.key} onClick={setPageHelper} strokeWidth={strokeWidth} size={iconSize} className={baseClasses}/>
    })  

    return(
    
    <footer  className=" flex justify-center items-center gap-8  fixed bottom-0 w-[100%] p-5 border-t-[0.15rem] ">
        {iconsArr}
    </footer>
    )
}
