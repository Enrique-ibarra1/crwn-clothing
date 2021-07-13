import React from 'react';
import { CustomButtonContainer } from './custom-button.styles';
const CustomButton = ({ children, ...props}) => {
    return (
        //if prop isGoogleSignIn is passed, classname is "google-sign-in custom-button", if not empty ''
        //same with inverted prop
        <CustomButtonContainer {...props}>
            {children}
        </CustomButtonContainer>
    );
}

export default CustomButton;
