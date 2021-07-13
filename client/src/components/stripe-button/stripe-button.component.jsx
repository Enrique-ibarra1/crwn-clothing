import StripeCheckout from 'react-stripe-checkout';
import React from 'react';
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51GGAVqHuqPCHlDO6oPFJzGCznD4XSppsonjtjPYNxva1n1pYe2sKt9i2rE3OaoatpL6X9v5z2MWgnP7GWL4ZNUT600V2eu0lcd"
    

    const onToken = token => {
        //'payment is root/payment route established in server.js, axios will know this because axios is badass
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert("Payment succesful, you'll get your clothes eventually.")

        }).catch(error => {
            console.log('payment error idk', JSON.parse(error))
            alert("There was an issue in payment, please use the provided test credit card.")
        });
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
