import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hlavni from './components/Hlavni/Hlavni';
import Menu from './components/Menu/Menu';
import Adresa from './components/Adresa/Adresa';
import Sluzby from './components/Sluzby/Sluzby';
import Dotazy from './components/Dotazy/Dotazy';

function App() {
  return (
    <div className="App">
      <Header />
      <Router basename='/'>
        <Menu />
        <main className="App-main">
          <Routes>
            <Route path='/' element={<Hlavni />} />
            <Route path='/adresa' element={<Adresa />} />
            <Route path='/sluzby' element={<Sluzby />} />
            <Route path='/dotazy' element={<Dotazy />} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
