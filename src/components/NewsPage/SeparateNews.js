import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { MyTheme } from "../MyTheme";

import { newsInfo } from "../../api";

export function SeparateNews({num}) {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function getNewsData() {
        const result = await newsInfo.getNewsInfo();
        if (Array.isArray(result)) {
            setNews(result);
            setIsLoading(false);
        }
      }
      useEffect(()=>{
        getNewsData()
    }, []);
    return ( 
    <div className="container_wrapper">
        <div className="container_wrapper_block"></div>
        {isLoading?
        <ThemeProvider theme={MyTheme}>
            <Box sx={{ width: '100%' }}>
                <LinearProgress color='primary'/>
            </Box>
        </ThemeProvider>
         : 
        <div className='container' dangerouslySetInnerHTML={{__html: news.length>0 && news[num].html_ru}}></div>}
    </div>
    )
}


