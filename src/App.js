import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' />
        <Route path='/home' />
        <Route path='/companies' />
        <Route path='/faq' />
        <Route path='/events' />
        <Route path='/mentors' />
      </Routes>
    </Router>
  );
}

export default App;
