import { List, TextField, EmailField, FunctionField, EditButton, Create, Edit, SimpleForm, 
    TextInput, required, number, email, DateInput, DateField, useRedirect, Button } from 'react-admin';
import { UdvDatagrid } from '../datagrids/UdvDatagrid';
import { MyCreateButton } from '../inner-components/Buttons';
import { Box } from '@mui/material';
import nextId from "react-id-generator";
import { TopBarUsersActions } from '../inner-components/ToolBarUsers';
import { UdvSaveToolBar } from '../inner-components/Buttons';
import { UdvEditIcon } from '../inner-components/Icons';
import '../App.css';
import '../css/Common.css';
import { UdvCyan } from '../css/Colors';

const newUserDefaultValues = () => ({ id: nextId() });

export const UserList = () => {
    return (
        <>
        <List title="Сотрудники" actions={false} pagination={false}>
            <TopBarUsersActions/>
            <UdvDatagrid rowClick="edit">
              <FunctionField label="ФИО" render={user => (
                    `${user.surname} ${user.name} ${user.patronymic? user.patronymic: ''}`
                )} sortable={false}
                />
              <TextField source="job" label="Должность" sortable={false}/>
              <TextField source="team" label="Команда" sortable={false}/>
              <DateField source="startDate" label="Дата начала АП" sortable={false}/>
              <FunctionField render={user => (
                user.tasksCount > 0 ? `${user.tasksDone / user.tasksCount*100}%`:'0%')} label="Прогресс"
                sortable={false}/>
              <EditButton label="" icon={<UdvEditIcon/>}/>
            </UdvDatagrid>
        </List> 
        </>
    )
};

export const EditUser = () => {
    return (
        <Edit title="Редактировать данные сотрудника">
            <SimpleForm toolbar={<UdvSaveToolBar/>}> 
                <div>Личные данные</div>
                <Box display="flex" width={'100%'} style={{gap: "10px"}}> 
                    <TextInput source="surname" label="Фамилия" validate={[required()]}/>
                    <TextInput source="name" label="Имя" validate={[required()]}/>
                    <TextInput source="patronymic" label="Отчество"/>
                </Box>
                <DateInput source="dateBirth" label="Дата рождения"/>
                <div>Рабочие данные</div>
                <Box display="flex" width={'100%'} style={{gap: "10px"}}> 
                    <TextInput source="job" label="Должность" validate={[required()]}/>
                    <TextInput source="team" label="Команда" validate={[required()]}/>
                    <TextInput source="project" label="Название проекта" validate={[required()]}/>
                </Box>
                <Box display="flex" width={'100%'} style={{gap: "10px"}}> 
                    <TextInput source="office" label="Номер кабинета"/>
                    <DateInput source="startDate" label="Дата начала АП" validate={[required()]}/>
                </Box>
                <div>Контактные данные</div>
                <Box display="flex" width={'100%'} style={{gap: "10px"}}> 
                    <TextInput source="email" label="Почта" validate={[required(), email()]}/>
                    <TextInput source="phone" label="Номер телефона" validate={[number()]}/>
                </Box>
                <TextInput source="telegram" label="Телеграм"/> 
            </SimpleForm>
        </Edit>
    )
};

export const CreateUser = () => {
    return (
        <Create title='Добавить сотрудника'>
            <SimpleForm defaultValues={newUserDefaultValues} toolbar={<UdvSaveToolBar/>}>
            <div>Личные данные</div>
                <Box display="flex" width={'100%'} style={{gap: "10px"}}> 
                    <TextInput source="surname" label="Фамилия" validate={[required()]}/>
                    <TextInput source="name" label="Имя" validate={[required()]}/>
                    <TextInput source="patronymic" label="Отчество"/>
                </Box>
                <DateInput source="dateBirth" label="Дата рождения"/>
                <div>Рабочие данные</div>
                <Box display="flex" width={'100%'} style={{gap: "10px"}}> 
                    <TextInput source="job" label="Должность" validate={[required()]}/>
                    <TextInput source="team" label="Команда" validate={[required()]}/>
                    <TextInput source="project" label="Название проекта" validate={[required()]}/>
                </Box>
                <Box display="flex" width={'100%'} style={{gap: "10px"}}> 
                    <TextInput source="office" label="Номер кабинета"/>
                    <DateInput source="startDate" label="Дата начала АП" validate={[required()]}/>
                </Box>
                <div>Контактные данные</div>
                <Box display="flex" width={'100%'} style={{gap: "10px"}}> 
                    <TextInput source="email" label="Почта" validate={[required(), email()]}/>
                    <TextInput source="phone" label="Номер телефона" validate={[number()]}/>
                </Box>
                <TextInput source="telegram" label="Телеграм"/> 
            </SimpleForm>
        </Create>
    )
};
