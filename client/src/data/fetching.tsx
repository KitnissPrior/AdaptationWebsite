import { useState, useEffect } from 'react';
import { EmployeeData } from './employee';

const serverAddress = 'http://localhost:5000/employees';

export function UploadData(){
    const [data, setData] = useState<EmployeeData | null>(null);

    useEffect(() => {
        fetch(serverAddress, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(myJson => {
                setData(myJson);
            })
            .catch(error => {
                console.error('Error during fetch: ', error);
            });
    }, []);

    console.log(data);

    return data;
};