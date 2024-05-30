import Card from "@/components/Card";
import Link from "next/link";
const PytohnProjects = () => {
    return ( 
        <div className="flex flex-wrap justify-between absolute w-full">
            <Link href="https://bosspro2728.itch.io/space-race"><Card Text="Space Race" inProgress={false}/></Link>
            <Link href="https://bosspro2728.itch.io/space-fight"><Card Text="Space Fight" inProgress={false} /></Link>
            <Link href="https://bosspro2728.itch.io/tictactoe-ai"><Card Text="TicTacToe Ai" inProgress={false}/></Link>
        </div>
    );
}
 
export default PytohnProjects;