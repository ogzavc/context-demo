import React, {useContext, useState} from 'react';  
import styles from './styles.scss' 
import {CouponContext} from '../../contexts/couponContext'  
import handleViewport from 'react-in-viewport';
import {HeaderContext} from '../../contexts/headerContext'


const EventSection = ({eventData,ind}) => { 



    const {C, N, D, DAY, LN, T, ED, OCG} = eventData;    
    const eventNo = C;
    const eventText = N;
    const eventDate = D;
    const eventDay = DAY;
    const eventLeague = LN;
    const eventTime = T;
    const eventId = ED;
    const eventBets = OCG;
    const eventResultBet = eventBets[1];
    const eventdoubleResultBet = eventBets[2];
    const eventHandicapResultBet = eventBets[3];
    const eventYesNoBet = eventBets[4];
    const eventHigherLowerBet = eventBets[5];

    const header = useContext(HeaderContext)     
    const [coupon,setCoupon] = useContext(CouponContext)    
    const [activeClassId,setActiveClassId] = useState([])   
 

    const onBetClick = (betId,ratioID,uniqClass) => {  
  
            let ratios = Object.values(eventData.OCG).filter(bet => bet.ID === betId);

            if(Object.values(ratios[0].OC).filter(ratio => ratio.ID === ratioID).length > 0) {
                var uniqRatioID = eventNo+betId+ratioID;
                 

                if(activeClassId.indexOf(uniqClass) === -1) {
                    setActiveClassId(prevActiveRatios => [...prevActiveRatios, uniqClass])
                } else {
                    let newActiveClass = activeClassId;
                    newActiveClass.splice(activeClassId.indexOf(uniqClass), 1)
                    setActiveClassId([...newActiveClass])
                }
                  
                coupon.findIndex(obj => obj.uniqRatioID  === uniqRatioID) === -1 ? ( 
                    setCoupon(prevEvents => [...prevEvents, {
                        eventData,
                        betId,
                        ratioID,
                        uniqRatioID
                    }])
                )  : (  
                    setCoupon([...coupon.filter((item) => item.uniqRatioID !== uniqRatioID)])
                )


            } 
 
       
    }

 return(
     <>
        <div className={"eventWrapper"}>  
                <div className={"eventInfo"}>
                    <div className={"eventInfoTitle"}>
                        <span className={"eventInfoId"}> {ind} </span>
                        {eventDate +' '+ eventDay +' '+ eventLeague} 
                    </div>
                    <div className={"eventInfoDetail"}>
                        <div className={"eventInfoArea"}> {eventNo}</div>
                        <div className={"eventInfoArea"}> {eventTime}</div>
                        <div className={"eventInfoArea"}> {eventText}</div>
                    </div>
                   
                </div>
               
               <div className={"eventBetWrapper"} >   
                            {
                                header.HeaderData.filter(function(item){
                                    return item.ID === '1';
                                 }).map(function(item, i){
                                     let uniqClassId = `${eventNo}-${i}-${item.eventID}`
                                       return ( 
                                        <div className={activeClassId.indexOf(uniqClassId) !== -1 ? "eventBetInnerActive": "eventBetInner"} key={uniqClassId}>  
                                            {eventResultBet ? (
                                                <>
                                                    <div className={"eventBetRatioTitle"} >
                                                        {item.eventName}
                                                    </div> 
                                                    <div className={"eventBetRatio"} onClick={() => onBetClick(eventResultBet.ID, item.eventID, uniqClassId)}> 
                                                        {
                                                        Object.values(eventResultBet.OC).filter(bet => bet.ID === item.eventID)[0] && 
                                                        Object.values(eventResultBet.OC).filter(bet => bet.ID === item.eventID)[0].O
                                                        }
                                                    </div>
                                                </>   
                                            ) : (
                                                <>
                                                    <div className={"eventBetRatioTitle"}>
                                                        {item.eventName}
                                                    </div> 
                                                    <div className={"eventBetRatio"} > 
                                                         
                                                    </div>
                                                </>
                                            )}
                                        </div>   
                                       ) 
                                 })
                                 
                            } 

                            {
                                header.HeaderData.filter(function(item){
                                    return item.ID === '5';
                                 }).map(function(item, i){
                                     let uniqClassId = `${eventId}-${i}-${item.eventID}`
                                       return ( 
                                        <div className={activeClassId.indexOf(uniqClassId) !== -1 ? "eventBetInnerActive": "eventBetInner"} key={uniqClassId}>  
                                            {eventHigherLowerBet ? (
                                                <>
                                                    <div className={"eventBetRatioTitle"} >
                                                        {item.eventName}
                                                    </div> 
                                                    <div className={"eventBetRatio"} onClick={() => onBetClick(eventHigherLowerBet.ID, item.eventID, uniqClassId)}> 
                                                        {
                                                        Object.values(eventHigherLowerBet.OC).filter(bet => bet.ID === item.eventID)[0] && 
                                                        Object.values(eventHigherLowerBet.OC).filter(bet => bet.ID === item.eventID)[0].O
                                                        }
                                                    </div>
                                                </>   
                                            ) : (
                                                <>
                                                    <div className={"eventBetRatioTitle"}>
                                                        {item.eventName}
                                                    </div> 
                                                    <div className={"eventBetRatio"} > 
                                                        
                                                    </div>
                                                </>
                                            )}
                                        </div>   
                                       ) 
                                 })
                                 
                            }  

                            {
                                header.HeaderData.filter(function(item){
                                    return item.ID === '4';
                                 }).map(function(item, i){
                                     let uniqClassId = `${eventId}-${i}-${item.eventID}`
                                       return ( 
                                        <div className={activeClassId.indexOf(uniqClassId) !== -1 ? "eventBetInnerActive": "eventBetInner"} key={uniqClassId}>  
                                            {eventHandicapResultBet ? (
                                                <>
                                                    <div className={"eventBetRatioTitle"} >
                                                        {item.eventName}
                                                    </div> 
                                                    <div className={"eventBetRatio"} onClick={() => onBetClick(eventHandicapResultBet.ID, item.eventID, uniqClassId)}> 
                                                        {
                                                        Object.values(eventHandicapResultBet.OC).filter(bet => bet.ID === item.eventID)[0] && 
                                                        Object.values(eventHandicapResultBet.OC).filter(bet => bet.ID === item.eventID)[0].O
                                                        }
                                                    </div>
                                                </>   
                                            ) : (
                                                <>
                                                    <div className={"eventBetRatioTitle"}>
                                                     {item.eventName}
                                                    </div> 
                                                    <div className={"eventBetRatio"} > 
                                                        
                                                    </div>
                                                </>
                                            )}
                                        </div>   
                                       ) 
                                 })
                                 
                            }  


                            {
                                header.HeaderData.filter(function(item){
                                    return item.ID === '2';
                                 }).map(function(item, i){
                                     let uniqClassId = `${eventId}-${i}-${item.eventID}`
                                       return ( 
                                        <div className={activeClassId.indexOf(uniqClassId) !== -1 ? "eventBetInnerActive": "eventBetInner"} key={uniqClassId}>  
                                            {eventdoubleResultBet ? (
                                                <>
                                                    <div className={"eventBetRatioTitle"} >
                                                        {item.eventName}
                                                    </div> 
                                                    <div className={"eventBetRatio"} onClick={() => onBetClick(eventdoubleResultBet.ID, item.eventID, uniqClassId)}> 
                                                        {
                                                        Object.values(eventdoubleResultBet.OC).filter(bet => bet.ID === item.eventID)[0] && 
                                                        Object.values(eventdoubleResultBet.OC).filter(bet => bet.ID === item.eventID)[0].O
                                                        }
                                                    </div>
                                                </>   
                                            ) : (
                                                <>
                                                    <div className={"eventBetRatioTitle"}>
                                                     {item.eventName}
                                                    </div> 
                                                    <div className={"eventBetRatio"} > 
                                                        
                                                    </div>
                                                </>
                                            )}
                                        </div>   
                                       ) 
                                 })
                                 
                            } 


                            {
                                header.HeaderData.filter(function(item){
                                    return item.ID === '3';
                                 }).map(function(item, i){
                                     let uniqClassId = `${eventId}-${i}-${item.eventID}`
                                       return ( 
                                        <div className={activeClassId.indexOf(uniqClassId) !== -1 ? "eventBetInnerActive": "eventBetInner"} key={uniqClassId}>  
                                            {eventYesNoBet ? (
                                                <>
                                                    <div className={"eventBetRatioTitle"} >
                                                        {item.eventName}
                                                    </div> 
                                                    <div className={"eventBetRatio"} onClick={() => onBetClick(eventYesNoBet.ID, item.eventID, uniqClassId)}> 
                                                        {
                                                        Object.values(eventYesNoBet.OC).filter(bet => bet.ID === item.eventID)[0] && 
                                                        Object.values(eventYesNoBet.OC).filter(bet => bet.ID === item.eventID)[0].O
                                                        }
                                                    </div>
                                                </>   
                                            ) : (
                                                <>
                                                    <div className={"eventBetRatioTitle"}>
                                                     {item.eventName}
                                                    </div> 
                                                    <div className={"eventBetRatio"} > 
                                                        
                                                    </div>
                                                </>
                                            )}
                                        </div>   
                                       ) 
                                 })
                                 
                            }  
  
               </div>
            
           
        </div>
     </>    
 )
}

const handleEventSection = handleViewport(EventSection);

export default handleEventSection;