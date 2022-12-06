import { useEffect, useState } from 'react';
import { getFilterCity } from '../../service/filter';
import { SearchCity } from './SearchCity';
import { CitySkeleton } from './CitySkeleton';
import './Departments.sass';


export function City ({ fullInfo, isLoading, setSelectedCity }) {
    const [cities, setCities] = useState([]);
    const [searchName, setSearchName] = useState('');


    function getUniqueCities(arr) {
        return Array.from(new Set(arr));
      }

    const getCities = () => {
        setCities(()=>getUniqueCities(fullInfo.map(item=>item.name)).sort())
    }

    useEffect(()=>getCities(), [fullInfo])


    return (
        <>
            { isLoading? 
            <div className="cities_wrapper">
                <div className="cities_header">
                </div>
                <div style={{width:80+'%'}} className="cities_content">
                    <CitySkeleton quantity={13}/>
                </div>
            </div> 
            : 
            <div className="cities_wrapper">
                <div className="cities_header">
                    <h4>Выберите город</h4>
                    {<SearchCity setSearchName={setSearchName}/>}
                </div>
                <div className="cities_content">
                        {cities.length>0 && getFilterCity(cities, setSelectedCity, searchName)}
                </div>
            </div> 
            }
        </>
    )
    
}



