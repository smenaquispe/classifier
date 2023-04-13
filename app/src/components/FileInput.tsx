import React from "react"
import { Context } from "../providers/context"
import { useContext } from "react"

function FileInput(){

    const context = useContext(Context)

    const read = (e : ProgressEvent<FileReader>) => {
        const input = context?.refInput;
        if(input && e.target?.result?.toString()) {
            input!.current!.innerHTML = e.target?.result?.toString()
            context?.setInput(e.target?.result?.toString())
        }
    }

    const handleFile = (e : React.ChangeEvent<HTMLInputElement>) => {
        const file = new FileReader()
        file.addEventListener('load', read)
        file.readAsText(e!.target!.files![0])
    }

    return (
        <input type="file" name="file" className="ml-5" onChange={handleFile} />
    )

}

export default FileInput