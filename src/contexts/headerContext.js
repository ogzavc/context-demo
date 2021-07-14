import React,{ createContext } from "react";
import headerData from '../data/headerData.json' 

export const HeaderContext = createContext()

export const HeaderProvider = (props) => { 

    return(
        <HeaderContext.Provider value={headerData}>
            {props.children}
        </HeaderContext.Provider>
    )
}
 