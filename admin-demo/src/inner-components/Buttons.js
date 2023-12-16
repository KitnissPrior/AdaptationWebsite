import { Toolbar, SaveButton, EditButton } from 'react-admin';
import { UdvCyan, UdvDarkCyan } from '../css/Colors';
import { UdvEditIcon } from './Icons';
import '../css/Common.css'

export const UdvSaveToolBar = () => (
    <Toolbar>
        <SaveButton className='udv-save-button' label="Сохранить" 
            sx={{
                color: UdvDarkCyan, 
                backgroundColor: 'white',
                borderColor: UdvDarkCyan,
                textTransform: 'none', 
                fontFamily: 'Golos, Helvetica, Arial, sans-serif',}}
            icon={<></>}/>
    </Toolbar>
);

export const UdvEditButton = (props) => (
    <EditButton {...props} label="" icon={<UdvEditIcon/>} 
        sx={{
            color: UdvDarkCyan,
            backgroundColor: 'white', 
            textTransform: 'none',
            fontFamily: 'Golos, Helvetica, Arial, sans-serif',
        }}/>);
