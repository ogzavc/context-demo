import React,{ useState, createContext } from "react"; 

export const CouponContext = createContext()

export const CouponProvider = (props) => { 
    const [coupon,setCoupon] = useState([])

    return(
        <CouponContext.Provider value={[coupon,setCoupon]}>
            {props.children}
        </CouponContext.Provider>
    )
}