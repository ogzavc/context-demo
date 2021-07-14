import React,{useContext} from 'react';  
import styles from './styles.scss'  
import {HeaderContext} from '../../contexts/headerContext'
import {BultenContext} from '../../contexts/bultenContext'

const Header = () => {

    const header = useContext(HeaderContext)      
    const bulten = useContext(BultenContext)    

 return(
     <>
        <div className={"header"}>
            <div className={"headerLeft"}>
                Event Count : {Object.keys(bulten).length}
            </div>

            <div className={"columns"}>
                {
                    header.HeaderData.map(function(item, i){ 
                        return ( 
                            <div className={"headerCell"} key={`header-column-${i}`}>
                                {item.eventName}
                            </div>   
                        ) 
                    })
                }
            </div>
           
        </div>
     </>    
 )
}

export default Header;