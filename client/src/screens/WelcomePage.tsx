import { Container, Navbar, Nav } from "react-bootstrap"
import {Link, Switch, Route, BrowserRouter as Router} from "react-router-dom";
import Header from "../components/Header"

const WelcomePageScreen = () => {
    return (
        <>
        <Header/>
            <h1>Все обо всем</h1>
            <main>
                <Container>
                    <ul>
                        <li>Коротко о главном</li>
                        <li>
                        {/*<Router>
                            <Link to="/home/welcomepage/links">Полезные ссылки</Link>
                        </Router>*/}
                        Полезные ссылки
                        </li>
                        <li>Документы и регламенты</li>
                        <li>Бонусы для сотрудников</li>
                        <li>Транспорт</li>
                        <li>Фирменный стиль</li>
                    </ul>
                </Container>
            </main>
        </>
    )
}

export default WelcomePageScreen