import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import Header from './components/header/header-component';

import { connect } from 'react-redux';
import {selectCurrentUser} from './redux/user/user.selector';
import {createStructuredSelector} from 'reselect';

class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    //onAuthStateChange is an observer that detects state for the users sign in state
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   //set state to the user object returned by auth
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);
    //     userRef.onSnapshot(snapShot => {
    //       setCurrentUser ({
    //           id: snapShot.id,
    //           ...snapShot.data()
    //         });
    //       });
    //     }
    //   setCurrentUser(userAuth);
    // });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/* header should be outside of switch router so it is always present */}
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          {/* render = {if currentUser is recieved != null in props then Redirect to root, else if null render SignInAndSignUpPage} */}
          <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage />)} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});


export default connect(mapStateToProps)(App);
