import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login'
function App() {

  useEffect(() => {
    console.log(process.env)
  }, []);



  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
