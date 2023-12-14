interface Props {
    params: {
        product: string
    }
}
import { getProductById } from "@/utils/fetchers"
import type { Product } from "@/utils/types"
export const revalidate = 3600
import ProductDetails from "@/components/p-details-page/ProductDetails"
import Services from "@/components/p-details-page/Services"
import Ingredients from "@/components/p-details-page/Ingredients"
import Head from "next/head"

export default async function ProductDetailPage({ params }: Props) {
    const productId = params.product
    const product: Product = await getProductById(productId)
    return <>
        <Head>
            <title>Product</title>
            <meta name='Product' content='Product Page' />

        </Head>
        <ProductDetails product={product} />
        <Services />
        <Ingredients ingredients={product.ingredients} />
    </>
}