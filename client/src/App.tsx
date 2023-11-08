import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import HelloScreen from './screens/Hello';
import HomeScreen from "./screens/Home";
import { LoginScreen } from "./screens/Login";
import ProfileScreen from "./screens/Profile";
import EditProfileScreen from './screens/EditProfile';
import WelcomePageScreen from './screens/WelcomePage';
import TasksScreen from './screens/Tasks';
import AchievementsScreen from './screens/Achievements';
import NotesScreen from './screens/Notes';
import LinksScreen from './screens/Links';

import Footer from "./components/Footer";


function App() {
    
    return (
        <Router>
            <main>
                <Container>
                    <Route path={'/'} exact component={() => <HelloScreen/>} />
                    <Route path={'/login'} component={() => <LoginScreen/> }/>
                    <Route path={'/home'} exact component={() => <HomeScreen/>}></Route>

                    <Route path={'/home/myprofile'} component={() => <ProfileScreen/>}/>
                    <Route path={'/home/myprofile/profile'} component={() => <EditProfileScreen/>}/>
                    <Route path={'/home/myprofile/achievements'} component={() => <AchievementsScreen/>}/>
                    <Route path={'/home/myprofile/notes'} component={() => <NotesScreen/>}></Route>
                    
                    <Route path={'/home/tasks'} component={() => <TasksScreen/>}></Route>
                    <Route path={'/home/welcomepage'} component={() => <WelcomePageScreen/>}></Route>
                    <Route path={'/home/links'} component={() => <LinksScreen/>}></Route>
                </Container>
            </main>
            <Footer />
        </Router>
    );
}

export default App
