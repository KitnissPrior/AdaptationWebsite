import Header from '../components/Header';

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