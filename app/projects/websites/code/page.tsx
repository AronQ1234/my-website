import Link from "next/link";
const CodeMeet = () => {
    return ( 
        <>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                <h1 className="text-gray-50 inline ml-2">
                <strong className="relative top-1/2 left-[45%] text-2xl">No image available</strong><br />
                This website uses html, css, vanila js, express-js, socket.io and compilex witch is used for code compilation.
                We use uuid to generate a random room id and than using a peer server we check when a user connnects and disconnects. 
                In lockal development(my computer), it works but because I need to run two servers and compilex dosen't work well when it is used for deployment, i cna no deploy the sight. 
                So I am looking for a new way to host the two severs nd find another compiling option witch I think I have: judg0, is a api that is used for code compilation but I could not get it to fully work.
                               
                </h1> 
                <h1 className="absolute top-[150%] left-[40%] -translate-x-1/2 -translate-y-1/2 text-teal-300 font-bold block">Technologies used:</h1><br />
                <div className=" flex flex-wrap justify-center absolute top-[150%] left-[55%] -translate-x-1/2 -translate-y-1/2">
                    <img className=" w-32 h-15" src="../../../html-js-css.png" alt=""/>
                    <img className=" w-13 h-12" src="../../../express-js.jpg" alt="" />
                    <img className=" w-12 h-12" src="../../../socketio.jpg" alt="" />
                </div>
            </div>
            
        </>
    );
}
 
export default CodeMeet;