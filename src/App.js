import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminProducts from './pages/admin/AdminProducts';
import Dashboard from './pages/admin/Dashboard';

import Login from './pages/Login'
function App() {

  useEffect(() => {
    // console.log(process.env)
  }, []);



  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin" element={<Dashboard />}>
          <Route path='products' element={<AdminProducts />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
