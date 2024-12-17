import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Card from "@/components/Card";

const About = () => {
    return ( 
        <div className="flex flex-row gap-10 flex-wrap justify-center items-center absolute w-full h-full pt-10">
            <Link href="about/cv"><Card Text="CV" inProgress={false}/></Link>
            <Link href="about/description"><Card Text="Description" inProgress={false}/></Link>
            <Link href="about/certificates"><Card Text="Certificates" inProgress={false}/></Link>
        </div>
        
    );
}
 
export default About;