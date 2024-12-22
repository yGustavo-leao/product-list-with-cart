import { useDispatch } from "react-redux"
import { CheckIcon, Container, Item, ItemImage, ItemInfo, List, Message, Modal, Name, Price, Quantity, StartNewOrder, Title, TotalOrderContainer, TotalOrderText, TotalOrderValue, TotalPrice, ValuesContainer } from "./ConfirmOrderModal.styled"
import { CartType } from "@/@types/CartType"
import { confirmOrderModalActions } from "@/redux/slices/confirmOrderModalSlice"
import { cartActions } from "@/redux/slices/cartSlice"

export const ConfirmOrderModal = ({ cart }: { cart: CartType[] }) => {
    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    const dispatch = useDispatch()
    return (
        <Container>
            <Modal>
                <CheckIcon src="/assets/images/icon-order-confirmed.svg" alt="Confirm oder icon" />

                <Title>Order Confirmed</Title>
                <Message>We hope you enjoy your food!</Message>

                <List>
                    {
                        cart.map(current =>
                            <Item key={Math.random()}>
                                <ItemImage src={current.image} />
                                <ItemInfo>
                                    <Name>{current.name}</Name>
                                    <ValuesContainer>
                                        <Quantity>{current.quantity}x</Quantity>
                                        <Price>@ ${current.price.toFixed(2)}</Price>
                                    </ValuesContainer>
                                </ItemInfo>

                                <TotalPrice>${(current.price * current.quantity).toFixed(2)}</TotalPrice>
                            </Item>
                        )
                    }
                </List>
                <TotalOrderContainer>
                    <TotalOrderText>Order Total</TotalOrderText>
                    <TotalOrderValue>${total.toFixed(2)}</TotalOrderValue>
                </TotalOrderContainer>

                <StartNewOrder onClick={() => {
                    dispatch(confirmOrderModalActions.closeModal())
                    dispatch(cartActions.resetCart())
                }} >Start New Order</StartNewOrder>
            </Modal>
        </Container>
    )
}