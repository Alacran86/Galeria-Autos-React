import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Old1 from './components/Old1';
import Old2 from './components/Old2';
import Sport1 from './components/Sport1';
import Sport2 from './components/Sport2';
import Sport3 from './components/Sport3';
import Sport4 from './components/Sport4';
import Navegacion from './components/Navegacion';

function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="text-center mt-3 mb-3">Galeria</h1>
      </div>
      <Route path="/old1" component={Old1} />
      <Route path="/old2" component={Old2} />
      <Route path="/sport1" component={Sport1} />
      <Route path="/sport2" component={Sport2} />
      <Route path="/sport3" component={Sport3} />
      <Route path="/sport4" component={Sport4} />

      <Navegacion/>

    </Router>
  );
}

export default App;
