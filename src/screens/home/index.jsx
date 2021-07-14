import React,{useContext} from 'react';    
import EventSection from '../../components/eventSection';
import Header from '../../components/header'; 
import {BultenContext} from '../../contexts/bultenContext'


const Home = () => {
   
    const bulten = useContext(BultenContext)      
 

    return ( 
        <>
            <Header/>
                {Object.entries(bulten).map(([key ,eventValues], ind) => (    
                    <EventSection eventData={eventValues} key={key} ind={ind}/>
                ))}  
            
        </>
    )
}

 
export default Home;