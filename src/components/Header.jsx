
import {Breadcrumb, BreadcrumbItem,BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator} from "@/components/ui/breadcrumb"
export default function Header(){

    return(
        <header className="fixed top-0 w-full">
            <div className="mx-auto w-[45rem] p-5 h-17 border-gray-200 border-b-1 backdrop-blur-2xl overflow-hidden">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink className="text-sm p-1 lg:p-0 lg:text-lg font-semibold">Robert Tulagan</BreadcrumbLink>
                    </BreadcrumbItem>
                <BreadcrumbSeparator/>
                
                </BreadcrumbList>   
            </Breadcrumb>
            </div>
        </header>
    )
}