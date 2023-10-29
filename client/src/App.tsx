import { useState, useEffect } from 'react';
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

const serverAddress = '../server/db.json';
//
// const App = () => {
//   const [posts, setPosts] = useState('');
//
//   useEffect(() => {
//      fetch(serverAddress)
//         .then((res) => JSON.stringify(res))
//         .then((data) => {
//            console.log(data);
//            setPosts(data);
//         })
//         .catch((err) => {
//            console.log(err.message);
//         });
//   }, []);
//
//   return (
//   <>
//     Text
//   </>);
// };

function App() {

    const [posts, setPosts] = useState('')

    // Гайдовское использование useEffect()
    // useEffect(() => {
    //     (async() => {
    //         const response = await fetch('https://localhost:5000/', {
    //             headers: { 'ContentType': 'application/json' },
    //             credentials: 'include',
    //         })
    //
    //         const data = await response.json()
    //         setUsername(data.username)
    //     })()
    // })

    useEffect(() => {
            fetch(serverAddress)
            .then((res) => JSON.stringify(res))
            .then((data) => {
                console.log(data);
                setPosts(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
        },
[]);

    return (
        <Router>
            <Header />
                <main>
                    <Container>
                        <Route path={'/'} exact component={() => <HomeScreen username={posts}/> }/>
                        <Route path={'/signup'} component={SignupScreen}/>
                        <Route path={'/login'} component={LoginScreen}/>
                    </Container>
                </main>
            <Footer />
        </Router>
    );
}

export default App
