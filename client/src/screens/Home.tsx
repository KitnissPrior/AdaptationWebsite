import Header from '../components/Header';
import { getUser } from '../data/storage';
import '../css/Home.css';

const HomeScreen = () => {
    const user = getUser();

    return (
        <body className='homeBodyContainer'>
            <>
            <Header/>
            <div className='homeTitles'>
                <h1 className='homeTitle'>Добро пожаловать,</h1>
                <h1 className='homeTitle2'>{user.name}! </h1>
            </div>
            </>
        </body>
    ) 
}

export default HomeScreen