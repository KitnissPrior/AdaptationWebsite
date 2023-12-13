import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg={'dark'} expand={'lg'} collapseOnSelect>
            <Container>
                <Navbar.Collapse id={'basic-navbar-nav'} className='headerMenu'>
                        <Nav.Link className='homeLogo' href={'/home'}/>
                        <Nav className={'ms-auto'}>
                        {/*<Nav.Link className='headerMenuItem' href={"/home"}>Главная страница </Nav.Link>*/}
                        <Nav.Link className='headerMenuItem' href={"/home/myprofile"}>Профиль </Nav.Link>
                        <Nav.Link className='headerMenuItem' href={"/home/tasks"}>Задачи </Nav.Link>
                        <Nav.Link className='headerMenuItem' href={"/home/welcomepage"}>Все обо всем </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header