import { useState, useEffect } from 'react';

const serverAddress = 'http://localhost:5000';
const employeesPage = '/employees';
const tasksPage = '/tasks';
const pathsPage = '/adaptationPaths';
const questionsPage = '/questions';

function UploadData (page) {
    const [error, setError] = useState(null);
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(serverAddress + page);
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, [page]);

    if (error) {
        return (
            <div>Error: {error.message}</div>
        );
    }

    return data;
}

export const uploadEmployees = () => UploadData(employeesPage);
export const uploadTasks = () => UploadData(tasksPage);
export const uploadPaths = () => UploadData(pathsPage);
export const uploadQuestions = () => UploadData(questionsPage);