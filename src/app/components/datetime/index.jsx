import React, { useState, useEffect } from 'react'
import style from './style.module.css'

export const DateTime = () => {
    let d = new Date()
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const zeroPad = (i) => {
        if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
        return i;
    }
    let day = days[d.getDay()];
    let month = months[d.getMonth()];
    let today = day + " " + month + " " + zeroPad(d.getDate()) + ", " + d.getFullYear() + ";"
    


    const [date, setDate] = React.useState(d);

    useEffect(() => {

        var timer = setInterval(() => setDate(new Date()), 1000)
        // var timer = setInterval(()=>setDate(today, 1000 )
        return function cleanup() {
            clearInterval(timer)
        }

    });
    let time = zeroPad(date.toLocaleTimeString())

    return (
        <div className={style.dateTime}>
            <p>Date: {today}</p>
            <p>{time}</p>
        </div>
    )
}

export default DateTime