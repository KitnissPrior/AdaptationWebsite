import { useState } from 'react';
import { List, TextField, EmailField, FunctionField, EditButton, Create, Edit, SimpleForm, 
    TextInput, required,  RadioButtonGroupInput, useRecordContext, ReferenceInput, useGetList,
    ArrayInput, SimpleFormIterator, maxLength, SaveButton, useNotify, useRedirect, useEditContext } from 'react-admin';
import { UdvDatagrid } from '../datagrids/UdvDatagrid';
//import { Form, Input, InputNumber, Popconfirm, Table, Typography, Checkbox } from 'antd';
import { Button, Modal } from 'antd';
import nextId from "react-id-generator";
import PostEdit from './EditQuestionModal';
//import { FavoriteBorder, Favorite } from '@mui/icons-material';
//import { Radio, FormControlLabel } from '@material-ui/core';

const newIdValues = () => ({ id: nextId()});
const newQuestionDefaultValues = () => ({ id: nextId()});

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

export const EditQuestion = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const PostSaveButton = () => {
        const notify = useNotify();
        const redirect = useRedirect();
        const onSuccess = data => {
            notify(`Post "${data.title}" saved!`);
            //redirect('/posts');
            setIsModalOpen(false);
        };
        return (
            <SaveButton type="button" label="Сохранить" redirect={false}/>
        );
    };

    const showModal = () => {
        setIsModalOpen(true);
    };
    
    const handleOk = () => {
        setIsModalOpen(false);
    };
    
    const handleCancel = () => {
        setIsModalOpen(false);
    };

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
                <Button type="primary" onClick={showModal}>
                    Редактировать ответы
                </Button>
                <Edit title=" " redirect={false}>
                <Modal title="Редактирование ответов" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
                    okText="Ок"
                    cancelText="Закрыть">
                    <ArrayInput source="answers" label="Ответы" validate={[maxLength(5, 'Максимальное количество ответов — 5')]}>
                        <SimpleFormIterator defaultValues={newQuestionDefaultValues}>
                            <TextInput source="title" label='Ответ' 
                                validate={[required(), maxLength(127,'Максимальная длина ответа 127 символов')]}/>
                        </SimpleFormIterator>
                    </ArrayInput>
                    <PostSaveButton/>
                </Modal>
                </Edit>
                
            </SimpleForm>
        </Edit>
    )
};

export const CreateQuestion = () => {
    return (
        <Create title='Добавить вопрос'>
            <SimpleForm defaultValues={newIdValues}>
                <TextInput source="question" label="Вопрос" multiline validate={[required()]}/>
                <ArrayInput source="answers" label="Ответы">
                    <SimpleFormIterator defaultValues={newQuestionDefaultValues}>
                        <TextInput source="title" label='Ответ' 
                            validate={[required(), maxLength(127,'Максимальная длина ответа 127 символов')]}/>
                    </SimpleFormIterator>
                </ArrayInput>
            </SimpleForm>
        </Create>
    )
};