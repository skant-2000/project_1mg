import './App.css';
import { FooterComponents } from './components/footer/FooterComponents';
import { Navbar } from './components/landingPage/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FooterComponents />
    </div>
  );
}

export default App;
