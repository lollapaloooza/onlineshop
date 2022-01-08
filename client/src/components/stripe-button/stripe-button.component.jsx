import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51Jp9jPB3cEK26jpkNtR2CIvDMuBLKFcMMfnSKOm0TVpXFHkFybrXPaOuh9sxx2fvQi4tChCe4BMbjAi1iD7ghYHF00eIPXdG48';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(res => {
            alert('Payment successful');
        }).catch(err => {
            console.log('Payment error: ', JSON.parse(err));
            alert(
                'There was an issue with your payment. Please, sure you use the provided credit card'
            );
        })

    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Ebay Shopping Ltd.'
            billingAddress
            shippingAddress
            image='https://i.pinimg.com/564x/69/b6/7e/69b67eb6e935ed50a69cbba3edcb1e8e.jpg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}/>
    )
}

export default StripeCheckoutButton;