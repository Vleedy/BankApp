import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ThemeProvider } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import {MyTheme} from '../MyTheme';
import {userInfo} from '../../api.js'


export default function CallMeModal({openModal, setOpenModal, setOpenAlert}) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errorName, setErrorName] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  const changeName = (e) => {
    const re = new RegExp ('[^а-яА-Я]');
    setName(()=>e.target.value);
    setIsDisable(false);
    if (re.test(e.target.value)) {
      setErrorName(true);
      setIsDisable(true);
    } else setErrorName(false);
  } 


  const changePhone = (e) => {
    const re = new RegExp ('[^0-9+]');
    setPhone(()=>e.target.value);
    setIsDisable(false);
    if (re.test(e.target.value)) {
      setErrorPhone(true);
      setIsDisable(true);
    } else setErrorPhone(false);
  } 

  const sendUserInfo = async () => {
    setIsLoading(true);
    await userInfo.postUserInfo(name, phone);
    setIsLoading(false);
    setOpenModal(false);
    setOpenAlert(true);
  }

  return (
    <div>
      <ThemeProvider theme={MyTheme}>
      <Dialog open={openModal} onClose={handleClose}>
        <DialogTitle sx={{padding: '16px 24px 10px 24px', color: '#3a9b00', margin: '0 auto'}}>Закажите обратный звонок</DialogTitle>
        <DialogContent sx={{paddingBottom: '0px'}}>
          <DialogContentText sx={{fontSize: '14px', marginBottom: '15px'}}> Наш специалист свяжжется с вами втечение 5 минут. Вы можете узнать любую информацию о предоставляемых "Беларусбанком" услугах. А так же оставить заявку на получение карты "Беларусбанк".  
          </DialogContentText>
          <TextField
            color='primary'
            margin="dense"
            id="name"
            label="Введите ваше имя"
            fullWidth
            value={name}
            onChange={(e)=>changeName(e)}
            helperText={errorName&&'Данные введены некорректно. Допускаются исключительно кириллические символы.'}
            error={errorName}
          />
          <TextField
            margin="dense"
            id="phone"
            label="Введите ваш номер телефона"
            fullWidth
            value={phone}
            onChange={(e)=>changePhone(e)}
            helperText={errorPhone&&'Данные введены некорректно. Введите номер в формате +375xxxxxxxxx'}
            error={errorPhone}
          />
        </DialogContent>
        <DialogActions>
          <Button 
          disabled={isDisable || name.length<1 || phone.length<7}
          variant='outlined' 
          sx={{margin: '0 auto', color: '#3a9b00', borderColor: '#3a9b00', '&:hover': {borderColor: '#3a9b00', background: '#3a9b0070'}}} 
          onClick={()=>sendUserInfo()}>Заказать звонок
          </Button>
        </DialogActions>
        {isLoading&&<CircularProgress sx={{margin: '10px auto'}}/>}
      </Dialog>
      </ThemeProvider>
    </div>
  );
}