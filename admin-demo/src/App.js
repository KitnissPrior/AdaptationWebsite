import React, {useState, useEffect} from 'react';
import { Admin, Resource } from 'react-admin';
import {simpleRestProvider} from 'ra-data-simple-rest';
import jsonServerProvider from "ra-data-json-server";
import { UserList, EditUser, CreateUser } from './components/User';
import { AppLayout } from './layouts/AppLayout';
import { authProvider } from "./authProvider";
import { PathCards, EditPath, CreatePath } from './components/AdaptationPath';
import { QuestionsList, EditQuestion, CreateQuestion } from './components/QuestionsGame';
import PeopleIcon from "@mui/icons-material/People";
import ArticleIcon from "@mui/icons-material/Article";



function App() {
  const [merchants, setMerchants] = useState(false);
  
    function getMerchant() {
      fetch('http://localhost:3001')
        .then(response => {
          return response.text();
        })
        .then(data => {
          setMerchants(data);
        });
    }
  
    function createMerchant() {
      let name = prompt('Enter merchant name');
      let email = prompt('Enter merchant email');
      fetch('http://localhost:3001/Employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email}),
      })
        .then(response => {
          return response.text();
        })
        .then(data => {
          alert(data);
          getMerchant();
        });
    }
  
    function deleteMerchant() {
      let id = prompt('Enter employee id');
      fetch(`http://localhost:3001/Employees/${id}`, {
        method: 'DELETE',
      })
        .then(response => {
          return response.text();
        })
        .then(data => {
          alert(data);
          getMerchant();
        });
    }
  
    function updateMerchant() {
      let id = prompt('Enter employee id');
      let name = prompt('Enter new employee name');
      let email = prompt('Enter new employee email');
      fetch(`http://localhost:3001/Employees/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email}),
      })
        .then(response => {
          return response.text();
        })
        .then(data => {
          alert(data);
          getMerchant();
        });
        console.log(merchants);
    }
  
    useEffect(() => {
      getMerchant();
    }, []);

  //const dataProvider = simpleRestProvider('http://localhost:3001');

  useEffect(() => {
    getMerchant();
  }, []);

  return (
    <div>
      {merchants ? merchants : 'Данных пока нет, но скоро будут...'}
    </div>);
  /*
 return (
    <Admin dataProvider={dataProvider} layout={AppLayout}>
      {merchants ? merchants : 'There is no merchant data available'}
     <Resource name="Employees" list={UserList} create = {createMerchant} edit={updateMerchant} delete={deleteMerchant}
        recordRepresentation={(user) => user.Name} icon={PeopleIcon}/>
      </Admin>
  );*/
};

//<Resource name="employees" list={UserList} create = {CreateUser} edit={EditUser}
 //         recordRepresentation={(user) => user.name} icon={PeopleIcon}/>
     // <Resource name="adaptationPaths" list={PathCards} create={CreatePath} edit={EditPath}/>
    //  <Resource name="questions" list={QuestionsList} create={CreateQuestion} edit={EditQuestion}/>
    //    </Admin>
/*
  function App() {
    const [merchants, setMerchants] = useState(false);
  
    function getMerchant() {
      fetch('http://localhost:3001')
        .then(response => {
          return response.text();
        })
        .then(data => {
          setMerchants(data);
        });
    }
  
    function createMerchant() {
      let name = prompt('Enter merchant name');
      let email = prompt('Enter merchant email');
      fetch('http://localhost:3001/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email}),
      })
        .then(response => {
          return response.text();
        })
        .then(data => {
          alert(data);
          getMerchant();
        });
    }
  
    function deleteMerchant() {
      let id = prompt('Enter employee id');
      fetch(`http://localhost:3001/employees/${id}`, {
        method: 'DELETE',
      })
        .then(response => {
          return response.text();
        })
        .then(data => {
          alert(data);
          getMerchant();
        });
    }
  
    function updateMerchant() {
      let id = prompt('Enter employee id');
      let name = prompt('Enter new employee name');
      let email = prompt('Enter new employee email');
      fetch(`http://localhost:3001/employees/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email}),
      })
        .then(response => {
          return response.text();
        })
        .then(data => {
          alert(data);
          getMerchant();
        });
    }
  
    useEffect(() => {
      getMerchant();
    }, []);
    return (
      <div>
        {merchants ? merchants : 'There is no employee data available'}
        <br />
        <button onClick={createMerchant}>Добавить сотрудника</button>
        <br />
        <button onClick={deleteMerchant}>Удалить сотрудника</button>
        <br />
        <button onClick={updateMerchant}>Обновить данные о сотруднике</button>
      </div>
    );
  }*/

export default App;