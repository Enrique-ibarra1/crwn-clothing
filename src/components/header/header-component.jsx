import React from 'react'
import {ReactComponent as Logo} from '../../assets/crown.svg'
// import {auth} from '../../firebase/firebase.utils';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selector';
import { signOutStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';

const Header = ({currentUser, hidden, signOutStart}) => {
    return (
        <HeaderContainer>
            <LogoContainer  to="/">
                <Logo className="logo" />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink  to="/shop">SHOP</OptionLink>
                <OptionLink  to="/contact">CONTACT</OptionLink>
                    {/* sign in/sign out option */}
                    {
                        //if current user !== null, render div with sign out functional callback
                        currentUser ?
                        <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>
                        //else render link to sign in page
                        :
                        <OptionLink  to="/signin">SIGN IN</OptionLink>
                    }
                    <CartIcon />
            </OptionsContainer>
            {hidden ? null : <CartDropdown />}
        </HeaderContainer>
        
    )
}
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});
const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);
