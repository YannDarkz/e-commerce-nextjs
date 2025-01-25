'use client'

import { formatPrice } from "@/lib/utils";
import { useCartStore } from '@/store';
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function CheckoutButton() {
    const router = useRouter();
    const { user } = useUser();
    const cartStore = useCartStore();

    const handleCheckout = async () => {
        if (!user) {
            cartStore.toggleCart();
            router.push('/sign-in');
            return;
        }
        cartStore.setCheckout('checkout');
    }


    const totalPrice = cartStore.cart.reduce((acc, item) => {
        return acc + item.price! * item.quantity!;
    }, 0)

    return (
        <div>
            <p className='text-teal-600 font-bold'>
                Total: {formatPrice(totalPrice)}
            </p>
            <button
                onClick={handleCheckout}
                className='w-full rounded-md bg-teal-600 text-white py-2 mt-2'
            >
                Finalizar Compra
            </button>
        </div>
    )


}