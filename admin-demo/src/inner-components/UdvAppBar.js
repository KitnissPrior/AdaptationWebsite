import { AppBar } from 'react-admin';
import { UdvCyan } from '../css/Colors';
import '../css/Common.css'

export const UdvAppBar = () => <AppBar 
    sx={{
        backgroundColor: UdvCyan, 
        textTransform: 'none', 
        fontFamily: 'Golos, Helvetica, Arial, sans-serif',}} 
    />;