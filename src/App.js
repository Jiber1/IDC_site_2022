import './App.css';
import Landing from './components/pages/Landingpage/Landingpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WithNavbar from './components/Navbar/NavbarEnablers/WithNavbar';
import WithoutNavbar from './components/Navbar/NavbarEnablers/WithoutNavbar';
import Mentorspage from './components/pages/Mentorspage/Mentorspage';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<WithoutNavbar />}>
          <Route path='/' element={<Landing />}/>
        </Route>
        <Route element={<WithNavbar />}>
          <Route path='/home'/>
        </Route>
        <Route element={<WithNavbar />}>
          <Route path='/companies'/>
        </Route>
        <Route element={<WithNavbar />}>
          <Route path='/faq'/>
        </Route>
        <Route element={<WithNavbar />}>
          <Route path='/events'/>
        </Route>
        <Route element={<WithNavbar />}>
          <Route path='/mentors' element={<Mentorspage />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
