import React from "react"
import { Context } from "../providers/context"
import { useContext } from "react"
import * as pdfjsLib from 'pdfjs-dist';
import PizZip from "pizzip";
import DocxTemplater from 'docxtemplater'

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

    const readPdfFile = async (fileUrl : string) => {
        const pdf = await pdfjsLib.getDocument(fileUrl).promise
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

    const readDocxFile = async (e : ProgressEvent<FileReader>) => {
        const zip = new PizZip(e!.target!.result ?? '');
        const doc = new DocxTemplater();
        doc.loadZip(zip);
        const text = doc.getFullText();
        
        const input = context?.refInput;
        input!.current!.innerHTML = text
        context?.setInput(text)
    }

    const handleFile = async (e : React.ChangeEvent<HTMLInputElement>) => {
        const extension = e.target.value.split('.')[1]
        const fileUploaded = e!.target!.files![0]

        switch (extension) {
            case 'txt': {
                const file = new FileReader()
                file.addEventListener('load', readTextFile)
                file.readAsText(fileUploaded)        
                break;
            }

            case 'pdf': {
                const fileUrl = URL.createObjectURL(fileUploaded)
                readPdfFile(fileUrl)
                break;
            }
            case 'docx': {
                const file = new FileReader()
                file.readAsArrayBuffer(fileUploaded)
                file.addEventListener('load', readDocxFile)
                break;
            }
            default: {
                context?.setResult({topic: 'No es un archivo válido', confidence: 0})
                break;
            }
        }
        
    }

    return (
        <input type="file" name="file" className="ml-5" onChange={handleFile} />
    )

}

export default FileInput