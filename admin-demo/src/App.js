import React, {useState, useEffect} from 'react';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import jsonServerProvider from "ra-data-json-server";
import { UserList, EditUser, CreateUser } from './components/User';
import { AppLayout } from './layouts/AppLayout';
import { authProvider } from "./authProvider";
import { PathCards, EditPath, CreatePath } from './components/AdaptationPath';
import { QuestionsList, EditQuestion, CreateQuestion } from './components/QuestionsGame';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded';
//иконка кубика для вопросов к викторине (лучше заменить)
import CasinoIcon from '@mui/icons-material/Casino';
//иконка медальки для достижений (лучше заменить)
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';


const dataProvider = simpleRestProvider('http://localhost:3000');

function App() {
  return (
    <Admin dataProvider={dataProvider} layout={AppLayout}>
    <Resource name="employees" list={UserList} create = {CreateUser} edit={EditUser}
         recordRepresentation={(user) => user.name} icon={AccountCircleRoundedIcon}/>
    <Resource name="adaptationPaths" list={PathCards} create={CreatePath} edit={EditPath} icon={TimelineRoundedIcon}/>
    <Resource name="questions" list={QuestionsList} create={CreateQuestion} edit={EditQuestion} icon={CasinoIcon}/>
  </Admin>
    );
  }

export default App;
