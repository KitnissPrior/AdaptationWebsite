import { List, TextField, EmailField, FunctionField, EditButton, Create, Edit, SimpleForm, 
    TextInput, required, number, email, DateInput, DateField, useRedirect, Button } from 'react-admin';
import { UdvDatagrid } from '../datagrids/UdvDatagrid';
import { Box } from '@mui/material';
import nextId from "react-id-generator";
import { TopBarUsersActions } from '../inner-components/ToolBarUsers';
import { UdvSaveToolBar } from '../inner-components/Buttons';
import { UdvEditIcon, UdvLogoIcon } from '../inner-components/Icons';
import '../App.css';
import '../css/Common.css';
import { requiredMessage } from '../inner-components/Messages';

const newUserDefaultValues = () => ({ id: nextId(), username: `user${nextId()}`, password: 12345 });

export const UserList = () => {
    return (
        <>
        <List title={<UdvLogoIcon/>} actions={false} pagination={false}>
            <Box display="flex" width={'100%'} style={{ marginBottom: '5px', marginTop: '15px', padding: '0px'}}>
                <h2 style={{ marginTop: '10px', float:'left', marginBottom: '0px', marginLeft: '20px', padding: '0px',
                fontSize: '13' }}
                    >Сотрудники</h2>
                <TopBarUsersActions/>
            </Box>
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
        <Edit title={<UdvLogoIcon/>}>
            <h3 style={{ marginLeft: '15px', marginBottom: '0px' }}>Информация о сотруднике</h3>
            <SimpleForm toolbar={<UdvSaveToolBar/>}> 
                <div className='employee-profile-title'>Личные данные</div>
                <Box display="flex" width={'100%'} style={{gap: "10px"}}> 
                    <TextInput source="surname" label="Фамилия" validate={[required(requiredMessage)]}/>
                    <TextInput source="name" label="Имя" validate={[required(requiredMessage)]}/>
                    <TextInput source="patronymic" label="Отчество"/>
                </Box>
                <DateInput source="dateBirth" label="Дата рождения"/>
                <div className='employee-profile-title'>Рабочие данные</div>
                <Box display="flex" width={'100%'} style={{gap: "10px"}}> 
                    <TextInput source="job" label="Должность" validate={[required(requiredMessage)]}/>
                    <TextInput source="team" label="Команда" validate={[required(requiredMessage)]}/>
                    <TextInput source="project" label="Название проекта" validate={[required(requiredMessage)]}/>
                </Box>
                <Box display="flex" width={'100%'} style={{gap: "10px"}}> 
                    <TextInput source="office" label="Номер кабинета"/>
                    <DateInput source="startDate" label="Дата начала АП" validate={[required(requiredMessage)]}/>
                </Box>
                <div className='employee-profile-title'>Контактные данные</div>
                <Box display="flex" width={'100%'} style={{gap: "10px"}}> 
                    <TextInput source="email" label="Почта" validate={[required(requiredMessage), email('Неверная почта')]}/>
                    <TextInput source="phone" label="Номер телефона" validate={[number('Номер телефона должен состоять из цифр')]}/>
                </Box>
                <TextInput source="telegram" label="Телеграм"/> 
            </SimpleForm>
        </Edit>
    )
};

export const CreateUser = () => {
    return (
        <Create title={<UdvLogoIcon/>}>
            <h3 style={{ marginLeft: '15px', marginBottom: '0px' }}>Добавление нового сотрудника</h3>
            <SimpleForm defaultValues={newUserDefaultValues} toolbar={<UdvSaveToolBar/>}>
            <div className='employee-profile-title'>Личные данные</div>
                <Box display="flex" width={'100%'} style={{gap: "10px"}}> 
                    <TextInput source="surname" label="Фамилия" validate={[required(requiredMessage)]}/>
                    <TextInput source="name" label="Имя" validate={[required(requiredMessage)]}/>
                    <TextInput source="patronymic" label="Отчество"/>
                </Box>
                <DateInput source="dateBirth" label="Дата рождения"/>
                <div className='employee-profile-title'>Рабочие данные</div>
                <Box display="flex" width={'100%'} style={{gap: "10px"}}> 
                    <TextInput source="job" label="Должность" validate={[required(requiredMessage)]}/>
                    <TextInput source="team" label="Команда" validate={[required(requiredMessage)]}/>
                    <TextInput source="project" label="Название проекта" validate={[required(requiredMessage)]}/>
                </Box>
                <Box display="flex" width={'100%'} style={{gap: "10px"}}> 
                    <TextInput source="office" label="Номер кабинета"/>
                    <DateInput source="startDate" label="Дата начала АП" validate={[required(requiredMessage)]}/>
                </Box>
                <div className='employee-profile-title'>Контактные данные</div>
                <Box display="flex" width={'100%'} style={{gap: "10px"}}> 
                    <TextInput source="email" label="Почта" validate={[required(requiredMessage), email('Неверная почта')]}/>
                    <TextInput source="phone" label="Номер телефона" validate={[number('Номер телефона должен состоять из цифр')]}/>
                </Box>
                <TextInput source="telegram" label="Телеграм"/> 
            </SimpleForm>
        </Create>
    )
};
