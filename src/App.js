import { Routes, Route} from 'react-router-dom';
import { useState} from 'react';
import { MainConverter } from './components/MainConverter/MainConverter';
import  Header from './components/Header/Header';
import { MainPage } from './components/MainPage/MainPage';
import { Departments } from './components/Departments/Departments';
import { Atms } from './components/Atms/Atms';
import { NewsPage } from './components/NewsPage/NewsPage';
import { SeparateNews } from './components/NewsPage/SeparateNews';
import './App.sass';





function App() {
  const [number, setNumber] = useState('');  /* Стейт для получения id новсти при нажатии на неё (mainpage, mainconverter, news)*/
  return (  
    <>
      <Header/>
      <Routes>
        <Route path='/BankApp' element={<MainPage setNumber={setNumber}/>}/>
        <Route path='/BankApp/converter' element={<MainConverter setNumber={setNumber}/>}/>
        <Route path='/BankApp/departments' element={<Departments/>}/>
        <Route path='/BankApp/atms' element={<Atms/>}/>
        <Route path='/BankApp/news' element={<NewsPage setNumber={setNumber}/>}/>
        <Route path={`/BankApp/news/page${number}`} element={<SeparateNews num={number}/>}/>
      </Routes>
    </>
  );
}

export default App;
