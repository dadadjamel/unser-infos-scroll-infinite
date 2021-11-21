import logo from './logo.svg';
import './App.css';
import User from './components/User';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([])
  console.log("da");
  useEffect(() => {
    async function get_all_users(params) {
      try {
        const request = await axios.get('https://randomuser.me/api/?page=1&results=20')
        console.log('😁😁', request.data.results);
        setUsers(request.data.results)
      } catch (error) {
        console.log('error on loading data❌❌❌');
      }
    }

    get_all_users()

  }, [])
  return (
    <div className="app">
      <div className='main__leftside'>a</div>
      <div className='main__users'>
        {users.map((user, index)=>(
          <User key={index} user={user} />
        ))}
      </div>
      <div className='main__rightside'>a</div>
    </div>
  );
}

export default App;
