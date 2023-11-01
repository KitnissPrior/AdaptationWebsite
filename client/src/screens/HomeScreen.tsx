import React from 'react';
import { EmployeeData } from '../data/employee';

interface Props {
    username: string;
    employees: JSX.IntrinsicElements
}

const HomeScreen = ({username, employees}: Props) => {
    return username ? (
        <h1>Welcome {username}!</h1>
    ) : (
        <>
            <h1>Welcome to the Home Page!</h1>
            <ul>employees</ul>
        </>
    )
}

export default HomeScreen