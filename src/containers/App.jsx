import React from 'react';
import { Navbar } from '../components';
import { GlobalStyle } from './globalStyle';
import { menus } from '../assets/data/menuData';
import {cart} from '../assets/data/cartData'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import { routes } from './routes';
function App() {
  const showContentMenu =(routes)=>{
    var result =null
    if(routes){
      result = routes.map((route,index)=>{
        return(
          <Route key={index} path={route.path} exact={route.exact} component={route.main}/>
        )
      })
    }
    return result
  }
  return (
    <Router >

      <GlobalStyle />
     <Navbar data={menus} cartItems={cart}/>
     <Switch>
        {showContentMenu(routes)}
     </Switch>
    </Router>
  );
}

export default App;
