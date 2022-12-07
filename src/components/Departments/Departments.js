import { useEffect, useState } from 'react';
import { processedCitiesResponse } from '../../service/filter';
import { getCityDepartments } from '../../service/filter';
import { City } from './City';
import { DepartmentsInformation } from './DepartmentsInformation';
import { departmentsInfo } from '../../api';

import './Departments.sass';




export function Departments () {
    const [fullInfo, setFullInfo] = useState([]); 
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedCityDepartments, setSelectedCityDepartments] = useState(null);
    const [itemForModal, setItemForModal] = useState(null);
    const [showModal ,setShowModal] = useState(false);
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