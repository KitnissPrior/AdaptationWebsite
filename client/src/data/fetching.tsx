import { useState, useEffect } from 'react';

const serverAddress = 'http://localhost:5000';
const employeesPage = '/employees';
const tasksPage = '/tasks';
const pathsPage = '/adaptationPaths';
const questionsPage = '/questions';

function UploadData(page){
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        fetch(serverAddress + page)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return data;
};

export const uploadEmployees = () => UploadData(employeesPage);
export const uploadTasks = () => UploadData(tasksPage);
export const uploadPaths = () => UploadData(pathsPage);
export const uploadQuestions = () => UploadData(questionsPage);