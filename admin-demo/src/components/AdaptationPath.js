import React from 'react';
import { Card, Col, Row, Table } from 'antd';
import { TextField, SimpleForm, Create, Edit, List, required, Labeled, DateField,
  ReferenceField, Datagrid, EditButton, TextInput, DateInput, minValue, maxLength,
  ReferenceInput, AutocompleteInput, SimpleFormIterator, ArrayInput, 
  FunctionField, SaveButton} from 'react-admin';
import nextId from "react-id-generator";
import { Columns } from './TasksTable';

const getCurrentDate = () => {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
};

const newTaskDefaultValues = () => (
  { id: nextId(),
    publishedAt: getCurrentDate(), 
    isInProgress: true, 
    isSent: false, 
    isDone: false 
  });

export const PathCards = () => (
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
  );

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
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
  </Create>
);



export const EditPath = () => {
  return (
  <Edit title="Редактировать траекторию">
    <SimpleForm>
      <Labeled title="ФИО сотрудника">
        <ReferenceField source="userId" reference="employees" label="ФИО">
            <TextField source="name"/>
        </ReferenceField>
      </Labeled>
      <Labeled title="Должность сотрудника">
        <ReferenceField source="userId" reference="employees" label="Должность" link={false}>
          <TextField source="job"/>
        </ReferenceField>
      </Labeled>
      <Labeled title="Команда">
        <ReferenceField source="userId" reference="employees" label="Команда" link={false}>
          <TextField source="team"/>
        </ReferenceField>
      </Labeled>
      <Labeled title="Дата начала адаптационного периода">
        <ReferenceField source="userId" label="Дата начала адаптации" reference="employees" link={false}>
          <DateField source="startDate" label="Дата начала адаптации"/>
        </ReferenceField>
      </Labeled>

      <div>Список задач</div>
      <FunctionField render={record => (
        <Table dataSource={record.tasks} columns={Columns} pagination={false}/>
       )} />
      </SimpleForm>
  </Edit>
);
};
