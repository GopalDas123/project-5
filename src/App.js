import './App.css';
import Navbarr from './Components/Navbar'
import gif from './Components/Business Plan.gif'

function App() {
  return (
    <div className="App">
      <Navbarr/>
      <div className="cont">
        <p>Winsure assures you the quality</p>
      <img src={gif} className="gif" alt=""/>
      </div>
    </div>
  );
}

export default App;
