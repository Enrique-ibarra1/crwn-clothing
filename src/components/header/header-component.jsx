import React from 'react'
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
const Header = ({currentUser}) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
                {/* sign in/sign out option */}
                {
                    //if current user !== null, render div with sign out functional callback
                    currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    //else render link to sign in page
                    :
                    <Link className="option" to="/signin">SIGN IN</Link>
                }
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});
export default connect(mapStateToProps)(Header);