import { useState, memo } from 'react';
import { useHistory } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import { uploadEmployees } from '../data/fetching';
import { setUser } from '../data/storage';

export const login = (employees, email, password) => {
    const user = employees!.find(
        (employee) => employee.email === email &&
            Number(employee.password) === Number(password)
    );

    if (user) {
        return user;
    } else {
        throw new Error('Invalid username or password');
    }
};

export function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const employees = uploadEmployees();

    const handleLogin = (email, password) => {
        try {
            const user = login(employees, email, password);
            setUser(user);

        } catch(err) {
            console.log(err)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleLogin(email, password);

        history.push('/home')
    };

    return (
        <FormContainer>
            <h1>UDV Group</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Электронная почта:
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Пароль:
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                </div>
                <div>
                    <button type="submit">Войти</button>
                </div>
            </form>
        </FormContainer>
    );
}