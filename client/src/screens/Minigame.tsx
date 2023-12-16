import { useState } from 'react';
import { uploadQuestions } from "../data/fetching";
import { Container } from 'react-bootstrap';
import { Button } from 'antd';
import '../css/Minigame.css'

function randomNumberBetween(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}
   
const Game = () => {
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [answerStatus, setAnswerStatus] = useState('');

    // Это чтобы убирать блок с вопросами, когда сотрудник уже ответил на вопрос
    const [isQuestionVisible, setQuestionVisible] = useState(true);

    const questions = uploadQuestions().find(quest => quest.id == 1);
    const answers = questions?.answers;
    console.log(answers);

    // Подвзяать каким-то образом isCorrect из БД
    const handleCheckAnswerButtonClick = () => {
        if(selectedAnswer == questions?.correctAnswer)
            setAnswerStatus('Правильно! Получи 1 u-coin');
        else
            setAnswerStatus(`Неверно. Правильный ответ: ${questions?.correctAnswer}`);

        //setQuestionVisible(false);
    };


    return (
        <div>
            {isQuestionVisible?
                <div className='pane-container'>
                    {/*Здесь формулировка вопроса*/}
                    <p>{questions?.question}</p>
                        {/*Здесь контейнер, который автоиматически выстраивает список ответов на выбор*/}
                        <Container>
                            {answers && answers.map((option) =>
                                <div key={option['id']}>
                                    <input type="radio" value={option['title']} onChange={e => {
                                        setSelectedAnswer(e.target.value)}} name="answer" />
                                    {option['title']}
                                </div>
                            )}
                        </Container>
                    {/*Кнопка "Проверить ответ"*/}
                    <Button onClick={handleCheckAnswerButtonClick}>Проверить ответ</Button>
                    {/*В зависимости от ответа выводит результат*/}
                    <div>{answerStatus}</div>
                </div>
                // Этот заголовок выводится в случае, если нет вопросов или они не прогрузились
            : <h3>Вопросы закончились. Приходи в другой раз!</h3>}
        </div>
    );
};

const MinigameScreen = () => {
    return (
        <div>
            <h1>Мини-игра</h1>
            <p>Как играть?</p>
            <Game/>
        </div>
    );
};

export default MinigameScreen