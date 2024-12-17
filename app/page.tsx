import TypewriterTitle from "@/components/TypewriterTitle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2 className='absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-3xl text-center text-rose-700'>
        <TypewriterTitle/>
      </h2>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Button variant={"redcolor"}><Link href="/about">Learn more</Link></Button>
      </div>
    </div>
  );
}
