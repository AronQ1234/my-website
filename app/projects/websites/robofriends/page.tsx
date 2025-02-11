import { Button } from "@/components/ui/button";
import Link from "next/link";

const Robofriends = () => {
    return ( 
        <>
            <div className= "flex flex-col justify-center items-center absolute h-full w-full pt-10">
                <img  className="float-left" src="/robofriends.1f4569a1.jpg" alt="sunset" width={"50%"} height={"90%"}/>
                <h1 className="text-gray-50 inline ml-2">This project is a webside created with react and uses two apis to get the email, name and other credentials of the robots. 
                I used robohash api to generate the images: "https://robohash.org/id?200x200", each id generates a different robot image. 
                We also used "https://jsonplaceholder.typicode.com/users" api to get the credentials of each robot.</h1> 
                <br /> 
                <br />
                <br />
                <div className=" text-center">
                    <Link href="https://github.com/Bosspro2728/Robofriends"><h1 className=" text-green-600">Source code</h1></Link>
                    <Link href="https://bosspro2728.github.io/Robofriends/"><h1 className=" text-green-600">See live</h1></Link>
                </div>
                <h1 className=" text-teal-300 font-bold block">Technologies used:</h1><br />
                <div className=" flex flex-wrap justify-center">
                    <img className=" w-12 h-12" src="/react.png" alt=""/>
                    <img className=" w-12 h-12" src="/api.png" alt=""/>
                </div>
            </div>
        </>
    );
}
 
export default Robofriends;