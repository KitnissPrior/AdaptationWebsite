import { Nav } from "react-bootstrap";
import Header from "../components/Header";

const LinksScreen = () => {
    return (
        <>
        <Header/>
            <h1>Коммуникации</h1>
            <div>
                <Nav.Link href='https://udv.group/about/news/' target="_blank" rel="noopener noreferrer">Официальный сайт UDV Group</Nav.Link>
            </div>
            <div>
                <Nav.Link href='https://t.me/udvdev' target="_blank" rel="noopener noreferrer">Телеграм</Nav.Link>
            </div>
            <div>
                <Nav.Link href='https://vk.ru/udv_dev' target="_blank" rel="noopener noreferrer">Группа ВКонтакте</Nav.Link>
            </div>
            <div>
                <Nav.Link href='https://t.me/udv_qna_bot' target="_blank" rel="noopener noreferrer">Чат-бот по вопросам командировок</Nav.Link>
            </div>
        </>
    ) 
}

export default LinksScreen