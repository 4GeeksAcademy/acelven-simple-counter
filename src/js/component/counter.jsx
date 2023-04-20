import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


const Counter = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="time">
      
        {seconds} seconds have elapsed since loading.
        <FontAwesomeIcon icon={icon({name: 'clock-nine', style: 'regular'})} />
        <p style={{color: "white"}}>{seconds}</p>
    </div>
  );
};


export default Counter;




// if (Counter(seconds)) { seconds = 10
// 	return (
// 		<div><WarningBanner warn={this.state.showWarning} /></div>
// 	)};

