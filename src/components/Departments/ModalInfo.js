import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Box } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import { normDinnerTime } from '../../service/filter';
import { normWorkTime } from '../../service/filter';

export default function ModalInfo({itemForModal, setShowModal}) {
  const handleClose = () => {
    setShowModal(false)
  };
  const workTime= itemForModal.info_worktime.split('|');


  return (
    <div>
      <Dialog
        open={true}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle sx={{color: '#3a9b00'}} id="alert-dialog-title">
          {itemForModal.street_type} {itemForModal.street} {itemForModal.home_number}
        </DialogTitle>
        <DialogContent>
        <div style={{background: `url(https://static-maps.yandex.ru/1.x/?ll=${itemForModal.GPS_Y},${itemForModal.GPS_X}&size=450,450&z=16&l=map&pt=${itemForModal.GPS_Y},${itemForModal.GPS_X})`,
            backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover' }} className="modalImage"></div>
          <Box className='box' id="alert-dialog-description">
            <div className='work-time_header'> Время работы:
                {workTime.map((item, i)=>{
                    if (i<7) {
                        return <li key={i} className='work-time'>
                            {normWorkTime(item)} 
                            {item.length>18? normDinnerTime(item)
                            : null}
                            </li>
                    }
                })}
            </div>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button sx={{color: '#3a9b00'}} onClick={handleClose} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}