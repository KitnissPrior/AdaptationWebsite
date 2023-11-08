import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className={'text-center py-3'}>UDV Group</Col>
                    <Col className={'text-center py-3'}>Legendary Team</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer