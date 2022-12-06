import Skeleton from '@mui/material/Skeleton';


export function CitySkeleton ({quantity, view}) {
    const array = Array(quantity).fill(0);
    return array.map((item, i)=><Skeleton key={i} sx={{
        height: '40px', 
        paddingBottom: view === 'converter' && '30px'}}/>)
}