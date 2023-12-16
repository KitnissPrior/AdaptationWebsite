import { Menu } from 'react-admin';
import { useLocation } from 'react-router-dom';
//иконка человека
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
//иконка стрелочек
import ForkRightRoundedIcon from '@mui/icons-material/ForkRightRounded';
//иконка паззла
import ExtensionRoundedIcon from '@mui/icons-material/ExtensionRounded';
import '../css/Common.css'


export const MenuBurger = () => {
   const location = useLocation();
   const isActive = location.pathname === '/employees';

   return(
      <Menu>
         <Menu.Item to="/employees" primaryText="Сотрудники" leftIcon={<AccountCircleRoundedIcon />}/>
         <Menu.Item to="/adaptationPaths" primaryText="Адаптационные траектории" leftIcon={<ForkRightRoundedIcon />} 
         style={{ whiteSpace: 'normal' }}/>
         <Menu.Item to="/questions" primaryText="Викторина для новичков" leftIcon={<ExtensionRoundedIcon />}
         style={{ whiteSpace: 'normal' }}/>
      </Menu>
   );
};
