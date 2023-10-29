import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Делал по какому-то гайду, в dependencies добавил модуль
// 'react-bootstrap' последней версии
const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className={'text-center py-3'}>Copyright &copy; GoReactAuth</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer