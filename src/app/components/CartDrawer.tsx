'use client';
import { formatPrice } from '@/lib/utils';
import { useCartStore } from '@/store';
import Image from 'next/image';

// import { motion } from 'framer-motion';
// import CheckoutButton from './CheckoutButton';
// import Checkout from './Checkout';
// import OrderCompleted from './OrderCompleted';

export default function CartDrawer() {
    const useStore = useCartStore();

    return (
        <div
            onClick={() => useStore.toggleCart()}
            className="fixed w-full h-screen bg-black/25 left-0 top-0 z-50 "
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="absolute bg-slate-600 right-0 top-0 w-1/3 h-screen p-12"
            >

                <button
                    onClick={() => useStore.toggleCart()}
                    className='font-bold text-sm text-teal-600'
                >
                    Voltar para loja
                </button>
                <div className='border-t border-gray-400 my-4'></div>

                {
                    useStore.cart.map((item) => (
                        <div key={item.id}> {item.name} </div>

                    ))
                }

            </div>
        </div>
    )
}