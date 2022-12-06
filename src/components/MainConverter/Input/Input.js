import { TextField } from "@mui/material";
import { calculatingTerms } from '../../../service/calculatingTerms';
import './Input.sass'
export function Input (props) {
    return (
        <div className="input_block">
            <h2>{props.name}</h2>                                                  
            <TextField
                size="small"
                sx={{width: 40+'%'}}
                id={`${props.id}`} 
                value={calculatingTerms(props)} 
                onChange={(e)=>props.onChange(e, e.target.id)} 
                type="number" 
                variant="outlined" />
        </div>
    )
}