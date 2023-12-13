import React, { useState } from "react";
import '../css/EditProfile.css';
import {getUser} from "../data/storage";


// Это для тех полей ввода
// Вообще надо, чтобы это напрямую с данными юзера взаимодействовало
interface ProfileForm {
    firstName: string;
    lastName: string;
    middleName?: string;
    birthDate?: string;
    phoneNumber?: string;
    telegramLink?: string;
    email?: string;
    description?: string;
}

const EditProfileScreen = () => {
    const [form, setForm] = useState<ProfileForm>({
        firstName: "",
        lastName: "",
    });

    const user = getUser();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Здесь быть коду на обработку данных формы,
        // например, отправка их на сервер
    };

    return (
        <div className="editProfilleBodyContainer">
            <div className="editProfileContainer">
                <div className="editProfileHeader">
                    <a className='homeLogo' href={'/home'}/>
                    <div>
                        <h1 className='editProfileTitle'>Мои данные</h1>
                        <h2 className='editProfileSubtitle'>// кто я такой</h2>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="editProfileForm">
                    <div className="input-row">
                        <label className="input-row-label">
                            Имя
                            <input className="info-input" type="text" name="firstName"
                                value={user.name} onChange={handleInputChange} required/>
                        </label>
                        <label>
                            Фамилия
                            <input className="info-input" type="text" name="lastName"
                                value={user.name} onChange={handleInputChange} required/>
                        </label>
                    </div>
                    <div className="input-row">
                        <label>
                            Отчество
                            <input className="info-input" type="text" name="middleName"
                                value={form.middleName} onChange={handleInputChange}/>
                        </label>
                        <label>
                            Дата рождения
                            <input className="info-input" type="date" name="birthDate"
                                value={form.birthDate} onChange={handleInputChange}/>
                        </label>
                    </div>
                    <div className="input-row">
                        <label>
                            Номер телефона
                            <input className="info-input" type="text" name="phoneNumber"
                                value={user.phone} onChange={handleInputChange}/>
                        </label>
                        <label>
                            Ссылка на телеграмм
                            <input className="info-input" type="text" name="telegramLink"
                                value={form.telegramLink} onChange={handleInputChange}/>
                        </label>
                    </div>
                    <div className="input-row">
                        <label>
                            Электронная почта
                            <input className="info-input" type="text" name="email"
                                value={user.email} onChange={handleInputChange}/>
                        </label>
                    </div>
                    <button className="save-button" type="submit">Сохранить</button>
                </form>
            </div>
        </div>
    );
}

export default EditProfileScreen