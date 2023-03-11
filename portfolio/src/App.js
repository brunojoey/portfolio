import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Resume from './pages/Resume';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/resume" element={<Resume />}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
