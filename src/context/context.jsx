import { createContext } from "react";
import runChat from "../config/gemini";

export const context = createContext();

const contextProvider = (props) =>{

    const [input,setInput] = useState("");
    const [recientPrompt,setRecientPrompt] = useState();
    const [prevPrompts,setPrevPrompts] = useState([]);
    const [showResult,setShowResult] = useState(false);
    const [loading,setLoading] = useState(false);
    const [resultData,setResultData] = useState("");

    const onSent = async (prompt) => {
        await runChat(prompt);
    }

    //onSent("Hello, Gemini!");


    const contextValue ={
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecientPrompt,
        recientPrompt,
        input,
        setInput,
        showResult,
        setShowResult,
        loading,
        newChat,
        resultData,

    }
    return (
        context.Provider value={contextValue}>
            {props.children}
        </context.Provider>
    )
}

export default contextProvider;