import './App.css';
import Landingpage from './components/pages/Landingpage/Landingpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WithNavbar from './components/Navbar/NavbarEnablers/WithNavbar';
import WithoutNavbar from './components/Navbar/NavbarEnablers/WithoutNavbar';
import Mentorspage from './components/pages/Mentorspage/Mentorspage';
import ReactGA from 'react-ga';


function App() {
  ReactGA.initialize(306706268)
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <Router>
      <Routes>
        <Route element={<WithoutNavbar />}>
          <Route path='/' element={<Landingpage/>}/>
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
