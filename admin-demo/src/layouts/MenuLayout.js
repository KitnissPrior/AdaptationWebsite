import { Layout } from 'react-admin';
import { MenuBurger } from '../inner-components/MenuBurger';

export const MenuLayout = props => <Layout {...props} menu={MenuBurger} />;
