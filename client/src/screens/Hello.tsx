import { useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import '../css/HelloScreen.css';

const ButtonPageRedirect: React.FC = () => {
    const history = useHistory();
  
    const handleButtonClick = () => {
      history.push('/login');
    };
  
    return (
      <button onClick={handleButtonClick} className='helloButton'>
        Погнали!
      </button>
    );
  };

const HelloScreen = () => {
    return (
        <body className='helloBodyContainer'>
            <div className='helloContainer'>
                <div className='logoHello'></div>
                    <h1 className="helloTitle">Привет!</h1>
                    <Container>
                        <div className='subtitleHello'>
                          Хочешь начать свое путешествие по udv-тельной галактике?
                        </div>
                        <ButtonPageRedirect/>
                    </Container>
            </div>
      </body>
    )
}

export default HelloScreen