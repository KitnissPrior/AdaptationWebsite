import { Toolbar, SaveButton, useNotify, useRedirect, DeleteButton } from 'react-admin';
import { UdvCyan, UdvDarkCyan } from '../css/Colors';
import { elementUpdatedMessage, adaptationOverMessage } from './Messages';
import '../css/Common.css'

const DeleteCardButton = (props) => {
    const notify = useNotify();
    const redirect = useRedirect();

      const onSuccess = data => {
          notify(adaptationOverMessage);
          redirect('/adaptationPaths');
      };
      
    return (
      <DeleteButton label="Завершить адаптацию" icon={<></>}
        mutationOptions={ {onSuccess}}
        sx={{
          backgroundColor: 'white', 
          color: UdvDarkCyan, 
          borderColor: UdvDarkCyan,
          textTransform: 'none', 
          fontFamily: 'Golos, Helvetica, Arial, sans-serif',
          ':hover': {
            backgroundColor: UdvCyan,
            color: 'black',
          },
        }} {...props}/>
    );
};

const SaveElementButton = () => {
    const notify = useNotify();

    return(
        <SaveButton className='udv-save-button' label="Кнопичка Сохранить"
            mutationOptions={{
                onSuccess: () => {
                    notify(elementUpdatedMessage);
                }}
            }
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
            icon={<></>}/>
    );
}

export const UdvSaveToolBar = () => {
    return(
    <Toolbar>
        <SaveElementButton/>
    </Toolbar>
    );
};

export const SaveCardToolBar = () => {
    return(
    <Toolbar>
        <SaveElementButton/>
        <DeleteCardButton/>
    </Toolbar>
    );
};
