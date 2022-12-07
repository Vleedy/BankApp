import { useEffect, useState } from 'react';
import { processedCitiesResponse } from '../../service/filter';
import { getCityDepartments } from '../../service/filter';
import { City } from './City';
import { DepartmentsInformation } from './DepartmentsInformation';
import { departmentsInfo } from '../../api';

import './Departments.sass';




export function Departments () {   
    const [fullInfo, setFullInfo] = useState([]);  /*Полученный с сервера и преобразованный массив информации*/
    const [selectedCity, setSelectedCity] = useState(null); /*выбранный город по имени которого фильтруется массив инфориации и выдаются все отделения этого города*/
    const [selectedCityDepartments, setSelectedCityDepartments] = useState(null); /*стейт для отделений выбранного города*/
    const [itemForModal, setItemForModal] = useState(null); /*При клике "подробнее" сюда кладётся информация о конкретном отделении, которая дальше идёт в модалку*/
    const [showModal ,setShowModal] = useState(false); /*Показать модалку с подробной инфой об отделении?*/
    const [isLoading, setIsLoading] = useState(true);
    
    const changeItemForModal = (element) => {
        setItemForModal(element)
        setShowModal(true)
    }

    
    const getDepartmentsInfo = async () => {
        const resp = await departmentsInfo.getDepartmentsInfo();
        setFullInfo(resp);
        setIsLoading(false)
     }


    useEffect(()=> {
        getDepartmentsInfo()
    }, [])

    useEffect(()=> {
        getCityDepartments(fullInfo, selectedCity, setSelectedCityDepartments)
    }, [selectedCity])



    return (
        <div className='departments_section'>
            <City fullInfo={fullInfo} isLoading={isLoading} setSelectedCity={setSelectedCity} />
            <DepartmentsInformation
                selectedCityDepartments={selectedCityDepartments} 
                changeItemForModal={changeItemForModal} 
                showModal={showModal} 
                setShowModal={setShowModal}
                itemForModal={itemForModal}
                headerName='Отделения "Беларусбанк"'/>
        </div>

    )
}