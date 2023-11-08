import { Nav } from "react-bootstrap";
import Header from "../components/Header";

const LinksScreen = () => {
    return (
        <>
        <Header/>
            <h1>Полезные ссылки</h1>
            <div>
                <Nav.Link href='https://udv.group/about/news/'>Официальный сайт UDV Group</Nav.Link>
            </div>
            <div>
                <Nav.Link href='https://t.me/udvdev'>Телеграм</Nav.Link>
            </div>
            <div>
                <Nav.Link href='https://vk.ru/udv_dev'>Группа ВКонтакте</Nav.Link>
            </div>
            <div>
                <Nav.Link href='https://t.me/udv_qna_bot'>Чат-бот по вопросам командировок</Nav.Link>
            </div>
        </>
    ) 
}

export default LinksScreen