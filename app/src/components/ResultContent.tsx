import { Context } from "../providers/context";
import { useContext, useState, useEffect } from "react";
import { ResultInterface } from "../shared/result.interface";

interface ContentInterface {
    content : string,
    image? : string
}

function ResultContent(){

    const context = useContext(Context)
    const [result, setResult] = useState<ResultInterface>()
    const [content, setContent] = useState<ContentInterface>()

    useEffect(() => {
        setResult(context?.result)
    }, [context?.result])

    useEffect(() => {
        if(result)
            setContent({
                content: result?.topic,
            })
    }, [result])

    return(
        <>
            <div className="border border-solid border-gray-300 h-5/6 w-5/6 bg-gray-50  rounded-lg mx-auto mb-6 flex items-center justify-center" > 
                {
                    content?.content && 
                    <h1 className="text-center text-4xl">{content?.content.toUpperCase()}</h1>
                }
            </div>
        </>
    )

}

export default ResultContent;