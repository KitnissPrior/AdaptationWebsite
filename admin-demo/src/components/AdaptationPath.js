import React, {useState} from 'react';
import { Card, Col, Row, Table , Modal, Button} from 'antd';
import { TextField, SimpleForm, Create, Edit, List, required, Labeled, DateField,
  ReferenceField, Datagrid, EditButton, TextInput, DateInput, minValue, maxLength,
  ReferenceInput, AutocompleteInput, SimpleFormIterator, ArrayInput, 
  FunctionField, SaveButton, BooleanInput, useNotify, FormDataConsumer, WithListContext,
  useRedirect } from 'react-admin';
import { Box, Grid  } from '@mui/material';
import nextId from "react-id-generator";
import { Columns } from './TasksTable';
import { TASK_STATUS } from './TasksTable';
import { useForm } from 'react-hook-form';
import '../App.css';

const getCurrentDate = () => {
    const date = new Date();
    console.log(date);
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
};

const newTaskDefaultValues = () => (
  { id: nextId(),
    publishedAt: getCurrentDate(), 
    status: 0,
    canEmployeeAccept: false,
  });

/*export const PathCards = () => (
    <List title="Адаптационные траектории">
      <Datagrid>
      <Col span={8}>
        <Card title={<ReferenceField source="userId"
          label="Сотрудник" reference="employees" link={false}/>} 
          bordered={true}>
          <ReferenceField source="userId" label="Сотрудник" reference="employees" link={false}>
            <TextField source="job"/>
          </ReferenceField>
          <ReferenceField source="userId" label="Сотрудник" reference="employees" link={false}>
            <div>{'На адаптации с '}
              <DateField source="startDate"/>
            </div>
          </ReferenceField>
        </Card>
        </Col>
        <EditButton label="" sx={{ width: 1/3}}/>
        </Datagrid >
    </List>
    <Card  className="my-card" 
                    onClick={()=>console.log(item.tasks)} key={item.id} 
                    title={
                    <ReferenceField record={item} source="userId" label="Сотрудник" reference="employees" link={false}>
                      <TextField source="name"/>
                    </ReferenceField>} 
                      bordered={true}>
                      <ReferenceField record={item} source="userId" label="Сотрудник" reference="employees" link={false}>
                        <TextField source="job"/>
                      </ReferenceField>
                      <ReferenceField record={item} source="userId" label="Сотрудник" reference="employees" link={false}>
                        <div>{'На адаптации с '}
                          <DateField source="startDate"/>
                        </div>
                      </ReferenceField>
                      <EditButton record={item} label="Открыть" sx={{ height: 1/6}}/>
                    </Card>
  );*/

const CustomCard = ({ record }) => {
  const redirect = useRedirect();

  const handleCardClick = () => {
    redirect(`/adaptationPaths/${record.id}`);
  };

  return (
    <Card  className="my-card" 
        onClick={handleCardClick} key={record.id} 
        title={
          <ReferenceField record={record} source="userId" label="Сотрудник" reference="employees" link={false}>
            <TextField source="name"/>
          </ReferenceField>} 
        bordered={true}>
      <ReferenceField record={record} source="userId" label="Сотрудник" reference="employees" link={false}>
        <TextField source="job"/>
      </ReferenceField>
      <ReferenceField record={record} source="userId" label="Сотрудник" reference="employees" link={false}>
      <div>{'Начало адаптационного периода:'}</div>
      <DateField source="startDate"/>
      </ReferenceField>
    </Card>
  );
}

export const PathCards = () => {
  
  
  return (
    <List title="Адаптационные траектории" sortable={false}>
      <WithListContext render={({ data }) => (
            <Grid container spacing={10} sx={{ padding: 10 }}>
                {data?.map(item => (
                  <Col span={8}>
                  <CustomCard record={item}/>
                  </Col>
                ))}
            </Grid>
        )} />
  </List>
  );
}

export const CreatePath = () => (
  <Create title="Создать траекторию">
      <SimpleForm>
        <Labeled title="ФИО сотрудника">
          <ReferenceInput source="userId" reference="employees" label="Имя сотрудника">
            <AutocompleteInput label="Имя сотрудника" validate={[required()]}/>
          </ReferenceInput>
        </Labeled>

        <ArrayInput source="tasks" label="Список задач">
          <SimpleFormIterator defaultValues={newTaskDefaultValues}>
            <TextInput source="title" label='Название' 
              validate={[required(), maxLength(127,'Максимальная длина названия 127 символов')]}/>
            <TextInput multiline source="body" label='Описание' 
              validate={[maxLength(255,'Максимальная длина описания 255 символов')]}/>
            <DateInput source="deadline" label='Срок сдачи' 
              validate={[ minValue(getCurrentDate(),'Дедлайн должен быть не раньше текущей даты')]}/>
            <BooleanInput source="canEmployeeAccept" label="Сотрудник может принять задачу самостоятельно"/>
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
  </Create>
);



