import { useState } from 'react';
import { List, TextField, FunctionField, EditButton, Create, Edit, SimpleForm, 
    TextInput, required,  RadioButtonGroupInput, ArrayInput, SimpleFormIterator, 
    maxLength, SaveButton, useNotify, useRedirect } from 'react-admin';
import { UdvDatagrid } from '../datagrids/UdvDatagrid';
import { Button, Modal } from 'antd';
import { Box } from '@mui/material';
import { UdvSaveToolBar } from '../inner-components/Buttons';
import { UdvEditIcon, UdvLogoIcon } from '../inner-components/Icons';
import { UdvCyan, UdvDarkCyan } from '../css/Colors';
import nextId from "react-id-generator";
import '../css/Common.css';
import '../App.css';

const newIdValues = () => ({ id: nextId()});
const newQuestionDefaultValues = () => ({ id: nextId()});

export const QuestionsList = () => {
    const redirect = useRedirect();

  const handleCreateClick = () => {
    redirect(`/questions/create`);
  };
    return (
        <List actions={false} title={<UdvLogoIcon/>} pagination={false}>
            <Box display="flex" width={'100%'} style={{ marginBottom: '10px', marginTop: '15px', padding: '0px'}}>
                <h2 style={{ marginTop: '10px', float:'left', marginBottom: '0px', marginLeft: '20px', padding: '0px',
                fontSize: '13' }}
                    >Викторина для новичков</h2>
                <Button onClick={handleCreateClick}
                     style={{
                        float: 'righ',
                        height: 'fit-content',
                        width: 'fit-content',
                        marginRight: '0%',
                        marginLeft: '56%',
                        marginTop: '15px',
                        marginBottom: '-10px',
                        fontSize: '30',
                        color: 'rgb(14, 163, 101)',
                        borderColor: 'rgb(14, 163, 101)'
                     }}
                >Добавить вопрос</Button>
            </Box>
            <UdvDatagrid rowClick="edit">
              <TextField source="question" label="Вопрос"/>
              <TextField source="correctAnswer" label="Правильный ответ"/>
              <EditButton label="" icon={<UdvEditIcon/>}/>
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
            <SaveButton type="button" label="Сохранить" redirect={false} icon={<></>}
                sx={{
                    color: UdvDarkCyan, 
                    backgroundColor: 'white', 
                    borderColor: UdvDarkCyan, 
                    border: '3px',
                    textTransform: 'none', 
                    fontFamily: 'Golos, Helvetica, Arial, sans-serif',
                    ':hover': {
                        border: '0'
                      },
                }} />
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
        <Edit title={<UdvLogoIcon/>}>
            <h3 style={{ marginLeft: '20px', marginBottom: '-10px', marginTop: '20px' }}>Вопрос</h3>
            <SimpleForm toolbar={<UdvSaveToolBar/>}>
                <TextInput multiline source="question" label=" "/>
                <h4 style={{ marginBottom: '-2px', marginTop: '5px' }}>Ответы:</h4>
                <Box display="flex" width={'100%'}>                
                    <FunctionField style={{ width: '40%', accentColor: UdvCyan}} render={record =>{ 
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
                <Button type="primary" onClick={showModal}
                    style={{
                        color: UdvDarkCyan, 
                        backgroundColor: 'white', 
                        borderColor: UdvDarkCyan,
                        marginTop: "10px",
                        ':hover': {
                            backgroundColor: UdvCyan,
                            color: 'black',
                          },
                    }}
                    >Редактировать ответы</Button>
                <Edit title=" " redirect={false}>
                <Modal title="Редактирование ответов" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
                    width={'40%'} 
                    okText="Ок"
                    cancelText="Закрыть"
                    okButtonProps=
                    {{ style: {
                        backgroundColor: UdvCyan, 
                        } 
                    }} 
                    cancelButtonProps=
                    {{ style: { 
                        backgroundColor: 'white', 
                        color: UdvDarkCyan,  }
                    }}
                    >
                    <div style={{fontWeight: 'bold'}}>Ответы</div>
                    <ArrayInput source="answers" label="" validate={[maxLength(5, 'Максимальное количество ответов — 5')]}>
                        <SimpleFormIterator defaultValues={newQuestionDefaultValues}>
                            <TextInput source="title" label='Ответ' fullWidth
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
        <Create title={<UdvLogoIcon/>}>
            <h3 style={{ marginLeft: '20px', marginBottom: '-10px', marginTop: '20px' }}>Новый вопрос</h3>
            <SimpleForm defaultValues={newIdValues} toolbar={<UdvSaveToolBar/>}>
                <TextInput source="question" label="Вопрос" multiline validate={[required()]}/>
                <h4 style={{ marginBottom: '-2px', marginTop: '5px' }}>Ответы:</h4>
                <ArrayInput source="answers" label=" ">
                    <SimpleFormIterator defaultValues={newQuestionDefaultValues}>
                        <TextInput source="title" label='Ответ' 
                            validate={[required(), maxLength(127,'Максимальная длина ответа 127 символов')]}/>
                    </SimpleFormIterator>
                </ArrayInput>
            </SimpleForm>
        </Create>
    )
};