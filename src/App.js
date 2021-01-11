import './App.css';
import Cart from './cart/Cart';
import Footer from './common/footer/Footer';
import Header from './common/header/Header';
import Products from './products/Products';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Commandes from './commandes/Commandes';
function App() {
  return (
      <BrowserRouter>
        <Header />
        <Switch >
          <Route exact path="/" render={(props) => <Products {...props} />} />
          <Route path="/home" render={(props) => <Products {...props} />} />
          <Route path="/cart" render={(props) => <Cart {...props} />} />
          <Route path="/orders" render={(props) => <Commandes {...props} />} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
