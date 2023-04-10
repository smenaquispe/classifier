import { ResultInterface } from "./shared/result.interface";

function ResultContent( result : ResultInterface ){

    return(
        <>
            <div className="mx-9 border-solid" > { result?.topic }  { result?.confidence } </div>
        </>
    )

}

export default ResultContent;