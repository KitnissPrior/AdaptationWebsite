import { List, TextField, EmailField, FunctionField, EditButton, Create, Edit, SimpleForm, 
    TextInput, required, number, email, DateInput, Labeled } from 'react-admin';
import { UdvDatagrid } from '../datagrids/UdvDatagrid';
import nextId from "react-id-generator";

const newUserDefaultValues = () => ({ id: nextId() });

export const UserList = () => {
    return (
        <List title="Сотрудники">
            <UdvDatagrid rowClick="edit">
              <TextField source="Name" label="ФИО"/>
              <TextField source="Job" label="Должность"/>
              <TextField source="Team" label="Команда"/>
              <FunctionField render={user => (
                user.tasksCount > 0 ? `${user.TasksDone / user.TasksCount*100}%`:'0%')} label="Прогресс"/>
              <EmailField source="Email" label="Почта"/>
              <EditButton label=""/>
            </UdvDatagrid>
        </List>
    )
};

export const EditUser = () => {
    return (
        <Edit title="Редактировать данные сотрудника">
            <SimpleForm>
                <TextInput source="name" label="ФИО" validate={[required()]}/>
                <TextInput source="username" label="Логин" validate={[required()]}/>
                <TextInput source="job" label="Должность" validate={[required()]}/>
                <TextInput source="team" label="Команда" validate={[required()]}/>
                <TextInput source="project" label="Название проекта" validate={[required()]}/>
                <TextInput source="email" label="Почта" validate={[required(), email()]}/>
                <TextInput source="phone" label="Номер телефона" validate={[number()]}/>
                <DateInput source="startDate" label="Дата начала адаптации" validate={[required()]}/>
            </SimpleForm>
        </Edit>
    )
};

export const CreateUser = () => {
    return (
        <Create title='Добавить сотрудника'>
            <SimpleForm defaultValues={newUserDefaultValues}>
                <TextInput source="name" label="ФИО" validate={[required()]}/>
                <TextInput source="username" label="Логин" validate={[required()]}/>
                <TextInput source="job" label="Должность" validate={[required()]}/>
                <TextInput source="team" label="Команда" validate={[required()]}/>
                <TextInput source="project" label="Название проекта" validate={[required()]}/>
                <TextInput source="email" label="Почта" validate={[required(), email()]}/>
                <TextInput source="phone" label="Номер телефона" validate={[ number()]}/>
                <DateInput source="startDate" label="Дата начала адаптации" validate={[required()]}/>
            </SimpleForm>
        </Create>
    )
};
