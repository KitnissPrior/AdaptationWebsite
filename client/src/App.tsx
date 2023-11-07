import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import HelloScreen from './screens/HelloScreen';
import HomeScreen from "./screens/HomeScreen";
import { LoginScreen } from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import EditProfileScreen from './screens/EditProfileScreen';

import Footer from "./components/Footer";


function App() {
    
    return (
        <Router>
            <main>
                <Container>
                    <Route path={'/'} exact component={() => <HelloScreen/>} />
                    <Route path={'/login'} component={() => <LoginScreen/> }/>
                    <Route path={'/home'} component={() => <HomeScreen/>}/>
                    <Route path={'/home/myprofile'} component={() => <ProfileScreen/>}/>
                    <Route path={'/home/myprofile/profile'} component={() => <EditProfileScreen/>}/>
                </Container>
            </main>
            <Footer />
        </Router>
    );
}

export default App
