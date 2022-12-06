import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { newsInfo } from '../../api';
import { Button, Skeleton } from '@mui/material';
import Icon from '@mui/material/Icon';
import './NewsPage.sass';




export function NewsPage ({setNumber}) {
    const [news, setNews] = useState([]);
    const [quantity, setQuantity] = useState(3);
    const [isLoading, setIsLoading] = useState(true);

    const getNews = async () => {
        const resp = await newsInfo.getNewsInfo();
        setNews(resp);
        setIsLoading(false);
    }

    function getDocHeight() {
        var D = document;
        return Math.max(
            D.body.scrollHeight, D.documentElement.scrollHeight,
            D.body.offsetHeight, D.documentElement.offsetHeight,
            D.body.clientHeight, D.documentElement.clientHeight
        );
    }

    useEffect(()=>getNews, []);

    useEffect(()=>window.scrollTo({
        top: getDocHeight(),
        behavior: 'smooth'
    }), [quantity]);

    const onBtnMoreNews = () => {
        setQuantity(quantity=>quantity+3);
    }

    return (
        <div className="news_page">
            {isLoading? 
            <>
                <Skeleton variant="rounded" height={200} sx={{width: '90%', margin: '15px auto'}}/> 
                <Skeleton variant="rounded" height={200} sx={{width: '90%', margin: '15px auto'}}/> 
                <Skeleton variant="rounded" height={200} sx={{width: '90%', margin: '15px auto'}}/> 
            </>
            : 
            news.map((item, i)=>{
            if (i<quantity) {
                return ( 
                <Link key={i} onClick={()=>setNumber(i)} style={{textDecoration: 'none', color: 'white'}} to={`/news:id=${i}`}>
                    <div className='news_item'>
                        <img className='news_image' src={item.img} alt="news-img"/>
                        <h2>{item.name_ru}</h2>
                    </div>
                </Link>
                )
            }
            })}
            {!isLoading&&<Button variant="outlined" onClick={()=>onBtnMoreNews()} 
            sx={{width: '120px', borderColor: 'white', color: 'white', fontWeight: '300', '&:hover': {
            borderColor: 'white',
            backgroundColor: '#ffffff59',
            },}} className='moreBtn'><Icon fontSize="small" sx={{marginRight: '5px', color: 'white'}}>add_circle</Icon> ещё </Button>}
        </div>
    )
}

