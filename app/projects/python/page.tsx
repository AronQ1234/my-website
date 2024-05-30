import Card from "@/components/Card";
import Link from "next/link";
const PytohnProjects = () => {
    return ( 
        <div className="flex flex-wrap justify-between">
            <Link href="https://bosspro2728.itch.io/space-race"><Card Text="Space-race" inProgress={false}/></Link>
            <Link href=""><Card Text="Space-rfight" inProgress={true} /></Link>
            <Link href=""><Card Text="TicTacToe Ai" inProgress={true}/></Link>
        </div>
    );
}
 
export default PytohnProjects;