import { Context } from "../providers/context";
import { useContext } from "react";
import { classify } from "../IA/ia";

function Button(){
    
    const context = useContext(Context)

    // funcion que setea el result
    const handleButton = async () => { 
        if(context?.input){
            const res = await classify(context.input);
            context?.setResult(res)
        }
    }
    
    return (
        <div className='flex w-full justify-center mt-6'>
            <button type="button" onClick={ handleButton } className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">classify</button>
        </div>
    )
}

export default Button