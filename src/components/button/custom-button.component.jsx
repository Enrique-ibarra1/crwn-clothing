import React from 'react'
import './custom-button.styles.scss'
const CustomButton = ({ children, isGoogleSignIn, inverted,...otherProps }) => {
    return (
        //if prop isGoogleSignIn is passed, classname is "google-sign-in custom-button", if not empty ''
        //same with inverted prop
        <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    );
}

export default CustomButton;
