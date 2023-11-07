import React from 'react';
import Header from '../components/Header';
import { activeUser } from './LoginScreen';

const HomeScreen = () => {
    return (
        <>
        <Header/>
            <h1>Добро пожаловать, {activeUser.username}!</h1>
        </>
    ) 
}

export default HomeScreen