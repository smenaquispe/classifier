import { Context } from "../providers/context";
import { useContext, useState } from "react";
import { classify } from "../IA/ia";
import loadingPng from '../assets/loading.png'

function Button(){
    
    const context = useContext(Context)
    const [wait, setWait] = useState<boolean>(false)

    // funcion que setea el result
    const handleButton = async () => { 
        if(context?.input){
            setWait(true)
            const res = await classify(context.input);
            setWait(false)
            context?.setResult(res)
        }
    }
    
    return (
        <div className='flex w-full justify-center mt-6 '>
            <button type="button" onClick={ handleButton } className="flex place-content-center gap-3 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                clasificar
                {wait && <img src={loadingPng} className="w-7 animate-spin" />}
            </button>
        </div>
    )
}

export default Button