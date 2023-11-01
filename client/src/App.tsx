import './App.css';
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
import { EmployeeData } from './data/employee';

function CreateEmployeesList({data} : any ){
    return data != null ? 
        data.map(({item}:any) => (
            <li>
                <p>
                    <b>{item.name}:</b>
                    {' ' + item.job + ' '+ item.team}
                </p>
            </li>
            )): 
        <>Данные не загружены</>;
};

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
}

export default App
