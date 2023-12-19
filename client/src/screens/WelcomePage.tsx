import { Nav } from "react-bootstrap"
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
                    <div className="info-container-column">
                        <div className='info-item'>
                            <ul className="info-item-list">
                                <h2 className="info-item-list-title">Коротко о главном</h2>
                                <li>Первый день в компании</li>
                                <li>Пропуск, режим работы, обед</li>
                                <li>Отпуск и больничный</li>
                                <li>Адаптационный период</li>
                                <li>Дресс-код и общение</li>
                                <Nav.Link href='' className="info-item-list-link">Подробнее</Nav.Link>
                            </ul>
                        </div>

                        <div className='info-item'>
                            <ul className="info-item-list">
                                <h2 className="info-item-list-title">Документы и регламенты</h2>
                                <li>Регламент и шаблоны</li>
                                <li>Обмен документами</li>
                                <Nav.Link href='' className="info-item-list-link">Подробнее</Nav.Link>
                            </ul>
                        </div>

                        <div className='info-item'>
                            <ul className="info-item-list">
                                <h2 className="info-item-list-title">Техническая поддержка</h2>
                                <Nav.Link href='' className="info-item-list-link">Подробнее</Nav.Link>
                            </ul>
                        </div>
                    </div>

                    <div className="info-container-column">
                        <div className='info-item'>
                            <ul className="info-item-list">
                                <h2 className="info-item-list-title">Коммуникации</h2>
                                <li>Электронная почта</li>
                                <li>Полезные рассылки</li>
                                <li>Корпоративная соцсеть Staff</li>
                                <li>Телефон</li>
                                <li>Telegram</li>
                                <li>Чат-бот UDV</li>
                                <Nav.Link href='/home/welcomepage/links' className="info-item-list-link">Подробнее</Nav.Link>
                            </ul>
                        </div>

                        <div className='info-item'>
                            <ul className="info-item-list">
                                <h2 className="info-item-list-title">Транспорт</h2>
                                <li>Корпоративное такси и доставка</li>
                                <li>Трансфер для сотрудников</li>
                                <Nav.Link href='' className="info-item-list-link">Подробнее</Nav.Link>
                            </ul>
                        </div>

                        <div className='info-item'>
                            <ul className="info-item-list">
                                <h2 className="info-item-list-title">Производственная безопасность</h2>
                                <Nav.Link href='' className="info-item-list-link">Подробнее</Nav.Link>
                            </ul>
                        </div>

                        <div className='info-item'>
                            <ul className="info-item-list">
                                <h2 className="info-item-list-title">Рабочая среда</h2>
                                <Nav.Link href='' className="info-item-list-link">Подробнее</Nav.Link>
                            </ul>
                        </div>
                    </div>

                    <div className="info-container-column">
                        <div className='info-item'>
                            <ul className="info-item-list">
                                <h2 className="info-item-list-title">Бонусы для сотрудников</h2>
                                <li>Обучение</li>
                                <li>Добровольное медицинское страхование</li>
                                <li>Спорт</li>
                                <li>Программа "Приведи друга"</li>
                                <li>Корпоративная валюта - U-коин</li>
                                <li>Мероприятия</li>
                                <li>Библиотека разработки</li>
                                <Nav.Link href='' className="info-item-list-link">Подробнее</Nav.Link>
                            </ul>
                        </div>

                        <div className='info-item'>
                            <ul className="info-item-list">
                                <h2 className="info-item-list-title">Фирменный стиль</h2>
                                <Nav.Link href='' className="info-item-list-link">Подробнее</Nav.Link>
                            </ul>
                        </div>

                        <div className='info-item'>
                            <ul className="info-item-list">
                                <h2 className="info-item-list-title">Научная деятельность и работа с вузами</h2>
                                <Nav.Link href='' className="info-item-list-link">Подробнее</Nav.Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomePageScreen