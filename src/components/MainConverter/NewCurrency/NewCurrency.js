import Icon from '@mui/material/Icon';
import DialogSelect from "./AddCurrencyModal";
import './NewCurrency.sass';

export function NewCurrency ({response, addNewCurrency, mainCurrency}) {
    return (
        <div className="new-currency-block"> 
            {mainCurrency.length>10? <Icon disabled sx={{color:'#b3b3b3'}}>add_circle</Icon> 
            : 
            <DialogSelect response={response} mainCurrency={mainCurrency} addNewCurrency={addNewCurrency}/>
            }
            {mainCurrency.length>10? 
            <h6 style={{paddingTop: 0.5+'em'}}>{'Все валюты добавлены'}</h6>:
            <h6>{'Добавьте необходимую валюту'}</h6>
            }
        </div>

    )
}



