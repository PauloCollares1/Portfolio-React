import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// --------------------------------------------------------------//
import { Header } from './components/menu/Header';
import { Home } from './pages/Home';




function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
