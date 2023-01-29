import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import Result from './pages/Result/Result';
import Tests from './pages/Test/Tests';

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(()=>{
    if(window.sessionStorage.getItem('key') !== '123'){
      navigate('/')
    }
  },[location.pathname])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/test' element={<Tests/>}/>
        <Route path='/result' element={<Result/>}/>
      </Routes>
    </div>
  );
}

export default App;
