import Header from '../components/Header';
import activeUser from './Login';
import { IEmployee } from '../data/employee';

const HomeScreen = () => {
    return (
        <>
        <Header/>
            <h1>Добро пожаловать, {(activeUser as IEmployee).username}!</h1>
        </>
    ) 
}

export default HomeScreen