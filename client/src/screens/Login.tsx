import { useState } from 'react';
import { useHistory } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import { uploadEmployees } from '../data/fetching';
import { setUser } from '../data/storage';
import '../css/Login.css';

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
        <body className='helloLoginContainer'>
            <div className='loginContainer'>
                <div className='logoLogin'></div>
                    <FormContainer>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label className='labelLogin'>
                                    Логин:
                                    <input className='inputLogin' placeholder='///' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </label>
                            </div>
                            <div>
                                <label className='labelLogin'>
                                    Пароль:
                                    <input className='inputLogin' placeholder='///' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </label>
                            </div>
                            <div>
                                <button className='buttonLogin' type="submit">Войти</button>
                            </div>
                        </form>
                    </FormContainer>
            </div>
        </body>
    );
}
