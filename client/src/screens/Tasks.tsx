import { uploadPaths } from '../data/fetching';
import Header from '../components/Header';
import { getUser } from '../data/storage';
import React, { useState } from 'react';
import { Collapse } from "antd";
import { Container } from 'react-bootstrap';
import Minigame from "./Minigame";
import {useHistory} from "react-router-dom";
import MinigameScreen from "./Minigame";


const onChange = (key: string | string[]) => {
    console.log(key);
};

const MinigameButton: React.FC = () => {
    const history = useHistory();

    const handleButtonClick = () => {
      history.push('/home/tasks/minigame')
    };

    return (
        <div>
            <button onClick={handleButtonClick}>
                Мини-игра
            </button>
        </div>
    );
}

const TaskButton: React.FC = () => {
    const [buttonText, setButtonText] = useState('Отправить на проверку');

    const handleClick = () => {
        console.log('Вы нажали на кнопку!')
        setButtonText('Готово');
    };

    return (
        <button onClick={handleClick}>{buttonText}</button>
    );
};

const TasksList: React.FC = () => {
    try {
        const activeUser = getUser();
        const userPath = uploadPaths().find(path => path.userId == activeUser.id);
        const userTasks = userPath?.tasks;
        console.log(userTasks);

        return (
            <Collapse defaultActiveKey={[]} onChange={onChange}>
                {userTasks.map((task, index) =>
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
        console.log("Empty data got caught! Trying again...")
    }
};

const TasksScreen = () => {
    // через style в тэге Container реализован вертикальный слайдер
    // для списка задач TasksList
    return (
        <>
        <Header/>
            <h1>Мои задачи</h1>
            <Container style={{ maxHeight: '400px', overflowY: 'auto' }}>
                <TasksList/>
                <MinigameButton/>
            </Container>
        </>
    ) 
};

export default TasksScreen