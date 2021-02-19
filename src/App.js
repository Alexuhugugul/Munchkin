import { Fragment } from 'react';
import Navbar from './components/NavBar'
import Home from './components/Home'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home/>
    </div>
  );
}

export default App;
