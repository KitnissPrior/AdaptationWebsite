import { useState } from 'react';
import { List, TextField, EmailField, FunctionField, EditButton, Create, Edit, SimpleForm, 
    TextInput, required,  RadioButtonGroupInput, useRecordContext, ReferenceInput, useGetList} from 'react-admin';
import { UdvDatagrid } from '../datagrids/UdvDatagrid';
import { Form, Input, InputNumber, Popconfirm, Table, Typography, Checkbox } from 'antd';
import nextId from "react-id-generator";
import PostEdit from './EditQuestionModal';
import { FavoriteBorder, Favorite } from '@mui/icons-material';
import { Radio, FormControlLabel } from '@material-ui/core';

const newQuestionDefaultValues = () => ({ id: nextId() });

export const QuestionsList = () => {
    return (
        <List title="Вопросы для викторины">
            <UdvDatagrid rowClick="edit">
              <TextField source="question" label="Вопрос"/>
              <TextField source="correctAnswer" label="Правильный ответ"/>
              <EditButton label=""/>
            </UdvDatagrid>
        </List>
    )
};
const choices = [
  { id: 'programming', name: 'Programming' },
  { id: 'marketing', name: 'Marketing' },
  { id: 'sales', name: 'Sales' },
];


export const EditQuestion = () => {
    return (
        <Edit title="Изменить вопрос">
            <SimpleForm>
            <TextInput multiline source="question" label="Вопрос"/>
            <FunctionField render={record =>{ 
              return <RadioButtonGroupInput 
                row = {false} 
                label="Ответы*"
                source = "correctAnswer"
                choices={record.answers.map(answer => ({id: answer.id, label: answer.title}))}
                optionText="label"
                optionValue="label"
              />
            }}/>
            <div>*Выделите правильный ответ</div>
            <PostEdit/>
            
            </SimpleForm>
        </Edit>
    )
};

export const CreateQuestion = () => {
    return (
        <Create title='Добавить вопрос'>
            <SimpleForm defaultValues={newQuestionDefaultValues}>
                <TextInput source="question" label="Вопрос" multiline validate={[required()]}/>
            </SimpleForm>
        </Create>
    )
};