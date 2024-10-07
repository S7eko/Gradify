// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SessionProvider } from 'next-auth/react'; // Import the SessionProvider
import Navbar from './components/header/header';
import './App.css';
import Home from './components/Home/home';
import Challenges from './components/Challenges/challenges';
import ChallengeDetails from './components/Challenges/ChallengeDetails'; 
import Dashboard from './components/dashbord/Dashboard'; 
import LoginPage from './components/contact/logIn';
import Register from './components/contact/register';
import Footer from './components/footer/footer';

function App() {
  return (
    <SessionProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/challenges/:id" element={<ChallengeDetails />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/logIn" element={<LoginPage />} /> {/* Updated route for Login */}
            <Route path="/contact" element={<Register />} /> {/* New route for Register */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </SessionProvider>
  );
}

export default App;
