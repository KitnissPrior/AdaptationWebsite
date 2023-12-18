import React from 'react';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import { UserList, EditUser, CreateUser } from './pages/User';
import { authProvider } from "./authProvider";
import { ThemeProvider } from '@mui/material/styles';
import { PathCards, EditPath, CreatePath } from './pages/AdaptationPath';
import { QuestionsList, EditQuestion, CreateQuestion } from './pages/QuestionsGame';
import { MenuLayout } from './layouts/MenuLayout';
//import

const dataProvider = simpleRestProvider('http://localhost:3000');

function App() {
  return (
      <Admin dataProvider={dataProvider} layout={MenuLayout}>
        <Resource name="employees" list={UserList} create = {CreateUser} edit={EditUser}/>
        <Resource name="adaptationPaths" list={PathCards} create={CreatePath} edit={EditPath} 
          recordRepresentation={(user) => `${user.surname} ${user.name} ${user.patronymic? user.patronymic: ''}`}/>
        <Resource name="questions" list={QuestionsList} create={CreateQuestion} edit={EditQuestion}/>
      </Admin>
    );
  }

export default App;
