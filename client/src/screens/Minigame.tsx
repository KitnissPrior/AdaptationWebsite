import { useState } from 'react';
import { uploadQuestions } from "../data/fetching";
import { Container } from 'react-bootstrap';
import { Button } from 'antd';
import '../css/Minigame.css'

const randomNumber = (min: number, max: number) => (
    Math.floor(Math.random() * (max - min + 1)) + min);

const throwDices = () => {
    return (
        <div>

        </div>
    );
}

const getRandomQuestion = () => {
    //выгружаем вопросы
    const questions = uploadQuestions();
    //достаем из массива случайный вопрос
    const question = questions[randomNumber(0, questions.length - 1)];
    return question;
}
   
const Game = () => {
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [answerStatus, setAnswerStatus] = useState('');

    // Это чтобы убирать блок с вопросами, когда сотрудник уже ответил на вопрос
    const [isQuestionVisible, setQuestionVisible] = useState(true);

    const question = uploadQuestions().find(quest => quest.id == 'id2');
    const answers = question?.answers;

    // Подвзяать каким-то образом isCorrect из БД
    const handleCheckAnswerButtonClick = () => {
        if(selectedAnswer == question?.correctAnswer)
            setAnswerStatus('Правильно! Получи 1 u-coin: http://ussc-store.ru/');
        else
            setAnswerStatus(`Неверно :(`);

        //setQuestionVisible(false);
    };


    return (
        <div>
            {isQuestionVisible?
                <div className='pane-container'>
                    {/*Здесь формулировка вопроса*/}
                    <div className="quiz-question"><strong>{question?.question}</strong></div>
                        {/*Здесь контейнер, который автоиматически выстраивает список ответов на выбор*/}
                        <div className='quiz-option-list'>
                            <Container>
                                {answers && answers.map((option, order) =>
                                    <div className="quiz-option-item" key={option['id']}>
                                    <input className="quiz-option-item-input" type="radio" value={option['title']}
                                           onChange={e => {setSelectedAnswer(e.target.value)}} name="answer" />
                                        <label htmlFor=""><span>{order + 1}. {option['title']}</span></label>
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