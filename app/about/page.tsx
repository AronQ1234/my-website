import { Button } from "@/components/ui/button";
import Link from "next/link";

const About = () => {
    return ( 
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <img  className="float-left" src="sunset.jpg" alt="sunset" width={"50%"} height={"90%"}/>
            <h1 className="text-gray-50 inline ml-2">I am Aron Qerimi. 
            It's been 2 years since I started learning web development.
            At first I learned Html, Css, Js. 
            Then I started learning React, and express js, as well as SQL. 
            I recently learned how to use tailwind css. I have also started learning nextjs. 
            I created this website with next js where I have different projects 
            in web development but 
            also with languages ​​like python, with which I created several games.
            I am constantly learning, trying to improve and to become a better developer.
            </h1>
            <Button><Link href="projects">Look at my projects</Link></Button>
        </div>
        
    );
}
 
export default About;