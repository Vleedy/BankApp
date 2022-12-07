import { useEffect, useState } from 'react';
import { Input } from './Input/Input'
import { currencyInfo } from '../../api';
import { mapResponse } from '../../service/filter';
import {filterMainCurrncy} from '../../service/filter';
import { NewCurrency } from './NewCurrency/NewCurrency';
import { Today } from './Content/Today';
import { News } from './Content/News';
import { CitySkeleton } from '../Departments/CitySkeleton';
import './MainConverter.sass';




const baseCur = {        /*------------------*/
  'name': 'BYN',        /*--Базовая валюта от которой идёт расчёт--*/
  'currency': 1        /*------------------*/
}




export function MainConverter ({setNumber}) {
    const [response, setResponse] = useState([]);                /* преобразованный ответ от сервера в виде массива объектов */
    const [mainCurrency, setMainCurrency] = useState([]);         /* отфильтрованный response в виде массива объектов "главных" валют*/ 
    const [value, setValue] = useState();
    const [num, setNum] = useState(0);                               /*id  инпута, где сейчас происходит ввод-*/
    const [loading, setLoading] = useState(true);                    /*Загрузка?*/




    async function getCurrentCurrency() {                       /*---------------------------------*/                   
      const resp = await currencyInfo.getCurrentCurrency();
      if (Array.isArray(resp)) {
        const mapArray = [baseCur,...mapResponse(resp)]
        setResponse(mapArray);
        setMainCurrency(filterMainCurrncy(mapArray));
        setLoading(false);             
      }   
    }                                                  /*получаем ответ от сервера, преобразуем его и сетим */
  
    useEffect(()=> {
      getCurrentCurrency()
    }, [])                                                    /*---------------------------------*/   
  
  
    const changeValue = (e, id) => {           /*-Функция для отлавливания вводимого значения и места(id) где оно вводится-*/   
      setValue(e.target.value)                  /*-сетим вводимое значение-*/  
      setNum(id)                                 /*-сетим id  инпута, где сейчас происходит ввод-*/  
    }
    return (  
        <div className="converter_section_wrapper">
          <div className="converter_wrapper">
            <div className="input_wrapper">
            { loading? <CitySkeleton quantity={6} view={'converter'}/>: mainCurrency.map((item, i)=>{
                return (
                  <Input 
                  needCur={mainCurrency[num].currency}   /*-передаём курс инпута(валюты) на котором происходит ввод значения-*/ 
                  num={num}                              /*id  инпута, где сейчас происходит ввод-*/
                  value={value}                          /*-вводимое значение-*/
                  onChange={changeValue}                 /*-Передаём функцию для отлавливания вводимого значения и места(id) где оно вводится-*/
                  id={i}                                 /*id каждого элемента*/ 
                  key={i} 
                  name={item.name}                       /*имя каждого элемента(валюты)*/ 
                  defaultValue={item.currency}/>         /*курс каждого элемента(валюты)*/ 
                )
            })}
              {loading? null: <NewCurrency mainCurrency={mainCurrency} addNewCurrency={setMainCurrency} response={response}/>}
            </div>
          </div>
          <div className="content_wrapper">
            <Today response={response}/>
            <News setNumber={setNumber}/>
          </div>
        </div>
      );
}