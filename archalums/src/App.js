import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import database from './components/database';
import './App.css';

function App() {
  return (
    <div>
       <Router>
        <Route exact path="/" component={database} />
       </Router>
    </div>
  );
}

export default App;
