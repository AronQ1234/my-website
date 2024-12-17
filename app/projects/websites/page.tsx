import Link from "next/link";
import Card from "@/components/Card";
const Websites = () => {
    //TODO : Fix UI and design of the websites show page
    //TODO : Add more websites
    return ( 
        <div className="flex flex-row gap-10 flex-wrap justify-center items-center absolute w-full h-full pt-10">
            <Link href="websites/robofriends"><Card Text="Robofriends" inProgress={false}/></Link>
            <Link href="websites/smart-brain"><Card Text="Smart Brain" inProgress={false}/></Link>
            <Link href="websites/code"><Card Text="Code-meet" inProgress={false}/></Link>
            <Link href="websites/learning-app"><Card Text="Learning Website" inProgress={true}/></Link>
        </div>
    );
}
 
export default Websites;