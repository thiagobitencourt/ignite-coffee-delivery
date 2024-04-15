import { ShoppingCartSimple } from "@phosphor-icons/react"
import { CartCard } from "./styles"

export const Cart = () => {
    return (
        <CartCard>
            <ShoppingCartSimple size={22} weight="fill" />
        </CartCard>
    )
}