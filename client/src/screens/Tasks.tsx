import { uploadPaths } from '../data/fetching';
import { getUser } from '../data/storage';
import React, {useCallback, useEffect, useState} from 'react';
import { Collapse } from "antd";
import { Container } from 'react-bootstrap';
import {useHistory} from "react-router-dom";
import MinigameScreen from "./Minigame";
import '../css/Tasks.css';


// При открытии/закрытии блока задачи выводит в консоли массив,
// куда выходят открытые на данный момент блоки задач
const onChange = (key: string | string[]) => {
    console.log(key);
};

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

        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        // Фильтруем задачи на сегодня и завтра
        const todayAndTomorrowTasks = userTasks?.filter(task => {
            const taskDeadline = new Date(task['deadline']);
            return taskDeadline.getDate() === today.getDate() ||
                taskDeadline.getDate() === tomorrow.getDate();
        });

        return (
            <div>
                <Collapse defaultActiveKey={[]} onChange={onChange}>
                    {todayAndTomorrowTasks && todayAndTomorrowTasks.map((task, index) =>
                        <Collapse.Panel header={task["title"]} key={index + 1}>
                            <p>{task['body']}</p>
                            <p>{task['deadline']}</p>
                            <TaskButton/>
                        </Collapse.Panel>
                    )}
                </Collapse>

                <Collapse defaultActiveKey={[]} onChange={onChange}>
                    {userTasks && userTasks.map((task, index) =>
                        <Collapse.Panel header={task["title"]} key={index + 1}>
                            <p>{task['body']}</p>
                            <p>{task['deadline']}</p>
                            <TaskButton/>
                        </Collapse.Panel>
                    )}
                </Collapse>
            </div>
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
    const [isPaneOpen, setIsPaneOpen] = useState(false);

    const togglePane = () => {
        setIsPaneOpen(!isPaneOpen);
    }

    // Попытка ресайза панели в зависимости от масштаба страницы бразуера
    useEffect(() => {
        const handleResize = () => {
            const pane = document.querySelector('.pane-body');
            const scale = window.devicePixelRatio;
            pane.style.width = (100 / scale) + '%';
        };

        window.addEventListener('resize', handleResize);

        // Удалить обработчик события при размонтировании компонента
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='tasksBodyContainer'>
            <div className='tasksContainer'>
                <div className="tasksHeader">
                    <a className='homeLogo' href={'/home'}/>
                    <a className='back-button' href={'/home'}/>
                    <div>
                        <h1 className='tasksTitle'>Задачи</h1>
                        <h2 className='tasksSubtitle'>// удачи!</h2>
                    </div>
                </div>

                <div className={`pane-body ${isPaneOpen ? 'open' : ''}`}>
                    <div>
                        <MinigameScreen/>
                    </div>
                    <button className='pane-button' onClick={togglePane}>
                        Мини-игра
                    </button>
                </div>

                <Container style={{ maxHeight: '400px', overflowY: 'auto' }}>
                    <TasksList/>
                </Container>
            </div>
        </div>
    ) 
};

export default TasksScreen