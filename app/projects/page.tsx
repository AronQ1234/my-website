import Card from "@/components/Card";
import Link from "next/link";

const Projects = () => {
    return ( 
        <>
            <div className="flex flex-wrap justify-center items-center absolute w-full h-full pt-10">
                <Link href="projects/python"><Card Text="Python projects"/></Link>
                <Link href="projects/websites"><Card Text="Websites"/></Link>
            </div>            
        </>
    );
}
 
export default Projects;