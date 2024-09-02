import  React, { useState , useEffect } from 'react'
import style from './style.module.css'

export const DateTime = () => {
const today = new Date().toLocaleDateString('en-GB', {  
    month: 'long',
    day:   'numeric',
    year:  'numeric',
});
// console.log(today)


    const [date,setDate] = useState(new Date());
    
    useEffect(() => {
        
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div className={style.dateTime}>
            <p>{today}</p>
            <p>{date.toLocaleTimeString()}</p>
        </div>
    )
}

export default DateTime