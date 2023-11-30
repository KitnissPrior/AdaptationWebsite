import { useState } from 'react';
import { List, TextField, EmailField, FunctionField, EditButton, Create, Edit, SimpleForm, 
    TextInput, required, number, email, DateInput, Labeled, ReferenceField } from 'react-admin';
import { UdvDatagrid } from '../datagrids/UdvDatagrid';
import { Form, Input, InputNumber, Popconfirm, Table, Typography, Checkbox } from 'antd';
import nextId from "react-id-generator";

const newQuestionDefaultValues = () => ({ id: nextId() });

const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
  }) => {
    //const inputNode = inputType === 'text' ? <Checkbox/> : <Input />;
    const inputNode = <Input />;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{
              margin: 0,
            }}
            rules={[
              {
                required: true,
                message: `Поле не должно быть пустым!`,
              },
            ]}
          >
            {inputNode}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  const EditableTable = (tableData) => {
    const [form] = Form.useForm();
    const [data, setData] = useState(tableData);
    const [editingId, setEditingId] = useState('');
    const isEditing = (record) => record.id === editingId;

    const edit = (record) => {
      form.setFieldsValue({
        title: '',
        isCorrect: 'false',
        ...record,
      });
      setEditingId(record.id);
    };
    const cancel = () => {
      setEditingId('');
    };

    const save = async (id) => {
      try {
        const row = await form.validateFields();
        const newData = [...data];
        const index = newData.findIndex((item) => id === item.id);
        if (index > -1) {
          const item = newData[index];
          newData.splice(index, 1, {
            ...item,
            ...row,
          });
          setData(newData);
          setEditingId('');
        } else {
          newData.push(row);
          setData(newData);
          setEditingId('');
        }
      } catch (errInfo) {
        console.log('Ошибка валидации:', errInfo);
      }
    };
    const columns = [
      {
        title: 'Ответ',
        dataIndex: 'title',
        width: '40%',
        editable: true,
      },
      {
        title: 'Верный/неверный',
        dataIndex: 'isCorrect',
        width: '20%',
        editable: true,
      },
      {
        title: 'Действие',
        dataIndex: 'operation',
        render: (_, record) => {
          const editable = isEditing(record);
          return editable ? (
            <span>
              <Typography.Link
                onClick={() => save(record.id)}
                style={{
                  marginRight: 8,
                }}
              >
                Сохранить
              </Typography.Link>
              <Popconfirm title="Не сохранять внесенные изменения?" onConfirm={cancel}>
                <a>Отменить</a>
              </Popconfirm>
            </span>
          ) : (
            <Typography.Link disabled={editingId !== ''} onClick={() => edit(record)}>
              Изменить
            </Typography.Link>
          );
        },
      },
    ];
    const mergedColumns = columns.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record) => ({
          record,
          inputType: 'text',
          dataIndex: col.dataIndex,
          title: col.title,
          editing: isEditing(record),
        }),
      };
    });
    return (
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
        />
      </Form>
    );
  };  

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
    return (
        <Edit title="Изменить вопрос">
            <SimpleForm>
                <TextInput source="question" label="Вопрос" multiline validate={[required()]}/>
                <FunctionField render={record => EditableTable(record.answers)} />
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