import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const description = () => {
  return (
    <div className="flex flex-row gap-10 flex-wrap justify-center items-center absolute w-full h-full pt-10">
        <div className="flex flex-row flex-wrap justify-center gap-5 items-center w-4/5">
            {/* //TODO change image src */}
            <Image src="/nextjs.png" alt="Aron Qerimi" width={200} height={200} className="rounded-full"/>
            <h1 className="text-gray-50 inline ml-2">
            I am Aron Qerimi. I am 16 years old and live in Albania. I was born on 27th of October. I am
            motivated and have taught myself a lot of things like coding without needing a teacher. I feel
            especially motivated during different competitions. . I try to be honest and tell people what I
            think without hurting their feelings. I see myself as very creative. I like finding patterns and
            engaging in different creative activities. Chess requires a lot of creativity even though it does not
            look like it; so does coding. I think I am reliable because I am always there to help a family
            member or a friend, without expecting anything in return. , I am also outgoing. I try to make
            friends when I am in a new environment and I have made many friends from all over the world
            playing in chess tournaments.
            </h1>
            <Button><Link href="/projects">Look at my projects</Link></Button>
            <Button><Link href="/about/cv">Look at my CV</Link></Button>
            <Button><Link href="/about/certificates">Look at my certificates</Link></Button>
        </div>
    </div>
  )
}

export default description
// I am Aron Qerimi. 
//             It's been 2 years since I started learning web development.
//             At first I learned Html, Css, Js. 
//             Then I started learning React, and express js, as well as SQL. 
//             I recently learned how to use tailwind css. I have also started learning nextjs. 
//             I created this website with next js where I have different projects 
//             in web development but 
//             also with languages ​​like python, with which I created several games.
//             I am constantly learning, trying to improve and to become a better developer.