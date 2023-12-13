import { Nav } from "react-bootstrap"
import Header from "../components/Header"
import "../css/WelcomePage.css"
import React from "react";

const WelcomePageScreen = () => {
    return (
        <div className="welcomeBodyContainer">
            <div className='tasksContainer'>
                <div className="tasksHeader">
                    <a className='homeLogo' href={'/home'}/>
                    <a className='back-button' href={'/home'}/>
                    <div>
                        <h1 className='tasksTitle'>Все обо всем</h1>
                        <h2 className='tasksSubtitle'>// welcome page</h2>
                    </div>
                </div>
            <div className='info-container'>
                <div className='info-item'>
                    <ul>
                        <h2>Коротко о главном</h2>
                        <li>Первый день в компании</li>
                        <li>Пропуск, режим работы, обед</li>
                        <li>Отпуск и больничный</li>
                        <li>Адаптационный период</li>
                        <li>Дресс-код и общение</li>
                        <Nav.Link href=''>Подробнее</Nav.Link>
                    </ul>
                </div>

                <div className='info-item'>
                    <ul>
                        <h2>Коммуникации</h2>
                        <li>Электронная почта</li>
                        <li>Полезные рассылки</li>
                        <li>Корпоративная соцсеть Staff</li>
                        <li>Телефон</li>
                        <li>Telegram</li>
                        <li>Чат-бот UDV</li>
                        <Nav.Link href='/home/welcomepage/links'>Подробнее</Nav.Link>
                    </ul>
                </div>

                <div className='info-item'>
                    <ul>
                        <h2>Бонусы для сотрудников</h2>
                        <li>Обучение</li>
                        <li>Добровольное медицинское страхование</li>
                        <li>Спорт</li>
                        <li>Программа "Приведи друга"</li>
                        <li>Корпоративная валюта - U-коин</li>
                        <li>Мероприятия</li>
                        <li>Библиотека разработки</li>
                        <Nav.Link href=''>Подробнее</Nav.Link>
                    </ul>
                </div>

                <div className='info-item'>
                    <ul>
                        <h2>Документы и регламенты</h2>
                        <li>Регламент и шаблоны</li>
                        <li>Обмен документами</li>
                        <Nav.Link href=''>Подробнее</Nav.Link>
                    </ul>
                </div>

                <div className='info-item'>
                    <ul>
                        <h2>Транспорт</h2>
                        <li>Корпоративное такси и доставка</li>
                        <li>Трансфер для сотрудников</li>
                        <Nav.Link href=''>Подробнее</Nav.Link>
                    </ul>
                </div>

                <div className='info-item'>
                    <ul>
                        <h2>Фирменный стиль</h2>
                        <Nav.Link href=''>Подробнее</Nav.Link>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export default WelcomePageScreen