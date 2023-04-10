import { Context } from "../providers/context";
import { useContext } from "react";

function ResultContent(){

    const context = useContext(Context)

    return(
        <>
            <div className="border border-solid border-gray-300 block h-5/6 w-5/6 bg-gray-50  rounded-lg mx-auto mb-6" > { context?.result?.topic }  { context?.result?.confidence } </div>
        </>
    )

}

export default ResultContent;