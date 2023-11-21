// На доработку пойдет ещё
// Я с ума уже схожу с этого

// Лист на будущее:
// 1) Проверку на правильность
// 2) Улучшить код
// 3) Пофиксить баги, если найдутся

import React, { useState } from 'react';
import { uploadQuestions } from "../data/fetching";
import Header from "../components/Header";

const Game = () => {
    // Не уверен, насколько рабочая строчка ниже, но пускай пока будет
    const [selectedAnswer, setSelectedAnswer] = useState('');

    const questions = uploadQuestions()[0];
    console.log(questions);

    return (
        <>
            <p>{questions?.question}</p>
            {Object.keys(questions?.answers || {}).map((key) => (
                <div key={key}>
                    <input type="radio" value={selectedAnswer} onChange={e => setSelectedAnswer(e.target.value)} name="answer" />
                        {questions?.answers[key]}
                </div>
            ))}
        </>
    );
};

const MinigameScreen = () => {
    return (
        <>
            <Header/>
            <h1>Мини-игра</h1>
            <Game/>
        </>
    );
};

export default MinigameScreen