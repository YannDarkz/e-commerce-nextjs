import { useCartStore } from '@/store';
import { useEffect, useState } from 'react';

export default function Checkout() {

    const cartStore = useCartStore();
    const [clientSecret, setClientSecret] = useState('');
  
    useEffect(() => {
      fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cartStore.cart,
          payment_intent_id: cartStore.paymentIntent,
        }),
      }).then((res) => { return res.json() }).then((data) => {
        cartStore.setPaymentIntent(data.paymentIntent.id);      
        setClientSecret(data.paymentIntent?.client_secret);
      });
  
    }, [cartStore, cartStore.cart, cartStore.paymentIntent]);

    return(
        <div>
            <h1>Checkout</h1>
        </div>

    )
    
}