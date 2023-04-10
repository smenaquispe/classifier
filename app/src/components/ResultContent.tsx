import { Context } from "../providers/context";
import { useContext } from "react";

function ResultContent(){

    const context = useContext(Context)

    return(
        <>
            <div className="mx-9 border-solid" > { context?.result?.topic }  { context?.result?.confidence } </div>
        </>
    )

}

export default ResultContent;