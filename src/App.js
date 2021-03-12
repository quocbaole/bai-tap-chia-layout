import logo from './logo.svg';
import './App.css';
import Carousel from './carousel/index'
import Navbar from './navBar'
import Smartphone from './smartphone'
import Laptop from './laptop'
import Promotion from './promotion'

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Smartphone />
      <Laptop />
      <Promotion />
    </div>
  );
}

export default App;
