import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks/HowItWorks';
import ThankYou from './pages/ThankYou/ThankYou';
import './App.css';
// import PersonalDiploma from './pages/ThankYou/PersonalDiploma';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/thank-you" element={<ThankYou />} />
          {/* <Route path="/personal-diploma" element={<PersonalDiploma />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
