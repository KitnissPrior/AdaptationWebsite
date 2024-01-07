import { useHistory } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import { uploadEmployees } from '../data/fetching';
import { setUser } from '../data/storage';
import { useForm } from "react-hook-form";
import '../css/Login.css';

export const login = (employees, username, password) => {
    const user = employees!.find(
        (employee) => employee.username === username &&
            Number(employee.password) === Number(password)
    );

    if (user) {
        return user;
    } else {
        throw new Error('Неверный логин или пароль.');
    }
};

export function LoginScreen() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();

    const employees = uploadEmployees();

    const onSubmit = (data) => {
        try {
            const user = login(employees, data.username, data.password);
            setUser(user);
            history.push('/home');
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <body className='helloLoginContainer'>
            <div className='loginContainer'>
                <div className='logoLogin'></div>
                    <FormContainer>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label className='labelLogin'>
                                    Логин:
                                    <input className='inputLogin' placeholder='///' type="text" {...register("username", { required: true, pattern: /^[A-Za-z0-9]+$/i })} />
                                    {errors.username && <p className="error-message">*Ошибка при вводе логина</p>}
                                </label>
                            </div>
                            <div>
                                <label className='labelLogin'>
                                    Пароль:
                                    <input className='inputLogin' placeholder='///' type="password" {...register("password", { required: true })} />
                                    {errors.password && <p className="error-message">**Ошибка при вводе пароля</p>}
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
