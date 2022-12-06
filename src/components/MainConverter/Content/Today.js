import { useState, useEffect } from 'react';
import TextMobileStepper from './Slider';
import'./Today.sass';


export function Today ({response}) {
    const [date, setDate] = useState(Date().slice(0, 25));
    useEffect(()=>{
        setInterval(() => 
        setDate(() => (Date().slice(0, 25)), 1000))      
    }, [])
    return (
        <div className="today_wrapper">
            <h3>Конвертер использует курсы валют Национального банка РБ на момент: <br/> <span>{date}</span></h3>
            <TextMobileStepper response={response}/>
        </div>
    )
}
