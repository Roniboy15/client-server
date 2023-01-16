import { useState } from 'react';
import './App.css';
<<<<<<< HEAD
import { TOKEN_KEY, USER_INFO } from './constant/constant';
import { AppContext } from './context/context';
import AppRouters from './routers/appRouters';
import { apiGet } from './services/services';


function App() {
  const [user, setUser] = useState(null);
  // when user login or refresh the page get all information of user
  const getUser = async () => {
    const { data } = await apiGet(USER_INFO)
    console.log(data)
    setUser(data)
  }
// when user logout
const logout = async () => {
  localStorage.removeItem(TOKEN_KEY)
  setUser(null)
}
=======
import { AppContext } from './context/context';
import AppRouters from './routers/appRouters';


function App() {
  const [user,setUser] = useState({name:'yarin',age:25});
>>>>>>> 6d0d933e33aa0b71a0d8a7c35ddc2d2c3d52901a

  return (
    <div >
      <AppContext.Provider value={{
<<<<<<< HEAD
        setUser, user, getUser,logout
      }}>
        <AppRouters />
=======
        setUser,user
      }}>
      <AppRouters />
>>>>>>> 6d0d933e33aa0b71a0d8a7c35ddc2d2c3d52901a
      </AppContext.Provider>
    </div>
  );
}

export default App;
