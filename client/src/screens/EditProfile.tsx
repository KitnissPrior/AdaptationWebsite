import activeUser from "./Login";
import { IEmployee } from "../data/employee";

const EditProfileScreen = () => {
    return (
        <>
            <h1>Профиль {(activeUser as IEmployee).username}</h1>
            <main>
                <div> ФИО: {(activeUser as IEmployee).name}</div>
                <div> Должность: {(activeUser as IEmployee).job}</div>
                <div> Название команды: {(activeUser as IEmployee).team}</div>
            </main>
        </>
    ) 
}

export default EditProfileScreen