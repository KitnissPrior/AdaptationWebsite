import { uploadPaths } from '../data/fetching';
import Header from '../components/Header';
import { getUser } from '../data/storage';
import React, { useState } from 'react';
import { Collapse } from "antd";
import { Container } from 'react-bootstrap';


const onChange = (key: string | string[]) => {
    console.log(key);
};

const TaskButton: React.FC = () => {
    const [buttonText, setButtonText] = useState('Отправить на проверку');

    const handleClick = () => {
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
                    </Collapse.Panel>
                )}
            </Collapse>
        );
    }
    catch {
        console.log("Эта херня щас не заработала, но щас заработает, опа")
    }
};

const TasksScreen = () => {
    return (
        <>
        <Header/>
            <h1>Мои задачи</h1>
            <Container style={{ maxHeight: '400px', overflowY: 'auto' }}>
                <TasksList/>
            </Container>
        </>
    ) 
};

export default TasksScreen