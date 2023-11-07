import Header from '../components/Header';
import activeUser from './Login';
import { IEmployee } from '../data/employee';

const HomeScreen = () => {
    console.log(activeUser);
    return (
        <>
        <Header/>
            <h1>Добро пожаловать, {(activeUser as IEmployee).username}!</h1>
        </>
    ) 
}

export default HomeScreen