import { useDispatch, useSelector } from "react-redux"
import { AmountIcon, CartIcon, DefaultButton, Quantity, QuantityAdjuster, Text } from "./Button.styled"
import { RootState } from "@/redux/store"
import { DataType } from "@/@types/DataType"
import { cartActions } from "@/redux/slices/cartSlice"

export const Button = ({ data }: { data: DataType }) => {
    const cart = useSelector((state: RootState) => state.cart)
    const index = cart.findIndex(item => item.name === data.name)
    const dispatch = useDispatch()
    const item = cart[index]
    return (
        <>
            {
                item?.quantity > 0 ?
                    (
                        <QuantityAdjuster>
                            <AmountIcon src="/assets/images/icon-decrement-quantity.svg" alt="Decrement icon" onClick={() => dispatch(cartActions.removeItem({name: data.name, quantity: 1, price: data.price}))} />
                            <Quantity>{item?.quantity ? item.quantity : null}</Quantity>
                            <AmountIcon src="assets/images/icon-increment-quantity.svg" alt="Increment icon" onClick={() => dispatch(cartActions.addItem({name: data.name, quantity: 1, price: data.price}))} />
                        </QuantityAdjuster>
                    ) :
                    (
                        <DefaultButton onClick={() => dispatch(cartActions.addItem({ name: data.name, quantity: 1, price: data.price, image: data.image.thumbnail }))} >
                            <CartIcon src={'/assets/images/icon-add-to-cart.svg'} alt="Cart icon" />
                            <Text>Add to Cart</Text>
                        </DefaultButton>
                    )
            }
        </>
    )
}