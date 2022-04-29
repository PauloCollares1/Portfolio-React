import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// --------------------------------------------------------------//
import { Header } from './components/menu/Header';
import { Home } from './pages/home/Home';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes> 
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </BrowserRouter>
    </div>
  );
}

export default App;
