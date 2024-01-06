import { Toolbar, SaveButton, useNotify, useRedirect, DeleteButton, Button, useDelete } from 'react-admin';
import { UdvCyan, UdvDarkCyan } from '../css/Colors';
import { elementUpdatedMessage, adaptationOverMessage } from './Messages';
import '../css/Common.css'


const SaveElementButton = (props) => {
    return(
        <SaveButton className='udv-save-button' label="Сохранить"
            sx={{
                color: UdvDarkCyan, 
                backgroundColor: 'white',
                borderColor: UdvDarkCyan,
                textTransform: 'none', 
                fontFamily: 'Golos, Helvetica, Arial, sans-serif',
                ':hover': {
                    color: 'rgb(255,255,255)',
                    backgroundColor: UdvCyan,
                  },
            }}
            icon={<></>} {...props}/>
    );
}

export const UdvSaveToolBar = () => {
    return(
    <Toolbar>
        <SaveElementButton/>
    </Toolbar>
    );
};

export const EditPathToolBar = (props) => <Toolbar {...props} />;
