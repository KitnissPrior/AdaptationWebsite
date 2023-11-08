import Header from '../components/Header';
import { getUser } from '../data/storage';

const HomeScreen = () => {
    const user = getUser();

    return (
        <>
        <Header/>
            <h1>Добро пожаловать, {user.name}!</h1>
        </>
    ) 
}

export default HomeScreen