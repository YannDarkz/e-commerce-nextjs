// 'use server';

import { ProductType } from "@/types/ProductType";
import { stripe } from "@/lib/stripe";


async function fetchProducts({ lastProductID }: { lastProductID?: string | undefined}) {
    const params = lastProductID ? { starting_after: lastProductID, limit: 12 } : {};
    const { data: products, has_more} = await stripe.products.list(params);
    const formatedProducts = await Promise.all(
      products.map(async (product) => {
        const price = await stripe.prices.list({
          product: product.id,
        });
        return {
          id: product.id,
          price: price.data[0].unit_amount,
          name: product.name,
          quantity: 3,
          image: product.images[0],
          description: product.description,
          currency: price.data[0].currency,
        }
      })
    );
    return {formatedProducts, has_more};
  
  }

  export default fetchProducts