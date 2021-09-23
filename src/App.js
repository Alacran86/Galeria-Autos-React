import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Old1 from './components/Old1';
import Old2 from './components/Old2';
import Sport1 from './components/Sport1';
import Sport2 from './components/Sport2';
import Sport3 from './components/Sport3';
import Sport4 from './components/Sport4';

function App() {
  return (
    <Router>
      <Route path="/old1" component={Old1} />
      <Route path="/old2" component={Old2} />
      <Route path="/sport1" component={Sport1} />
      <Route path="/sport2" component={Sport2} />
      <Route path="/sport3" component={Sport3} />
      <Route path="/sport4" component={Sport4} />

    </Router>
  );
}

export default App;
