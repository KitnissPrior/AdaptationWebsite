import {SyntheticEvent, useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import FormContainer from "../components/FormContainer";
import {RouteComponentProps} from "react-router-dom";

interface Props {
    history: RouteComponentProps['history']
}

const LoginScreen = ({history}: Props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = async(e: SyntheticEvent) => {
        e.preventDefault()

        await fetch('http:localhost:5000/employees', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        })

        history.push('/')
        // interact with the backened using fetch
        console.log('submited')
    }

    return (
        <FormContainer>
            <h1>Login</h1>
            <Form onSubmit={submitHandler}>
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

export default LoginScreen