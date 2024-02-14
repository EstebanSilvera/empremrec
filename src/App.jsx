import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './header/Header';
import Footer from './footer/Footer';
import Home from './components/Home';

function App() {

  return (
    <div>

      <Header />

      <Router>
        <Routes>
          <Route path='/' Component={Home} />
        </Routes>
      </Router>

      <Footer />
    </div>
  )
}

export default App
