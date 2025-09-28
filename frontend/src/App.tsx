import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import IngredientList from './components/IngredientList';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/ingredients" component={IngredientList} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;