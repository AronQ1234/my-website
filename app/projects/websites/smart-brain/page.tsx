import Link from "next/link";
const SmartBrain = () => {
    return ( 
        <>
            <div className="absolute flex flex-col justify-center items-center h-full w-full pt-10">
                <img  className="float-left" src="/smart-brain.png" alt="smart-brain" width={"50%"} height={"90%"}/>
                <h1 className="text-gray-50 inline ml-2">This is a webside created with react for the frontend and expressjs server for the backend. The back end is connecting to a database witch keeps track of the email, password, name, entries and the date when the user joined.
                This project taught me how to create backends and different endpoints and how to connect a frontend with these endpoints. It also taught me SQL.
                I ran into many problems especialy in deployment because the database did not connect properly.
                A nother problem I faced was the api witch had the json that it returnes and the data I wanted was somewhere else in the json.
                I also learned to use .env files and how to add env variables in deployment.The api used takes a photo and findes 1 face in it.Each time we detect a phoo our entries increes.
                </h1> 
                <br /> 
                <br />
                <div className=" text-center">
                <Link href="https://github.com/Bosspro2728/smart-brain"><h1 className=" text-green-600">Source code:Frontend</h1></Link>
                    <Link href="https://github.com/Bosspro2728/smart-brain-api"><h1 className=" text-green-600">Source code:Backend</h1></Link>
                    <Link href="https://bosspro2728.github.io/smart-brain/"><h1 className=" text-green-600">See live</h1></Link>
                </div>
                <h1 className="text-teal-300 font-bold block">Technologies used:</h1><br />
                <div className=" flex flex-wrap justify-center">
                    <img className=" w-12 h-12" src="/react.png" alt=""/>
                    <img className=" w-12 h-12" src="/api.png" alt=""/>
                    <img className=" w-13 h-12" src="/express-js.jpg" alt=""/>
                    <img className=" w-13 h-12" src="/postgresql.png" alt=""/>
                </div>
            </div>

        </>
    );
}
 
export default SmartBrain;