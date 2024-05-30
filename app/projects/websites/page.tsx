import Link from "next/link";
import Card from "@/components/Card";
const Websites = () => {
    return ( 
        <div className="flex flex-wrap justify-between">
            <Link href="websites/robofriends"><Card Text="Robofriends" inProgress={false}/></Link>
            <Link href="websites/smart-brain"><Card Text="Smart Brain" inProgress={false}/></Link>
            <Link href="websites/code"><Card Text="Code" inProgress={true}/></Link>
            <Link href="websites/learning-app"><Card Text="Learning Website" inProgress={true}/></Link>
        </div>
    );
}
 
export default Websites;