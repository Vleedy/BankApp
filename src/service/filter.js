import Button from '@mui/material/Button';


export function mapResponse(response) {                           /* Функция для редактирования приходящего от сервера овета*/
    return response.map((item)=>{                                /* Возвращает массив преобразованных объектов */   
        return {
            'name': item.Cur_Abbreviation,
            'currency': item.Cur_OfficialRate/item.Cur_Scale     /* в API курс некоторых валют представлен не в отношении единицы, а 100 или 1000 - для уравнивания делим курс на единицы валюты */   
        }
    })
    }

export function filterMainCurrncy (mapArray) {      /*Функция для фильтрации уже обработанного ответа от серевера функцией выше*/
    return mapArray.filter(item=>                  /* Возвращает массив обхектов необходимых нам (главных) валют */
    item.name==="BYN" || 
    item.name==="USD" || 
    item.name==="EUR" || 
    item.name==="RUB" || 
    item.name==="UAH" || 
    item.name==="PLN")
}

export function processedCitiesResponse (response) {
    return response.map(item=>{
        return {
            'name': item.name,
            'street_type': item.street_type,
            'street': item.street,
            'home_number': item.home_number,
            'info_worktime': item.info_worktime,
            'GPS_X': item.GPS_X,
            'GPS_Y': item.GPS_Y
        }
       })
}

export function getFilterCity (array, func, name) {
    return (
        array.filter(item=>item.toLowerCase().includes(name.toLowerCase())).map((item, i)=>{
            return (
            <div key={i} className='city'>
                <Button onClick={()=>func(item)} sx={{color:'#3a9b00', width: '100%', justifyContent: 'flex-start'}}>{item}</Button>
            </div>
            )
        })
    )
}

export function getCityDepartments (array, cityName, setCity) {
    if (cityName) {
        return (
            setCity(array.filter(item => item.name===cityName))
        )
    }
}

export function normDinnerTime (item) {
    return (
        ` Обед:${item.slice(item.length-11, item.length)}`
    )
}
export function normWorkTime (item) {
    if (item.length>10) {
        return (
            `${item.slice(0, 2)} - ${item.slice(3, 14)}`
        )
    } else return `${item.slice(0, 2)} - выходной день`
   
}

export function changeAtms(resp) {
    return resp.map(item=> {
        return {
            'currency': item.currency,
            'cards': item.cards,
            'name': item.Address.townName,
            'street': item.Address.streetName,
            'home_number': item.Address.buildingNumber,   
            'latitude': item.Address.Geolocation.GeographicCoordinates.latitude,  
            'longitude': item.Address.Geolocation.GeographicCoordinates.longitude, 
            'services': item.Services,
            'time': item.Availability.StandardAvailability.Day

        }
    })
}








export function atmsWorkTime(params) {
    return params.map((item, i)=>{
        switch(item.dayCode) {
            case '01': return (
                <div key={i} className="day_element">
                    <h4>Понедельник</h4>
                    <h5>с {item.openingTime} по {item.closingTime}</h5>
                    <h6>{(item.Break.breakFromTime==="00:00"&& item.Break.breakToTime==="00:00")? 'Без перерыва' : `Перерыв с ${item.Break.breakFromTime} по ${item.Break.breakToTime} `}</h6>
                </div>
            );
            case '02': return (
                <div key={i} className="day_element">
                    <h4>Вторник</h4>
                    <h5>с {item.openingTime} по {item.closingTime}</h5>
                    <h6>{(item.Break.breakFromTime==="00:00"&& item.Break.breakToTime==="00:00")? 'Без перерыва' : `Перерыв с ${item.Break.breakFromTime} по ${item.Break.breakToTime} `}</h6>
                </div>      
            );
            case '03': return (
                <div key={i} className="day_element">
                    <h4>Среда</h4>
                    <h5>с {item.openingTime} по {item.closingTime}</h5>
                    <h6>{(item.Break.breakFromTime==="00:00"&& item.Break.breakToTime==="00:00")? 'Без перерыва' : `Перерыв с ${item.Break.breakFromTime} по ${item.Break.breakToTime} `}</h6>
                </div>   
            );
            case '04': return (
                <div key={i} className="day_element">
                    <h4>Четверг</h4>
                    <h5>с {item.openingTime} по {item.closingTime}</h5>
                    <h6>{(item.Break.breakFromTime==="00:00"&& item.Break.breakToTime==="00:00")? 'Без перерыва' : `Перерыв с ${item.Break.breakFromTime} по ${item.Break.breakToTime} `}</h6>
                </div>  
            );
            case '05': return (
                <div key={i} className="day_element">
                    <h4>Пятница</h4>
                    <h5>с {item.openingTime} по {item.closingTime}</h5>
                    <h6>{(item.Break.breakFromTime==="00:00"&& item.Break.breakToTime==="00:00")? 'Без перерыва' : `Перерыв с ${item.Break.breakFromTime} по ${item.Break.breakToTime} `}</h6>
                </div>  
            );
            case '06': return (
                <div key={i} className="day_element">
                    <h4>Суббота</h4>
                    <h5>с {item.openingTime} по {item.closingTime}</h5>
                    <h6>{(item.Break.breakFromTime==="00:00"&& item.Break.breakToTime==="00:00")? 'Без перерыва' : `Перерыв с ${item.Break.breakFromTime} по ${item.Break.breakToTime} `}</h6>
                </div>   
            );
            case '07': return (
                <div key={i} className="day_element">
                    <h4>Воскресенье</h4>
                    <h5>с {item.openingTime} по {item.closingTime}</h5>
                    <h6>{(item.Break.breakFromTime==="00:00"&& item.Break.breakToTime==="00:00")? 'Без перерыва' : `Перерыв с ${item.Break.breakFromTime} по ${item.Break.breakToTime} `}</h6>
                </div>
            );
            default: return '...';
        }
    })
}