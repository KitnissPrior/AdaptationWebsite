import { useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const ButtonPageRedirect: React.FC = () => {
    const history = useHistory();
  
    const handleButtonClick = () => {
      history.push('/login');
    };
  
    return (
      <button onClick={handleButtonClick}>
        Погнали!
      </button>
    );
  };

const HelloScreen = () => {
    return (
        <>
            <h1>Привет!</h1>
            <Container>
                <div>
                    Хочешь начать свое путешествие по udv-тельной галактике?
                </div>
                <div></div>
                <ButtonPageRedirect/>
            </Container>
        </>
    )
}

export default HelloScreen