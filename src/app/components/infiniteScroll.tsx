'use client';

import { ProductType } from "@/types/ProductType";
import { useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import Product from "./Product";
import { fetchProducts } from "../actions";

function InfiniteScroll({
    initialProducts }: {
        initialProducts: ProductType[];
    }) {

        const [hasMore, setHasMore] = useState<boolean>(true);
        const [ isLoading, setIsLoading] = useState<boolean>(false);
        const [products, setProducts] = useState<ProductType[]>(initialProducts);
        const [ref, inView] = useInView( { threshold: 0, triggerOnce: false });

    const lastProductId = products[products.length - 1]?.id;

    const loadingMoreProducts = useCallback(async () => {
        setIsLoading(true);
        const { formatedProducts, has_more } = await fetchProducts({ lastProductId, });

        if (formatedProducts) {
            setProducts((prevProducts) => [...prevProducts, ...formatedProducts]);
            setHasMore(has_more);
        }

        setIsLoading(false)
    }, [lastProductId]);

    useEffect(() => {
        if ( inView && hasMore && !isLoading) {
            loadingMoreProducts();
        }


    }, [hasMore, inView, isLoading, loadingMoreProducts]);

    if(!products){
        return <div> carregando... </div>
    }

    return (
        <>
            {products.map((product) => (
                    <Product key={product.id} product={product}></Product>
                ))}
                {hasMore && 
                    <div ref={ref}>
                        Carregando mais produtos...
                    </div>

                }

        </>

    )
}

export default InfiniteScroll;