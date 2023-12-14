import '@/components/cart-components/style.scss'
import CartHeader from "@/components/cart-components/CartHeader"
import CheckoutBody from '@/components/cart-components/CheckoutBody'
import Head from 'next/head'
export default function CartPage() {
    return <>
        <Head>
            <title>Checkout</title>
            <meta name='Checkout' content='Cart Items Checkout Page' />

        </Head>
        <CartHeader />
        <CheckoutBody />
    </>
}