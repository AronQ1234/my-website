import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Cv = () => {
  return (
    <div className="flex flex-row gap-10 flex-wrap justify-center items-center absolute w-full h-full pt-10">
       <embed src="/pdfs/Aron_cv.pdf" type="application/pdf" width={"80%"} height={"90%"}/>
    </div>
  )
}

export default Cv