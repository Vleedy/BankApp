import { useState } from 'react';
import {News} from '../MainConverter/Content/News';
import CallMeModal from './CallMeModal';
import Success from './Success';
import './MainPage.sass';



export function MainPage ({setNumber}) {
    const [openModal, setOpenModal] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    return (
        <div className="main-page">
            <div className="left-block">
                <div className="main-page_description">
                    <h1><span>BBS</span>  - это вспомогательный сервис для клиентов "Беларусбанк".</h1>
                    <h2>Здесь вы можете:</h2>
                        <li>Воспользоваться конвертером валют</li>
                        <li>Узнать об актуальных новостях в сфере финансов</li>
                        <li>Просмотреть местоположение банкоматов и отделений банка</li>
                        <li>Узнать актуальные курсы валют для проведения обменных операций</li>
                </div>
                <div
                onClick={()=>setOpenModal(true)}
                className="main-page_image"><h2>Стань клиентом "Беларусбанк" прямо сейчас!</h2></div>
            </div>
            <div className="right-block">
                <News imgWidth={'90%'} height={'145px'} setNumber={setNumber} width={40+'%'}/>
                <News imgWidth={'90%'} height={'145px'} setNumber={setNumber}  width={40+'%'}/>
                <News imgWidth={'90%'} height={'145px'} setNumber={setNumber}  width={40+'%'}/>
                <News imgWidth={'90%'} height={'145px'} setNumber={setNumber}  width={40+'%'}/>
            </div>
            {openModal&&<CallMeModal openModal={openModal} setOpenModal={setOpenModal} setOpenAlert={setOpenAlert}/>}
            {openAlert&&<Success openAlert={openAlert} setOpenAlert={setOpenAlert}/>}
        </div>
    )
}



