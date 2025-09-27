
import {Breadcrumb, BreadcrumbItem,BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator} from "@/components/ui/breadcrumb"
import { Slash } from "lucide-react"
export default function Header(){
    console.log('im exported')
    return(
        <header className="fixed top-0 w-full ">
            <div className="mx-auto w-[45rem] p-5 border-gray-200 border-b-1">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink className="text-lg font-semibold">Robert Tulagan</BreadcrumbLink>
                    </BreadcrumbItem>
                <BreadcrumbSeparator/>
                
                </BreadcrumbList>   
            </Breadcrumb>
            </div>
        </header>
    )
}