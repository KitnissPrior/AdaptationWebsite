import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import '../css/Profile.css';
import React from "react";

const ProfileButton: React.FC = () => {
    const history = useHistory();

    const handleButtonClick = () => {
        history.push('/home/myprofile/profile');
    };

    return (
        <div>
            <button onClick={handleButtonClick} className='profileButton'>
                Мои данные
            </button>
        </div>
    );
};

const AchievementsButton: React.FC = () => {
    const history = useHistory();

    const handleButtonClick = () => {
        history.push('/home/myprofile/achievements');
    };

    return (
        <div>
            <button onClick={handleButtonClick} className='profileButton'>
                Достижения
            </button>
        </div>
    );
};

const NotesButton: React.FC = () => {
    const history = useHistory();

    const handleButtonClick = () => {
        history.push('/home/myprofile/notes');
    };

    return (
        <div>
            <button onClick={handleButtonClick}>
                Заметки
            </button>
        </div>
    );
};

const ProfileScreen = () => {
    return (
        <body className='profileBodyContainer'>
          <div className='profile-container'>
              <div className='profileHeader'>
                  <a className='homeLogo' href={'/home'}/>
                  <a className='back-button' href={'/home'}/>
                  <div>
                      <h1 className='profileTitle'>Мой профиль</h1>
                      <h2 className='profileSubtitle'>// я - молодец :&#41;</h2>
                  </div>
              </div>
              <main className='profileMain'>
                  <Container>
                      <ProfileButton/>
                      <AchievementsButton/>
                  </Container>
              </main>
          </div>
        </body>
    ) 
};

export default ProfileScreen