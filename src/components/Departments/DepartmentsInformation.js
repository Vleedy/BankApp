import FindInPageIcon from '@mui/icons-material/FindInPage';
import ModalInfo from './ModalInfo';
import ModalAtms from '../Atms/ModalAtms';
import { Button } from '@mui/material';


export function DepartmentsInformation ({selectedCityDepartments, changeItemForModal, showModal, setShowModal, itemForModal, showModalAtms, headerName }) {
    return (
        <>
            <div className="cities_departments_wrapper">
                <div className="cities_header">
                    <h4>{headerName}</h4>
                </div>
                    <div className="departments_item_wrapper">
                    {selectedCityDepartments ? selectedCityDepartments.map((item, i)=>{
                        return ( 
                            <h6 key={i}>
                                {item.name} {item.street_type} {item.street} {item.home_number} 
                                <Button onClick={()=>changeItemForModal(item)} sx={{color: '#3a9b00', fontWeight: '300', fontSize:10+'px'}} variant="text">Подробнее</Button> 
                            </h6>
                        )
                    }) : 
                    <div className='choose-city'>
                        <h2>Для начала выберите город</h2>
                        <FindInPageIcon sx={{color: '#3a9b00', fontSize:'60px'}}/>
                        <h2>...</h2>
                    </div>}
                </div>
            </div>
            {showModal&&<ModalInfo setShowModal={setShowModal} itemForModal={itemForModal}/>}
            {showModalAtms&&<ModalAtms setShowModal={setShowModal} itemForModal={itemForModal}/>}
        </>
    )
}