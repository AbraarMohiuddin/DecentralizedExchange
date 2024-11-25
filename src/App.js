
//Main js file for the app.
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages';
import Assets from './pages/assets';
import Transaction from './pages/transaction';
import SignUp from './pages/signup';
import Trading from './pages/trading';

function App() {
  return (
    <Router>
      <Navbar />
      <TopBar text="Welcome to our app!" />

      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/assets' element={<Assets />} />
        <Route path='/trading' element={<Trading />} />
        <Route path='/transaction' element={<Transaction />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>

    </Router>
  );
}

export default App;

