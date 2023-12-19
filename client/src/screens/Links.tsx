import { Nav } from "react-bootstrap";
import React from "react";
import "../css/Links.css"


const LinksScreen = () => {
    return (
        <div className="links-body-container">
            <div className='tasksContainer'>
                <div className="tasksHeader">
                    <a className='homeLogo' href={'/home'}/>
                    <a className='back-button' href={'/home/welcomepage'}/>
                    <div>
                        <h1 className='tasksTitle'>Коммуникации</h1>
                        <h2 className='tasksSubtitle'>// welcome page</h2>
                    </div>
                </div>
            </div>

            <div className='info-container'>
                <div className="info-container-column">
                    <div className='info-item'>
                        <ul className="info-item-list">
                            <h2 className="info-item-list-title">Коммуникации</h2>
                            <li>
                                <Nav.Link href='https://udv.group/about/news/' target="_blank" rel="noopener noreferrer">Официальный сайт UDV Group</Nav.Link>
                            </li>
                            <li>
                                <Nav.Link href='https://t.me/udvdev' target="_blank" rel="noopener noreferrer">Телеграм</Nav.Link>
                            </li>
                            <li>
                                <Nav.Link href='https://vk.ru/udv_dev' target="_blank" rel="noopener noreferrer">Группа ВКонтакте</Nav.Link>
                            </li>
                            <li>
                                <Nav.Link href='https://t.me/udv_qna_bot' target="_blank" rel="noopener noreferrer">Чат-бот по вопросам командировок</Nav.Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default LinksScreen