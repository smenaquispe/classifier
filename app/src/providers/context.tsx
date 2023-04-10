import React, { createContext, useState } from "react";
import { ResultInterface } from "../shared/result.interface";

type Props = {
    children : JSX.Element
}

type ContextType = {
    input : string,
    setInput : (input : string) => void,
    result : ResultInterface,
    setResult : (result : ResultInterface) => void
}

const Context = createContext<ContextType | null>(null)

function ContextProvider ({children} : Props) {
    const [input, setInput] = useState<string>('');
    const [result, setResult] = useState<ResultInterface>(null);

    return (
        <div>
            <Context.Provider value={{input, setInput, result, setResult}}>
                {children}
            </Context.Provider>
        </div>
    )
}

export {Context, ContextProvider}