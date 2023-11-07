import React from 'react';

interface Props {
    username: string;
}

const HomeScreen = ({username}: Props) => {
    return username ? (
        <h1>Welcome {username}!</h1>
    ) : (
        <>
            <h1>Welcome to the Home Page!</h1>
        </>
    )
}

export default HomeScreen