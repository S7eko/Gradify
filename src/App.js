// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SessionProvider } from 'next-auth/react'; // Import the SessionProvider
import Navbar from './components/header/header';
import './App.css';
import Home from './components/Home/home';

import Footer from './components/footer/footer';
import AllProjects from './components/projects/allproject';
import ProjectDetails from './components/projects/projectDetalis';
import UpLoader from './components/projects/uploade';
import Login from './components/contact/logIn'; // Import the Login component
import Register from './components/contact/RegisterPage'; // Import the Register component
import AddArticle from './components/blog/addArticle';
import BlogList from './components/blog/blogcomponent';
import BlogDetails from './components/blog/blogDetails';

function App() {
  return (
    <SessionProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AllProjects" element={<AllProjects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/Uploded" element={<UpLoader />} />
            <Route path="/login" element={<Login />} /> {/* Updated route for Login */}
            <Route path="/register" element={<Register />} />
            {/* <Route path="/addarticle" element={<AddArticle />} /> */}
            <Route path="/ShowBlog" element={<BlogList />} /> 
            <Route path="/blog/:id" element={<BlogDetails />} />
          </Routes>
        </div>
      </Router>
    </SessionProvider>
  );
}

export default App;
