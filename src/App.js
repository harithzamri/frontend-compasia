import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Product from './components/product/product'
import Order from './components/order/order'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Product} />
        <Route path='/order' exact component={Order} />
     </Switch>
    </Router>
  );
}

export default App;
