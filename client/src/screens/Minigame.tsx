import { useState } from 'react';
import { uploadQuestions } from "../data/fetching";
import Header from "../components/Header";
import { Container } from 'react-bootstrap';
import { Button } from 'antd';

const Game = () => {
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [answerStatus, setAnswerStatus] = useState('');

    // Это чтобы убирать блок с вопросами, когда сотрудник уже ответил на вопрос
    const [isQuestionVisible, setQuestionVisible] = useState(true);

    const questions = uploadQuestions()[0];
    console.log(questions);

    const handleCheckAnswerButtonClick = () => {
        if(selectedAnswer == questions?.correctAnswer)
            setAnswerStatus('Правильно! Получи 1 u-coin');
        else
            setAnswerStatus(`Неверно. Правильный ответ: ${questions?.correctAnswer}`);

        //setQuestionVisible(false);
    };


    return (
        <>
            {isQuestionVisible?
                <>
                    <p>{questions?.question}</p>
                        <Container>
                            {Object.keys(questions?.answers || {}).map((key) => (
                                <div key={key}>
                                    <input type="radio" value={questions?.answers[key]} onChange={e => {
                                        setSelectedAnswer(e.target.value)}} name="answer" />
                                    {questions?.answers[key]}
                                </div>
                            ))}
                        </Container>
                    <Button onClick={handleCheckAnswerButtonClick}>Проверить ответ</Button>
                    <div>{answerStatus}</div>
                </>
            : <h3>Вопросы закончились. Приходи в другой раз!</h3>}
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