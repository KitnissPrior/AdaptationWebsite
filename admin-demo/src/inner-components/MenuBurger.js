import { Menu } from 'react-admin';
//иконка человека
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
//иконка стрелочек
import ForkRightRoundedIcon from '@mui/icons-material/ForkRightRounded';
//иконка паззла
import ExtensionRoundedIcon from '@mui/icons-material/ExtensionRounded';
//иконка медальки
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

export const MenuBurger = () => (
   <Menu>
       <Menu.Item to="/employees" primaryText="Сотрудники" leftIcon={<AccountCircleRoundedIcon />}/>
       <Menu.Item to="/adaptationPaths" primaryText="Адаптационные траектории" leftIcon={<ForkRightRoundedIcon />} 
        style={{ whiteSpace: 'normal' }}/>
       <Menu.Item to="/questions" primaryText="Викторина для новичков" leftIcon={<ExtensionRoundedIcon />}
        style={{ whiteSpace: 'normal' }}/>
   </Menu>
);
