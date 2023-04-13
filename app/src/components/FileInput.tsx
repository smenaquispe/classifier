import React from "react"
import { Context } from "../providers/context"
import { useContext } from "react"
import * as pdfjsLib from 'pdfjs-dist';

pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.5.141/pdf.worker.min.js';

function FileInput(){

    const context = useContext(Context)

    const readTextFile = (e : ProgressEvent<FileReader>) => {
        const input = context?.refInput;
        if(input && e.target?.result?.toString()) {
            input!.current!.innerHTML = e.target?.result?.toString()
            context?.setInput(e.target?.result?.toString())
        }
    }

    const readPdfFile = async (pdf : pdfjsLib.PDFDocumentProxy) => {
        let content = ''
        for(let i = 1; i <= pdf.numPages; i++){
            const page = await pdf.getPage(i)
            const textContent = await page.getTextContent()
            const pageContent = textContent.items.map(item => item.str).join(' ')
            content += pageContent + '\n'
        }

        const input = context?.refInput;
        input!.current!.innerHTML = content
        context?.setInput(content)
    }

    const handleFile = async (e : React.ChangeEvent<HTMLInputElement>) => {
        const extension = e.target.value.split('.')[1]

        switch (extension) {
            case 'txt':
                const file = new FileReader()
                file.addEventListener('load', readTextFile)
                file.readAsText(e!.target!.files![0])        
                break;

            case 'pdf':
                const fileUrl = URL.createObjectURL(e!.target!.files![0])
                const pdf = await pdfjsLib.getDocument(fileUrl).promise
                readPdfFile(pdf)
                break;
        }
        
    }

    return (
        <input type="file" name="file" className="ml-5" onChange={handleFile} />
    )

}

export default FileInput