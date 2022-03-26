import React from "react";
import {
  Redirect,
  Switch,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Order from "./pages/Order/Order";
import Layout from "./based/Layout";
import HomePage from "./pages/Home/HomePage";
import Login from "./pages/Auth/Login";
import { GlobalStyle } from "./globalStyle";
import AppProvider from "./providers/AppProviders";

const App = () => {
  return (
    <AppProvider>
      <Router>
        <GlobalStyle />
        <Switch>
          
          <Route exact path="/login" component={Login} />
          <Layout>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/order" component={Order} />
            <Route exact path="/cart" component={Cart} />
            <Redirect to="/" />
          </Layout>
        </Switch>
      </Router>
    </AppProvider>
  );
};

export default App;
