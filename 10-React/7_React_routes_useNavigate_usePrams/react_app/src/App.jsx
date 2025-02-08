import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import About from './components/About';
import './App.css'
import Dashboard from './components/Dashboard';
import Courses from './components/Courses';
import Playlist from './components/Playlist';
import PageNotFound from './components/PageNotFound';
function App() {


  return (
    <>
    <header>
      <NavBar/>
    </header>
        <Routes>
          <Route path="/" element={ <Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />

             {/* Parent Route */}
         <Route path="/dashboard" element={<Dashboard />}>{/*nesting routing*/}
            {/* Nested Route */}
            <Route path="courses" element={<Courses />} />
            <Route path="playlist" element={<Playlist />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
   
    </>
  )
}

export default App
