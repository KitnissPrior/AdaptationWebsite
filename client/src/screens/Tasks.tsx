import { uploadPaths } from '../data/fetching';
import Header from '../components/Header';
import { getUser } from '../data/storage';
import React, {useCallback, useState} from 'react';
import { Collapse } from "antd";
import { Container } from 'react-bootstrap';
import {useHistory} from "react-router-dom";

// При открытии/закрытии блока задачи выводит в консоли массив,
// куда выходят открытые на данный момент блоки задач
const onChange = (key: string | string[]) => {
    console.log(key);
};

const MinigameButton: React.FC = () => {
    const history = useHistory();

    const handleButtonClick = useCallback(() => {
      history.push('/home/tasks/minigame')
    }, [history]);

    return (
        <div>
            <button onClick={handleButtonClick}>
                Мини-игра
            </button>
        </div>
    );
}

const TaskButton = React.memo((props) => {
    const [buttonText, setButtonText] = useState('Отправить на проверку');

    const handleClick = () => {
        if(buttonText === 'Отправить на проверку')
            setButtonText('На проверке');
        else {
            setButtonText('Готово');
        }
    };

    return (
        <button onClick={handleClick}>{buttonText}</button>
    );
});

const TasksList: React.FC = () => {
    try {
        const activeUser = getUser();
        const userPath = uploadPaths().find(path => path.userId == activeUser.id);
        const userTasks = userPath?.tasks;

        return (
            <Collapse defaultActiveKey={[]} onChange={onChange}>
                {userTasks && userTasks.map((task, index) =>
                    <Collapse.Panel header={task["title"]} key={index + 1}>
                        <p>{task['body']}</p>
                        <p>{task['deadline']}</p>
                        <TaskButton/>
                    </Collapse.Panel>
                )}
            </Collapse>
        );
    }
    catch {
        return (
            <div>
                <h3>Задач пока нет!</h3>
            </div>
        );
    }
};

const TasksScreen = () => {
    // через style в тэге Container реализован вертикальный слайдер
    // для списка задач TasksList
    return (
        <>
        <Header/>
            <h1>Задачи на весь период</h1>
            <Container style={{ maxHeight: '400px', overflowY: 'auto' }}>
                <TasksList/>
            </Container>
            <MinigameButton/>
        </>
    ) 
};

export default TasksScreen