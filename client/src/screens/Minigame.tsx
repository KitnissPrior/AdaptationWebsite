import { useState } from 'react';
import { uploadQuestions } from "../data/fetching";
import { Container } from 'react-bootstrap';
import { Button } from 'antd';
import '../css/Minigame.css'

function randomNumberBetween(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

const throwDices = () => {
    return (
        <div>

        </div>
    );
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
                    <div className="quiz-question"><strong>{questions?.question}</strong></div>
                        {/*Здесь контейнер, который автоиматически выстраивает список ответов на выбор*/}
                        <div className='quiz-option-list'>
                            <Container>
                                {answers && answers.map((option, order) =>
                                    <div className="quiz-option-item" key={option['id']}>
                                        <span>{order + 1}. {option['title']}</span>
                                        <input className="quiz-option-item-input" type="radio" value={option['title']}
                                               onChange={e => {setSelectedAnswer(e.target.value)}} name="answer" />
                                    </div>
                                )}
                            </Container>
                        </div>
                    {/*Кнопка "Проверить ответ"*/}
                    <Button className="quiz-button-check" onClick={handleCheckAnswerButtonClick}>Проверить ответ</Button>
                    {/*В зависимости от ответа выводит результат*/}
                    <div className="quiz-answer-status">{answerStatus}</div>
                </div>
                // Этот заголовок выводится в случае, если нет вопросов или они не прогрузились
            : <h3>Вопросы закончились. Приходи в другой раз!</h3>}
        </div>
    );
};

const MinigameScreen = () => {
    return (
        <div className="body-box">
            <div className="body-box-container">
                <div className="quiz-header"><u>Как играть?</u></div>
                <Game/>
            </div>
        </div>
    );
};

export default MinigameScreen