import React from 'react'
import './custom-button.styles.scss'
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
    return (
        //if prop isGoogleSignIn is passed, classname is "google-sign-in custom-button", if not empty ''
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    );
}

export default CustomButton;
