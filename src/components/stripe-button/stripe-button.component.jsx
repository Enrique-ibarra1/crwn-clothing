import StripeCheckout from 'react-stripe-checkout';
import React from 'react';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const API_KEY = process.env.REACT_APP_API_KEY;
    const publishableKey = API_KEY;

    const onToken = token => {
        console.log(token);
        alert("Payment succesful, you'll get your clothes eventually.")
    }
    return (
        <StripeCheckout 
            label="Pay Now"
            name="CRWN Clothing"
            billingAddress
            shippingAddress
            image='https://sendeyo.com/en/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
            bitcoin
        />
    )
}
export default StripeCheckoutButton;
