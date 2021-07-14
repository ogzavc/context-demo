import React,{ createContext } from "react";
import BultenData from '../data/bultenData.json' 

export const BultenContext = createContext()

export const BultenProvider = (props) => {
    const { Events = {}} = BultenData;
    const bulten = Events; 

    return(
        <BultenContext.Provider value={bulten}>
            {props.children}
        </BultenContext.Provider>
    )
}