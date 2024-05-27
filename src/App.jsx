import authService from './appwrite/auth';
import './App.css'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from './store/authSlice';
import { Footer, Header } from './component/index';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoding] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login(userData))
      } else{
        dispatch(logout())
      }
    })
    .finally(() => setLoding(false)) // after the all wrk is done the we set setlLoading to false
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
