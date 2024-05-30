'use client'

const Card = (props : any) => {
    if(props.inProgress){
        return ( 
            <div className="w-[400px] h-[400px] m-5 p-0 bg-[rgba(71,85,105,0.5)] flex justify-center items-center border-4 rounded-2xl cursor-pointer border-stone-400 hover:bg-custom-gradient">
                <div className="w-[380px] h-[380px] bg-[rgb(71,85,105)] rounded-2xl flex justify-center items-center">
                    <h1 className="absolute text-5xl  text-white">{props.Text}</h1><br />
                    <h1 className="relative  top-[25%] font-extrabold text-3xl text-red-600">Sill in progress</h1>
                </div>
            </div>
        );
    }
    else{
        return ( 
            <div className="w-[400px] h-[400px] m-5 p-0 bg-[rgba(71,85,105,0.5)] flex justify-center items-center border-4 rounded-2xl cursor-pointer border-stone-400 hover:bg-custom-gradient">
                <div className="w-[380px] h-[380px] bg-[rgb(71,85,105)] rounded-2xl flex justify-center items-center">
                    <h1 className="absolute text-5xl  text-white">{props.Text}</h1>
                </div>
            </div>
        );

    }

}
 
export default Card;