import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Success({openAlert, setOpenAlert}) {

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={()=>setOpenAlert(false)}>
        <Alert onClose={()=>setOpenAlert(false)} severity="success" sx={{ width: '100%', background: '#3a9b00' }}>
            Наш оператор свяжется с вами в ближайшее время
        </Alert>
      </Snackbar>
    </Stack>
  );
}