import { useState, useEffect } from 'react'
import './App.css'
import { QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query'

const serverAddress = '../server/db.json';

const App = () => {
  const [posts, setPosts] = useState('');

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
  }, []);

  return (
  <>
    Text
  </>);
};

export default App
