import { activeUser } from "./LoginScreen"

const EditProfileScreen = () => {
    return (
        <>
            <h1>Профиль {activeUser.username}</h1>
            <main>
                <div> ФИО: {activeUser.name}</div>
                <div> Должность: {activeUser.job}</div>
                <div> Название команды: {activeUser.team}</div>
            </main>
        </>
    ) 
}

export default EditProfileScreen