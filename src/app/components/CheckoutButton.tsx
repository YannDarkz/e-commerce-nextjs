import { formatPrice } from "@/lib/utils";
import { useCartStore } from '@/store';

export default function CheckoutButton() {

    const useStore = useCartStore();


    const totalPrice = useStore.cart.reduce((acc, item) => {
        return acc + item.price! * item.quantity!;
    }, 0)

    return (

        
        <div>
            <p className='text-teal-600 font-bold'>
                Total: {formatPrice(totalPrice)}
            </p>
            <button
                onClick={() => useStore.setCheckout('checkout')}
                className='w-full rounded-md bg-teal-600 text-white py-2 mt-2'
            >
                Finalizar Compra
            </button>
        </div>
    )


}