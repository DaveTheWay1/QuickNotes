import '../../App.css';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import AuthPage from '../AuthPage/AuthPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import Notes from '../Notes/Notes';
import { useState } from 'react';
// Add the following import
import { Routes, Route } from 'react-router-dom';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import { getUser } from '../../utilities/users-service';

export default function App() {
  const [user, setUser ] = useState(getUser());
  return (
    <main className="App">
      {
        user ? 
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route path="/notes" element={<Notes user={user}/>} />
          </Routes>
        </>
        :
        <>
          <AuthPage/>
          <SignUpForm setUser={setUser}/>
          <LoginForm setUser={setUser}/>
        </>
      }
    </main>
  );
}
