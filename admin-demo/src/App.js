import React, {useState} from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import jsonServerProvider from "ra-data-json-server";
import { UserList, EditUser, CreateUser } from './components/User';
import { AppLayout } from './layouts/AppLayout';
import { authProvider } from "./authProvider";
import { PathCards, EditPath, CreatePath } from './components/AdaptationPath';
import { QuestionsList, EditQuestion, CreateQuestion } from './components/QuestionsGame';
import PeopleIcon from "@mui/icons-material/People";
import ArticleIcon from "@mui/icons-material/Article";

const dataProvider = restProvider('http://localhost:3000');

function App() {
  return (
    <Admin dataProvider={dataProvider} layout={AppLayout}>
      <Resource name="employees" list={UserList} create = {CreateUser} edit={EditUser}
        recordRepresentation={(user) => user.name} icon={PeopleIcon}/>
      {/*<Resource name="employees" list={UserList} create = {CreateUser} edit={EditUser}
          recordRepresentation={(user) => user.name} icon={PeopleIcon}/>*/}
      <Resource name="adaptationPaths" list={PathCards} create={CreatePath} edit={EditPath}/>
      <Resource name="questions" list={QuestionsList} create={CreateQuestion} edit={EditQuestion}/>
    </Admin>
  );
  };

export default App;