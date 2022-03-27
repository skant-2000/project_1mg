import './App.css';
import HealthChcekupCarousel from './component/landingPage/HealthChcekupCarousel';
import SaleCarousel from './component/landingPage/SaleCarousel';

function App() {
  return (
    <div className="App">
      <SaleCarousel />
      <HealthChcekupCarousel />
    </div>
  );
}

export default App;
