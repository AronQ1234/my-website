'use client'
import Typewriter from 'typewriter-effect';

const TypewriterTitle = () => {
    return ( 
        <Typewriter
        options={{
          loop: true,
        }}
        onInit={(typewriter) => {
            typewriter.typeString("Hi, My name is Aron Qerimi!👍")
            .pauseFor(800)
            .deleteAll()
            typewriter.typeString("Learn More about me and my skills!🤹‍♀️")
            .pauseFor(800)
            .deleteAll()         
            typewriter.typeString("⬇⬇")
            .pauseFor(800)
            .deleteAll()    
            .start();
            }}
      />
    );
}
 
export default TypewriterTitle;