import { ResultInterface } from './shared/result.interface';
import { useState, useEffect } from 'react'
import { summarize } from './IA/ia';
import ResultContent from './ResultContent';

function SummaryForm(){
    
    const [input, setInput] = useState<string>('');
    const [result, setResult] = useState<ResultInterface>(null);

    const handleInput = (e : React.ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value);

    // funcion que setea el result
    const handleButton = async () => { 
        const res = await summarize(input);
        setResult(res)
    }
    

    return (
        <>
            <div className='grid  grid-cols-2 items-center'>
                <textarea name="input" rows={20} onChange={ handleInput }  placeholder="Write a paragraph..." className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-2" ></textarea>
                { result && <ResultContent { ...result } ></ResultContent> } 
            </div>

            <input type="file" name="pdf" />
            <div className='flex w-full justify-center mt-6'>
                <button type="button" onClick={ handleButton } className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">summarize</button>
            </div>
        </>
    )
}

export default SummaryForm;