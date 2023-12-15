import { Layout } from 'react-admin';
import { MenuBurger } from '../inner-components/MenuBurger';
import { UdvAppBar } from '../inner-components/UdvAppBar';

export const MenuLayout = props => <Layout {...props} menu={MenuBurger} appBar={UdvAppBar} label="Меню"/>;
