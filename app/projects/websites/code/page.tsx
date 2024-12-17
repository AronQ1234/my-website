import Link from "next/link";
const CodeMeet = () => {
    return ( 
        <div className="flex flex-col justify-center items-center absolute h-full w-full pt-10">
            <img  className="float-left" src="/code-meet.png" alt="code-meet" width={"50%"} height={"90%"}/>              
            <h1 className="text-center text-gray-50 inline ml-2">
                This website uses html, css, vanila js, express-js, socket.io and compilex witch is used for code compilation.
                We use uuid to generate a random room id and than using a peer server we check when a user connnects and disconnects. 
                In lockal development(my computer), it works but because I need to run two servers and compilex dosen't work well when it is used for deployment, i cna no deploy the sight. 
                So I am looking for a new way to host the two severs nd find another compiling option witch I think I have: judg0, is a api that is used for code compilation but I could not get it to fully work.     
            </h1> 
            <br /> 
            <br />
            <br />
            <div className="text-center">
                <Link href="https://github.com/AronQ1234/Code-Meet"><h1 className=" text-green-600">Source code</h1></Link>
                <Link href="https://code-meet-smoky.vercel.app"><h1 className=" text-green-600">See live</h1></Link>
            </div>
            <h1 className=" text-teal-300 font-bold block">Technologies used:</h1><br />
            <div className=" flex flex-wrap justify-center ">
                <img className=" w-32 h-15" src="/html-js-css.png" alt=""/>
                <img className=" w-13 h-12" src="/express-js.jpg" alt="" />
                <img className=" w-12 h-12" src="/socketio.jpg" alt="" />
            </div>
        </div>
    );
}
 
export default CodeMeet;