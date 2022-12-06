import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Box } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import { atmsWorkTime } from '../../service/filter';
import './ModalAtms.sass';

export default function ModalAtms({itemForModal, setShowModal}) {
    console.log(itemForModal);
  const handleClose = () => {
    setShowModal(false)
  };



  return (
    <div>
      <Dialog
        open={true}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle sx={{color: '#3a9b00'}} id="alert-dialog-title">
          {itemForModal.street} {itemForModal.home_number}
        </DialogTitle>
        <DialogContent>
        <div style={{background: `url(https://static-maps.yandex.ru/1.x/?ll=${itemForModal.longitude},${itemForModal.latitude}&size=450,450&z=16&l=map&pt=${itemForModal.longitude},${itemForModal.latitude})`,
            backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover' }} className="modalImage"></div>
          <Box className='box'  id="alert-dialog-description">
            <div className="atms-content-wrapper">
                <div className="use-carts">
                    <h4>Карты:</h4>
                    {itemForModal.cards.map((item, i)=><li key={i}>{item}</li>)}
                </div>
                <div className="services">
                    <h4>Услуги:</h4>
                    {itemForModal.services.map((item, i)=><li key={i}>{item.serviceType}</li>)}
                </div>
            </div>
            <h3>Время работы:</h3>
            <div className='atms-work-time'>
                {atmsWorkTime(itemForModal.time)}
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