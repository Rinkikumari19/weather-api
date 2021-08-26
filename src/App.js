import './App.css';
import Api_comp from './components/Api_comp';
import Cond_rend from './components/Cond_rend';


function App() {
  return (
    <div className="App">
      <Api_comp />
      <Cond_rend name ='nav' id = "04"/>
    </div>
  );
}

export default App;
