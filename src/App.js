import './App.css';
import Home from './Components/Home';
import Add from './Components/Add';
import Navbar from './Components/Layout/Navbar';
import User from './Components/User';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/add' element={<Add />} />
          <Route exact path='/user/:id' element={<User />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;