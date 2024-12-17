import Link from "next/link";
const LearningApp = () => {
    return (
        <div className="flex flex-col justify-center items-center absolute h-full w-full pt-10">
            <img  className="float-left" src="/LearningApp.png" alt="learning-app" width={"50%"} height={"90%"}/>
            <h1 className="text-gray-50 inline ml-2">
                This website is created with nextjs juts like this projects website. It uses clerk for auhentication. 
                Clerk has the account management window already built, so I added it as a component. 
                The top-left image shows the dashboard after having signed in. 
                The top-right image shows the account management window. 
                The two other images show that I have added videos, pdf, and on the bottom-right we also have a physics simulation embaded from https://phet.colorado.edu/ witch has many simulations used in schools for teching different topics. 
                This website is still unfinished because some of the routes are still not completed.
                And I also have to add more functionality to the site.
            </h1>
            <br /> 
            <br />
            <br />
            <h1 className="text-teal-300 font-bold block">Technologies used:</h1><br />
            <div className=" flex flex-wrap justify-center ">
                <img className=" w-12 h-12" src="/nextjs.png" alt=""/>
                <img className=" w-15 h-12" src="/clerk.png" alt=""/>
            </div>
        </div>
     );
}
 
export default LearningApp;
