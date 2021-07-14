import React,{useContext ,useEffect, useState}  from 'react';  
import styles from './styles.scss' 
import {CouponContext} from '../../contexts/couponContext'

const Coupon = () => {
    const [coupon] = useContext(CouponContext)  
    const [couponRatios, setCouponRatios]= useState([])  
    const [totalRatio, setTotalRatio] = useState(1) 
    const [showCoupon,setShowCoupon] = useState(false);

    useEffect(() => { 
        var newRatios = []
        coupon.forEach(function(item,i){
            const {eventData,ratioID,betId} = item;
            let eventRatios = Object.values(eventData.OCG).filter(bet => bet.ID === betId)[0]
            let ratio = Object.values(eventRatios.OC).filter(bet => bet.ID === ratioID)[0] 
            newRatios.push(ratio.O)
        })
        setCouponRatios(newRatios) 
    }, [coupon])


    useEffect(() => { 
        let newTotalratio = 1;
        couponRatios.forEach(function(item,i){ 
            newTotalratio = newTotalratio*item; 
        })

        setTotalRatio(newTotalratio)
    }, [couponRatios])

    

    return(
        <>
            <div className={"coupon"}> 
                <div className={showCoupon ? "showCouponDetail" : "hideCouponDetail"}>
                    {
                        coupon.length > 0 ? (
                            coupon.map(function(item,i){
                                const {eventData,ratioID,betId} = item;
                                const {C, N} = eventData;  
                                let eventRatios = Object.values(eventData.OCG).filter(bet => bet.ID === betId)[0]
                                let ratios = Object.values(eventRatios.OC).filter(bet => bet.ID === ratioID)[0] 
                                let ratio = ratios.O
                                let MBS = ratios.MBS
                                let eventCode = C;
                                let eventName = N;
        
                                return( 
                                    <div className={"couponContent"} key={`${eventCode}-${ratioID}-${betId}`}>
                                            <div className={"couponData"}>
                                                {MBS}
                                            </div> 
                                            <div className={"couponData"}>
                                                Kod : {eventCode}
                                            </div> 
                                            <div className={"couponData"}>
                                                Maç : {eventName}
                                            </div>   
                                            <div className={"couponData"}>
                                                Oran : {ratio}
                                            </div>   
                                            <div className={"couponData"}>
                                                MBS : {MBS}
                                            </div> 
                                    </div> 
                                )
                            }) 
                        ) : (
                            <div> Kupon Boş. Bültenden bir oran seçerek kuponunuzu oluşturun. </div>
                        )
                        
                    
                }
                </div> 
                <div className={"couponTotal"} onClick={() => setShowCoupon(!showCoupon)}>
                    Toplam Tutar: {totalRatio > 1 ? totalRatio : 0}
                </div>        
              
            </div>
        </>    
    )
}

export default Coupon;