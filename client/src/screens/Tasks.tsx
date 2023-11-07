import Header from '../components/Header';
import activeUser from './Login';
import Footer from '../components/Footer';

const TasksScreen = () => {
    return (
        <>
        <Header/>
            <h1>Мои задачи</h1>
            <ol>
                <li>Прийти в офис</li>
                <li>Попить кофе</li>
                <li>Уйти домой</li>
            </ol>
        </>
    ) 
}

export default TasksScreen