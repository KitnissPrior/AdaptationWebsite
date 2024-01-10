import { uploadPaths } from '../data/fetching';
import { getUser } from '../data/storage';
import React, { useState, ChangeEvent } from 'react';
import { Collapse } from "antd";
import { Container } from 'react-bootstrap';
import MinigameScreen from "./Minigame";
import { getFormattedDate } from '../data/date';
import '../css/Tasks.css';

const UploadFile = () => {
    const [file, setFile] = useState<File>();

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <div>{file && `${file.name} - ${file.type}`}</div>
        </div>
    );
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
        <button className="send-task-button" onClick={handleClick}>{buttonText}</button>
    );
});

const TasksList: React.FC = () => {
    try {
        const [openPanel1, setOpenPanel1] = useState([]);
        const [openPanel2, setOpenPanel2] = useState([]);

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

        const getDeadlineDay = (deadline) => {
            const dateDeadline = new Date(deadline);

            if (dateDeadline.getDate() === today.getDate()) {
                return (
                    <div className="dl-today">
                        Дедлайн: Сегодня
                    </div>
                );
            }
            else if (dateDeadline.getDate() === tomorrow.getDate()) {
                return (
                  <div className="dl-tomorrow">
                      Дедлайн: Завтра
                  </div>
                );
            }
            else if ((dateDeadline.getDate() < today.getDate())
                && (dateDeadline.getDate() < tomorrow.getDate())) {
                return (
                    <div className="dl-late">
                        Дедлайн: Просрочено
                    </div>
                );
            }
            else if (deadline == null) {
                return (
                    <div className="dl-null">
                        Дедлайн: До конца АП
                    </div>
                );
            }
        };

        const drawTasksHeader = (task, key: string = '') => {
            if (key == 'PERIOD') {
                if (task['deadline'] == null) {
                    return (
                        <div className="task-collapse-header">
                            <div>{task["title"]}</div>
                            <div>До конца периода</div>
                        </div>
                        
                    );
                }
                const formattedDate = getFormattedDate(task['deadline']);
                return (
                    <div className="task-collapse-header">
                        <div>{task["title"]}</div>
                        <div> До {formattedDate}</div>
                    </div>
                );
            } else {
                return (
                    <div className="task-collapse-header">
                        <div>{task["title"]}</div>
                        {getDeadlineDay(task['deadline'])}
                    </div>
                );
            }
        };

        const drawTasksBody = (task) => {
            return (
                <div className="task-collapse-body">
                    <p className="task-description-header">Описание: </p>
                    <p className="task-description">
                        {task['body']}
                    </p>
                </div>
            );
        };
        const TodayTasksBlock = todayAndTomorrowTasks. length === 0? <></> : (
            <div className="tasks-set-body">
                <h1 className="box-title">Задачи на день</h1>
                        
                <Collapse className="collapse-items" defaultActiveKey={openPanel1} onChange={(key) => setOpenPanel1(key)}
                    expandIconPosition="right">
                    {todayAndTomorrowTasks && todayAndTomorrowTasks.map((task, id) =>
                    <Collapse.Panel header={drawTasksHeader(task)} key={id + 1}>
                        <div className='tasksBody'>{drawTasksBody(task)}</div>
                        <UploadFile/>
                        <TaskButton/>
                    </Collapse.Panel>
                    )}
                </Collapse>
            </div>
        );

        const PeriodTasksBlock = (
            <div className="tasks-set-body">
                <h1 className="box-title">Задачи на весь период</h1>
                <div className="collapse-items">
                    <Collapse className="collapse-items" defaultActiveKey={openPanel2} onChange={(key) => setOpenPanel2(key)}
                            expandIconPosition="right">
                        {userTasks && userTasks.map((task, id) =>
                            <Collapse.Panel header={drawTasksHeader(task, 'PERIOD')} key={id + 1}>
                                <div className='tasksBody'>{drawTasksBody(task)}</div>
                                <UploadFile/>
                                <TaskButton/>
                            </Collapse.Panel>
                        )}
                    </Collapse>
                </div>
            </div>);

        const tasksBlock = todayAndTomorrowTasks. length === 0? 
            (<div className='tasks-set-period'>
                {PeriodTasksBlock}
            </div>) :
            (<div className="tasks-set">
                {TodayTasksBlock}
                {PeriodTasksBlock}
            </div>);

        return tasksBlock;
    }
    catch {
        return (
            <div>
                <h2 className="no-tasks-title">Задач пока нет!</h2>
            </div>
        );
    }
};

const TasksScreen = () => {
    const [isPaneOpen, setIsPaneOpen] = useState(false);

    const togglePane = () => {
        setIsPaneOpen(!isPaneOpen);
    };

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
                    <div className='tasksMinigame'>
                        <MinigameScreen/>
                    </div>
                    <button className='pane-button' onClick={togglePane}>
                        Мини-игра
                    </button>
                </div>

                <Container>
                    <TasksList/>
                </Container>
            </div>
        </div>
    );
};

export default TasksScreen