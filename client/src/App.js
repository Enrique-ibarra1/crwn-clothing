import React, {useEffect} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import Header from './components/header/header-component';

import { connect } from 'react-redux';

import {selectCurrentUser} from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';

import {createStructuredSelector} from 'reselect';
// import UserActionTypes from './redux/user/user.types';

const App = ({checkUserSession, currentUser }) => {
  useEffect(()=> {
    checkUserSession()
  }, [checkUserSession])
    return (
      <div>
        {/* header should be outside of switch router so it is always present */}
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          {/* render = {if currentUser is recieved != null in props then Redirect to root, else if null render SignInAndSignUpPage} */}
          <Route exact path="/signin" render={() => currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage />)} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
}

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
