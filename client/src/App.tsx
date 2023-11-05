import './App.css';
import { FC, useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from 'react-bootstrap';
// в package.json в dependencies - "react-router-dom": "^5.2.0"
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from './screens/HomeScreen'
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import { UploadData } from './data/fetching';
//import { EmployeeData } from './data/employee';
/*
function App() {
    const employeesList = CreateEmployeesList(UploadData());

    return (
        <Router>
            <Header />
                <main>
                    <Container>
                        <Route path={'/'} exact component={() => 
                            <HomeScreen username={'друг'} employees={employeesList}/> }/>
                        <Route path={'/signup'} component={SignupScreen}/>
                        <Route path={'/login'} component={LoginScreen}/>
                    </Container>
                </main>
            <Footer />
        </Router>
    );
}*/

const serverAddress = 'http://localhost:5000/employees';

export type IEmployee = {
    id: string;
    name: string;
    username: string;
    email: string;
    phone: number;
    job: string;
    team: string;
    password: number;
}
/*
const Counter: FC<{ 
    showReset?: boolean;
    defaultValue?: number;
    value?: number;}> = () => {

    }*/

function CreateEmployeesList({data} : any){

    console.log(typeof data[0]);

    const listItems = data !== null ? 
        data.map(({item}: any) => (
            <li>{item.name}</li>)): 
        <>Данные не загружены</>;
    return <ul>{listItems}</ul>;
};

type EmployeeData = IEmployee[];

function App() {
    const [data, setData] = useState<EmployeeData | null>(null);

    useEffect(() => {
        fetch(serverAddress, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(myJson => {
                setData(myJson);
            })
            .catch(error => {
                console.error('Error during fetch: ', error);
            });
    }, []);

    if (data!== null){
        data.forEach(element => {
            console.log(element.name);
        });
    }

    //const employeesList = CreateEmployeesList(data);

    return (
        <Router>
            <Header />
                <main>
                    <Container>
                        employeesList
                    </Container>
                </main>
            <Footer />
        </Router>
    );
}

export default App
