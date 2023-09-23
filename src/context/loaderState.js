import LoaderContext from "./loaderContext";
import { useState } from "react";

const LoaderState  = (props)=>{
    const [progress, setProgress]  = useState(0);
    return (
        <LoaderContext.Provider value={{progress, setProgress}}>
            {props.children}
        </LoaderContext.Provider>
    );
}

export default LoaderState;