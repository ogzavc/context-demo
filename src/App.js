import React from 'react';
import Home from './screens/home'; 
import Coupon from './components/coupon'; 
import {BultenProvider} from './contexts/bultenContext'
import {CouponProvider} from './contexts/couponContext' 
import {HeaderProvider} from './contexts/headerContext'

function App() { 
  return ( 
      <div className="App container"> 
        <HeaderProvider>
          <BultenProvider>
            <CouponProvider>  
              <Home/>
              <Coupon/>
              </CouponProvider>
          </BultenProvider>
        </HeaderProvider>
      </div> 
  );
}

export default App;
