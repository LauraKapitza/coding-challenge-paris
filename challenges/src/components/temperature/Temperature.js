import './Temperature.css';
import {useState} from 'react';

function Temperature() {
    const [temperature, setTemperature] = useState(null)
    const minTemp = 0;
    let message ='';
    let textColor = ''

    if (temperature < 10) {
        message = "It's cold ❄️";
        textColor = 'blue';
    } else if (temperature >= 10 && temperature < 30) {
        message = "It's nice 🌼";
        textColor = 'black';
    } else {
        message = "It's warm ☀️";
        textColor = 'red';
    }
    
    return(
        <div className="temperature">
           <input 
            type='number'
            value={temperature} 
            min={minTemp} 
            placeholder='Temperature in C°'
            onChange={(e) => setTemperature(e.target.value)} 
            /> 
           <p style={{color: textColor}}>{message}</p>
        </div>
    )
}

export default Temperature;