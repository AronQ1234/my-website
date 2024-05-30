import Link from "next/link";
const LearningApp = () => {
    return (
        <> 
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                <div className="float-left w-1/2 h-[90%] flex flex-row flex-wrap  justify-between">
                <img className=" w-[50%] h-[45%]" src="../../../learningappDashboard.jpg" alt=""/>
                <img className=" w-[50%] h-[45%]" src="../../../AccountHandelingLearningApp.jpg" alt=""/>
                <img className=" w-[50%] h-[45%]" src="../../../VideosPdf-s.jpg" alt=""/>
                <img className=" w-[50%] h-[45%]" src="../../../VideosPhysics-Simulations.jpg" alt=""/>
                </div>
                <h1 className="text-gray-50 inline ml-2">This webside is created with nextjs jus like this projects website. It uses clerk for auhentication. 
                Clerk has the account management window alredy built, so I added it as a component. 
                The top-left image shows the dashboard after having signed in. 
                The top-right image shows the account management window. 
                The two other images show that I have added videos, pdf, and on the bottom-right we also have a physics simulation embaded from https://phet.colorado.edu/ witch has many simulations used in schools for teching different topics. 
                This website is still unfinished because some of the routes are still not finished.
                And I also have to add more functionality to the site.</h1>
                <h1 className="absolute top-[80%] left-[70%] -translate-x-1/2 -translate-y-1/2 text-teal-300 font-bold block">Technologies used:</h1><br />
                <div className=" flex flex-wrap justify-center absolute top-[80%] left-[82%] -translate-x-1/2 -translate-y-1/2">
                    <img className=" w-12 h-12" src="../../../nextjs.png" alt=""/>
                    <img className=" w-15 h-12" src="../../../clerk.png" alt=""/>
                </div>
            </div>

        </>
     );
}
 
export default LearningApp;