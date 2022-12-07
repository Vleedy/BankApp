import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import { ThemeProvider } from "@mui/material";
import { newsInfo } from "../../../api";
import { MyTheme } from '../../MyTheme';
import './News.sass';


export function News ({width, setNumber}) {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [random, setRandom] = useState(0);
    
    async function getNewsInfo() {
        const resp = await  newsInfo.getNewsInfo();
        if (Array.isArray(resp)) {
            setNews(()=>resp);
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        getNewsInfo()
        setRandom(()=>(0 + (Math.random() * (19-0))).toFixed())
    }, [] )
    return (
        <div style={{height: '260px', width: width, marginTop: 0, marginBottom: '20px' }} className="news_wrapper">
            {isLoading? 
            <ThemeProvider theme={MyTheme}>
                <CircularProgress color="primary" style={{margin: '95px auto'}}/> 
            </ThemeProvider>
            : 
            <Link onClick={()=>setNumber(random)}  style={{textDecoration: 'none', color: 'white'}} to={`/BankApp/news:id=${random}`}>
                <div className="news">
                    <h3>{news.length>0&&news[random].name_ru}</h3>
                    <img className="news-img" src={news[random].img} alt="news-img"/>
            </div>
            </Link>}
        </div>
    )

}


