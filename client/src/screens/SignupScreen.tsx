// Не знаю, когда начнем делать регистрацию, но пускай здесь будет
// код из гайда. Если что, потом разберёмся
import {SyntheticEvent, useState} from 'react';
import FormContainer from "../components/FormContainer";
import { Form, Button } from 'react-bootstrap';
import {RouteComponentProps} from "react-router-dom";

interface Props {
    history: RouteComponentProps['history']
}

const SingupScreen = ({history}: Props) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = async(e: SyntheticEvent) => {
        e.preventDefault()

        // interact with the backend
        await fetch('http:localhost:5000/employees', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                password
            })
        })

        history.push('/login')
    }


    return (
        <FormContainer>
            <h1>Sign Up</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group className="my-3" controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="firstName" placeholder="First name"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="my-3" controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="lastName" placeholder="Last name"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="my-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="my-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="my-3">
                    Submit
                </Button>
            </Form>
        </FormContainer>
    )
}

export default SingupScreen
