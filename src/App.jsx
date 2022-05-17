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
import Blog from "./pages/Blogs/Blog";
import Profile from "./pages/Profile/Profile";
import PaymentSuccess from "./pages/Payment/PaymentSuccess";

const App = () => {
  return (
    <AppProvider>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route
            exact
            path="/payment-success/:orderId"
            component={PaymentSuccess}
          />
          <Layout>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/order" component={Order} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/profile/:tab?" component={Profile} />

            <Redirect to="/" />
          </Layout>
        </Switch>
      </Router>
    </AppProvider>
  );
};

export default App;
