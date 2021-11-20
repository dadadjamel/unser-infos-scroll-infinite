import logo from './logo.svg';
import './App.css';
import User from './components/User';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    async function name(params) {
      
    }
  }, [])
  return (
    <div className="app">
      <div className='main__leftside'>a</div>
      <div className='main__users'>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
      </div>
      <div className='main__rightside'>a</div>
    </div>
  );
}

export default App;
