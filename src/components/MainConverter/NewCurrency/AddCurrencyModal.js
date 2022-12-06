import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Icon from '@mui/material/Icon';
import InputLabel from '@mui/material/InputLabel';

export default function DialogSelect({mainCurrency, addNewCurrency, response}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  return (
    <div>
      <Icon onClick={handleClickOpen} sx={{color:'#3a9b00', cursor: 'pointer'}}>add_circle</Icon>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle sx={{textAlign: 'center', color: '#3a9b00'}}>Добавьте валюту</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, minWidth: 220 }}>
            <InputLabel id="demo-simple-select-label">Выбрать...</InputLabel>
              <Select
                label="Выбрать..."
                onChange={(value)=>value}>
                {mainCurrency.length>0 && response.map((item, i)=>{
                    return <MenuItem sx={{display: 'flex', justifyContent: 'center'}} onClick={()=>addNewCurrency([...mainCurrency, item])} key={i}>{item.name}</MenuItem>
                })} 
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions sx={{display: 'flex', justifyContent: 'center'}}>
          <Button sx={{color: '#3a9b00'}} onClick={handleClose}>ОК</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}