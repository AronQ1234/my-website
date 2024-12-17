import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Card from "@/components/Card";

const certificates = () => {
    return ( 
        <div className="flex flex-row gap-10 flex-wrap justify-center items-center absolute w-full h-full pt-10">
            <Link href="certificates/Kangaroo_linguistics_2023.jpeg"><Card Text="Kangaroo2023" inProgress={false}/></Link>
            <Link href="certificates/Kangaroo_linguistics_2024.jpg"><Card Text="Kangaroo2024" inProgress={false}/></Link>
            <Link href="certificates/Kangaroo_science_2021.jpeg"><Card Text="Kangaroo2021" inProgress={false}/></Link>
            <Link href="certificates/chess_youth_national_U16.jpg"><Card Text="chess_national_U16" inProgress={false}/></Link>
            <Link href="certificates/9th_Hippo_olympiad.jpeg"><Card Text="Hippo" inProgress={false}/></Link>
            <Link href="certificates/Chess_ORSA_cup.jpeg"><Card Text="Chess_ORSA" inProgress={false}/></Link>
            <Link href="certificates/IT_olympiad.jpg"><Card Text="IT" inProgress={false}/></Link>
            <Link href="certificates/Hippo.pdf"><Card Text="Hippo" inProgress={false}/></Link>
            <Link href="certificates/Durres_rapid_chess_championship.jpeg"><Card Text="Durres_rapid_chess" inProgress={false}/></Link>
            <Link href="certificates/Durres_school_chess_championship_2023.jpeg"><Card Text="school_chess2023" inProgress={false}/></Link>
            <Link href="certificates/Durres_school_chess_championship_2019.jpeg"><Card Text="school_chess2019" inProgress={false}/></Link>
            <Link href="certificates/Kangaroo_linguisctics_2022.jpeg"><Card Text="Kangaroo2022" inProgress={false}/></Link>
            <Link href="certificates/Montenegro_European_school_chess_individual_cup_2022.jpeg"><Card Text="chess_individual2022" inProgress={false}/></Link>
            <Link href="certificates/World_schools_chess_championship_2018.jpeg"><Card Text="World_chess2018" inProgress={false}/></Link>
            <Link href="certificates/Shero_coding_internship.jpg"><Card Text="Shero_internship" inProgress={false}/></Link>
            <Link href="certificates/SKILLS4U.jpeg"><Card Text="SKILLS4U.jpeg" inProgress={false}/></Link>
            <Link href="certificates/Regional_youth_chess_festival.jpeg"><Card Text="Regional_chess" inProgress={false}/></Link>
            <Link href="certificates/New_chess_generation_2019.jpeg"><Card Text="chess_2019" inProgress={false}/></Link>
            <Link href="certificates/Durres_school_chess_championship_2024.jpeg"><Card Text="school_chess2024" inProgress={false}/></Link>
        </div> 
    );
}
 
export default certificates;