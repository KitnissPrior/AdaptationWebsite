import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useState, useEffect } from 'react';
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import Footer from "./components/Footer";


function App() {
    const [employees, setEmployees] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/employees')
            .then(response => response.json())
            .then(data => setEmployees(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const login = (email, password) => {
        const user = employees.find(
            (employee) => employee.email === email &&
                Number(employee.password) === Number(password)
        );

        if (user) {
            return user;
        } else {
            throw new Error('Invalid username or password');
        }
    }

    const handleLogin = (email, password) => {
        try {
            const user = login(email, password);
            setCurrentUser(user)
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <Router>
            <Header />
            <main>
                <Container>
                    <Route path={'/'} exact component={() => <HomeScreen username={currentUser ? currentUser.username : ''}/> }/>
                    <Route path={'/login'} component={() => <LoginScreen onLogin={handleLogin} /> }/>
                </Container>
            </main>
            <Footer />
        </Router>
    );
}

export default App
