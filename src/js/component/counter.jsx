import React, { useState, useEffect } from 'react';
import { ClockIcon } from 'lucide-react'


const Counter = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='background'>
    <div className="time">
      
    <ClockIcon color="white" size={60} />{seconds} seconds have elapsed since loading.
       
    </div>
    </div> 
  );
};


export default Counter;




// if (Counter(seconds)) { seconds = 10
// 	return (
// 		<div><WarningBanner warn={this.state.showWarning} /></div>
// 	)};

