'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { useParams } from "next/navigation";

const Certificate = () => {
    const param = useParams().name;
    //@ts-ignore
    const name = param.split(".")[0];
    //@ts-ignore
    const type = param.split(".")[1];

  return (
    <div className="flex flex-row gap-10 flex-wrap justify-center items-center absolute w-full h-full pt-12">
      { type == "pdf" ? 
        <embed src={`/pdfs/${param}`} type={`application/${type}`} width={"80%"} height={"90%"}/> 
        : 
        <img src={`/pdfs/${param}`} alt={`${name}`} className={`w-[70%] h-[${name == "9th_Hippo_olympiad" || name == "Shero_coding_internship" || name == "SKILLS4U.jpeg" ? "100%" : "80%"}]`}/>
      }
    </div>
  )
}

export default Certificate