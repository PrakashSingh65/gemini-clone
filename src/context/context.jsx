import { createContext } from "react";
import { useState } from "react";

export const context = createContext();

const contextProvider = (props) =>{

    const [input,setInput] = useState("");
    const [recientPrompt,setRecientPrompt] = useState();
    const [prevPrompts,setPrevPrompts] = useState([]);
    const [showResult,setShowResult] = useState(false);
    const [loading,setLoading] = useState(false);
    const [resultData,setResultData] = useState("");

   

    //onSent("Hello, Gemini!");


    const contextValue ={
        prevPrompts,
        setPrevPrompts,
        setRecientPrompt,
        recientPrompt,
        input,
        setInput,
        showResult,
        setShowResult,
        loading,
        resultData,

    }
    return (
        <context.Provider value={contextValue}>
            {props.children}
        </context.Provider>
    )
}

export default contextProvider;