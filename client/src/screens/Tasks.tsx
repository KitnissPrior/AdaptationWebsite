import Header from '../components/Header';
import { uploadTasks } from '../data/fetching';
import { getUser } from '../data/storage';

import React, { useState } from 'react';

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
    const tasks = uploadTasks();
    const activeUser = getUser();
    const userTasks = tasks.filter((task) => task.userId == activeUser.id);

    const listItems = userTasks.map((task) => 
    <>
        <li key={task.id}>{task.title}___<TaskButton/>
        </li>
    </>);

    return(<><ol>{listItems}</ol></>);
};

const TasksScreen = () => {

    return (
        <>
        <Header/>
            <h1>Мои задачи</h1>
            <TasksList/>
        </>
    ) 
}

export default TasksScreen