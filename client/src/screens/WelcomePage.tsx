import { Container } from "react-bootstrap"
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