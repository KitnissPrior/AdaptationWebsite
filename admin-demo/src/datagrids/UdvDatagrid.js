import { styled } from '@mui/system';
import { Datagrid } from 'react-admin';
import { UdvCyan } from '../css/Colors';

export const UdvDatagrid = styled(Datagrid)({  
  '.RaDatagrid-headerCell': {
    backgroundColor: 'white',
    fontWeight: 'bold',
  },
  '.RaDatagrid-icon': { color: UdvCyan }
});