export const EditPath = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  //const { register, handleSubmit, setValue, getValues } = useForm();
  //const values = getValues();

  const ChangeTaskStatusButton = ({ record }) => {
    //console.log(record);

    /*const dataProvider = useDataProvider();
    const notify = useNotify();
    const refresh = useRefresh();
    const newStatus = Object.keys(TASK_STATUS).length - 1 >= record.status? record.status: record.status + 1;
   
    const handleClick = () => {
      dataProvider.update('tasks', { id: record.id, data: { status: {newStatus} } })
        .then(() => {
          notify('Field updated');
          refresh();
        })
        .catch(error => notify('Error: field not updated', 'warning'));
    };
   
    return <Button label={TASK_STATUS[newStatus]} onClick={handleClick} />;*/
    return <Button label="Принять задачу">Принять задачу</Button>
   };

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
    
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
  <Edit title="Индивидуальная траектория адаптации">
    <SimpleForm>
      <Edit title=" " redirect={false}>
        <Modal width={'60%'} title="Редактирование задач" open={isModalOpen} onOk={handleModalClose} onCancel={handleModalClose}
          okText="Ок"
          cancelText="Закрыть">
            <ArrayInput source="tasks" label=" ">
              <SimpleFormIterator defaultValues={newTaskDefaultValues} getItemLabel={index => `${index + 1}.`}>
                <FormDataConsumer>
                        {({
                            formData, // The whole form data
                            scopedFormData, // The data for this item of the ArrayInput
                            getSource, // A function to get the valid source inside an ArrayInput
                            ...rest
                        }) =>
                              <p>{TASK_STATUS[scopedFormData.status]}</p>
                          
                        }
                    </FormDataConsumer>
                
                <TextInput source="title" label='Название' fullWidth
                  validate={[required(), maxLength(127,'Максимальная длина названия 127 символов')]}/>
                <TextInput source="body" label='Описание' fullWidth
                  validate={[maxLength(255,'Максимальная длина описания 255 символов')]}/>
                <DateInput source="deadline" label='Срок сдачи'/>
                <BooleanInput source="canEmployeeAccept" label="Сотрудник может принять задачу самостоятельно"/> 
              {/* 
              <FunctionField render={record => <TextField source="status"/>}/>
              <FunctionField source="id" render={record => {
                  
                  const currentId = values.id;
                  console.log(currentId);
                  if (!record.canEmployeeAccept) 
                    return (
                    <>
                    <ChangeTaskStatusButton record={record}/>
                    <Button>Отправить на доработку</Button>
                    </>)
                }}/>
              */}
                
              </SimpleFormIterator>
            </ArrayInput>  
          <PostSaveButton/>
        </Modal>
      </Edit>
      <Box display="flex">
        <div>
          <div>
            <Labeled title="ФИО сотрудника">
            <ReferenceField source="userId" reference="employees" label="ФИО">
                <TextField source="name"/>
            </ReferenceField>
            </Labeled>
          </div>
          <div>
            <Labeled title="Должность сотрудника">
            <ReferenceField source="userId" reference="employees" label="Должность" link={false}>
              <TextField source="job"/>
            </ReferenceField>
            </Labeled>
          </div>
          <div>
            <Labeled title="Команда">
              <ReferenceField source="userId" reference="employees" label="Команда" link={false}>
                <TextField source="team"/>
              </ReferenceField>
            </Labeled>
          </div>
          <div>
            <Labeled title="Дата начала адаптационного периода">
              <ReferenceField source="userId" label="Дата начала адаптации" reference="employees" link={false}>
                <DateField source="startDate" label="Дата начала адаптации"/>
              </ReferenceField>
            </Labeled>
          </div>
        </div>
        <div style={{ marginLeft: '10%', float:'right' }}>
          <div style={{ float:'right' }}>
            <Button type="primary" onClick={showModal}>Редактировать задачи</Button>
          </div>
          <h3 style={{ textAlign: 'center' }}>Список задач</h3>
          <FunctionField render={record => {
            return <div><Table dataSource={record.tasks} columns={Columns} pagination={false}/></div>
            }} />
          
        </div>
      </Box>
      </SimpleForm>
  </Edit>
);
};
