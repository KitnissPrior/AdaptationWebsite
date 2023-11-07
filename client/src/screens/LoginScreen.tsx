import { useState } from 'react';
import { useHistory } from "react-router-dom";
import FormContainer from "../components/FormContainer";

function LoginScreen({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin(email, password);

        history.push('/')
    };

    return (
        <FormContainer>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button type="submit">Login</button>
            </form>
        </FormContainer>
    );
}

export default LoginScreen