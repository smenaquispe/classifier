interface dataStructure {
    input : string,
    result : string
}

function ResultContent( {input, result} : dataStructure){

    return(
        <>
            <div className="mx-9" > { result } </div>
        </>
    )

}

export default ResultContent;