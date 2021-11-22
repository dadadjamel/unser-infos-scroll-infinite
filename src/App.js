import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import User from './components/User';
import { useEffect, useState } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

function App() {
  const [users, setUsers] = useState([])
  const [numpage, setnumpage] = useState(1)

  async function get_all_users() {
    try {
      const request = await axios.get(`https://randomuser.me/api/?page=${numpage}&results=10`)
      console.log(request.data.results);
      setUsers(users.concat(request.data.results))
    } catch (error) {
      console.log('error on loading data❌❌❌');
    }
  }

  useEffect(() => {
    // run this function each time the number of page changes
    get_all_users()
  }, [numpage])


  return (
    <div className="app">
      {/* <button onClick={() => setnumpage(e => e + 1)} >load more</button> */}
      <div className='main__leftside'></div>
      <div className='main__users'>
        <InfiniteScroll dataLength={users.length} next={() => setnumpage(e => e + 1)} hasMore={true}>
          {users?.map((user, index) => (
            <User key={index} user={user} />
          ))}
        </InfiniteScroll>
      </div>
      <div className='main__rightside'></div>
    </div>
  );
}

export default App;
