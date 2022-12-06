import { useEffect, useState } from "react";
import { City } from "../Departments/City";
import { changeAtms } from "../../service/filter";
import { atmsInfo } from "../../api";
import { DepartmentsInformation } from "../Departments/DepartmentsInformation";
import { getCityDepartments } from "../../service/filter";
import './Atms.sass'


export function Atms () {
    const [atms, setAtms] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const [selectedCityDepartments, setSelectedCityDepartments] = useState(null);
    const [itemForModal, setItemForModal] = useState(null);
    const [showModalAtms ,setShowModalAtms] = useState(false);


    const changeItemForModal = (element) => {
        setItemForModal(element)
        setShowModalAtms(true)
    };

    const getAtmsInfo = async () => {
        const resp = await atmsInfo.getAtmsInfo();
        const changeResp = await changeAtms(resp);
        setAtms(changeResp);
        setIsLoading(false);
    };
    useEffect(()=> {
        getAtmsInfo();
    }, []);

    useEffect(()=> {
        getCityDepartments(atms, selectedCity, setSelectedCityDepartments)
    }, [selectedCity])



    return ( 
    <div className="atms_wrapper">
        <City fullInfo={atms} isLoading={isLoading} setSelectedCity={setSelectedCity}/>
        <DepartmentsInformation 
        selectedCityDepartments={selectedCityDepartments} 
        changeItemForModal={changeItemForModal} 
        showModalAtms={showModalAtms} 
        setShowModal={setShowModalAtms}
        itemForModal={itemForModal}
        headerName='Банкоматы "Беларусбанк"'/>
    </div>

    )
}