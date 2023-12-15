import { useState } from 'react';
import { List, TextField, FunctionField, EditButton, Create, Edit, SimpleForm, 
    TextInput, required,  RadioButtonGroupInput, ArrayInput, SimpleFormIterator, 
    maxLength, SaveButton, useNotify } from 'react-admin';
import { UdvDatagrid } from '../datagrids/UdvDatagrid';
import { Button, Modal } from 'antd';
import { Box } from '@mui/material';
import nextId from "react-id-generator";

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
        const onSuccess = data => {
            notify(`Post "${data.title}" saved!`);
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
                <div style={{fontSize: 16}}>Вопрос:</div>
                <TextInput multiline source="question" label=" "/>
                <div style={{fontSize: 16}}>Ответы:</div>
                <Box display="flex" width={'100%'}>                
                    <FunctionField style={{ width: '40%'}} render={record =>{ 
                        return <RadioButtonGroupInput
                            row = {false} 
                            label=" "
                            source = "correctAnswer"
                            choices={record.answers.map(answer => ({id: answer.id, label: answer.title}))}
                            optionText="label"
                            optionValue="label"
                        />
                    }}/>
                </Box>
                <div style={{fontSize: 14}}>*Выделите правильный ответ</div>
                <Button type="primary" onClick={showModal} style={{marginTop: "10px"}}>Редактировать ответы</Button>
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