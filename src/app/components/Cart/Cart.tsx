import { RootState } from "@/redux/store"
import { useDispatch, useSelector } from "react-redux"
import { CartInfo, ConfirmButton, Container, Counter, Item, ItemName, ItemPrice, ItemQuantity, ItemTotalPrice, List, Message, MessageContainer, MessageIcon, MessageSpan, OrderContainer, OrderText, OrderValue, RemoveButton, RemoveIcon, Title } from "./Enable"
import { CartType } from "@/@types/CartType"
import { cartActions } from "@/redux/slices/cartSlice"
import { ConfirmOrderModal } from "../modals/ConfirmOrderModal/ConfirmOrderModal"
import { confirmOrderModalActions } from "@/redux/slices/confirmOrderModalSlice"
import { DisableContainer, DisableImage, DisableText, DisableTitle } from "./Disable"

const getTotal = (array: CartType[]) => {
    const total = array.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    return total
}

export const Cart = () => {
    const isConfirmOrderOpen = useSelector((state: RootState) => state.confirmOrderModal.isOpen)
    const cart = useSelector((state: RootState) => state.cart)
    const itemsInCart = cart.reduce((acc, item) => acc + item.quantity, 0)
    const dispatch = useDispatch()
    return (
        <>
            {
                cart.length > 0 ? (
                    <Container>
                        <Title>Your Cart <Counter>({itemsInCart})</Counter></Title>
                        <List>
                            {
                                cart.map(current =>
                                    <Item key={Math.random()} >
                                        <ItemName>{current.name}</ItemName>
                                        <CartInfo>
                                            <ItemQuantity>{current.quantity}x</ItemQuantity>
                                            <ItemPrice>@ ${current.price.toFixed(2)}</ItemPrice>
                                            <ItemTotalPrice>${(current.price * current.quantity).toFixed(2)}</ItemTotalPrice>
                                        </CartInfo>

                                        <RemoveButton onClick={() => dispatch(cartActions.discardItem(current.name))}>
                                            <RemoveIcon src="/assets/images/icon-remove-item.svg" alt="Remove icon" />
                                        </RemoveButton>
                                    </Item>
                                )
                            }
                        </List>

                        <OrderContainer>
                            <OrderText>Order Total</OrderText>
                            <OrderValue>${getTotal(cart).toFixed(2)}</OrderValue>
                        </OrderContainer>

                        <MessageContainer>
                            <MessageIcon src="/assets/images/icon-carbon-neutral.svg" alt="Icon carbon" />

                            <Message>This is a <MessageSpan>carbon-neutral</MessageSpan> delivery </Message>
                        </MessageContainer>

                        <ConfirmButton onClick={() => dispatch(confirmOrderModalActions.openModal())} >Confirm Order</ConfirmButton>

                        {
                            isConfirmOrderOpen ? <ConfirmOrderModal cart={cart} /> : null
                        }
                    </Container>
                ) : 
                (
                    <DisableContainer>
                        <DisableTitle>Your Cart ({itemsInCart})</DisableTitle>
                        <DisableImage src="/assets/images/illustration-empty-cart.svg" alt="Empty cart icon" />
                        <DisableText>Your added items will appear here</DisableText>
                    </DisableContainer>
                )
            }
        </>
    )
}