import { Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MainConverter } from './components/MainConverter/MainConverter';
import  Header from './components/Header/Header';
import { MainPage } from './components/MainPage/MainPage';
import { Departments } from './components/Departments/Departments';
import { Atms } from './components/Atms/Atms';
import { NewsPage } from './components/NewsPage/NewsPage';
import { SeparateNews } from './components/NewsPage/SeparateNews';
import './App.sass';





function App() {
  const [number, setNumber] = useState('');
  const [numb, setNumb] = useState('');
  useEffect(()=>setNumb(()=>window.location.href.split('=')[1]), [number])
  return (  
    <>
      <Header/>
      <Routes>
        <Route path='/BankApp' element={<MainPage setNumber={setNumber}/>}/>
        <Route path='/BankApp/converter' element={<MainConverter setNumber={setNumber}/>}/>
        <Route path='/BankApp/departments' element={<Departments/>}/>
        <Route path='/BankApp/atms' element={<Atms/>}/>
        <Route path='/BankApp/news' element={<NewsPage setNumber={setNumber}/>}/>
        <Route path={`/BankApp/news:id=${numb}`} element={<SeparateNews num={numb}/>}/>
      </Routes>
    </>
  );
}

export default App;
