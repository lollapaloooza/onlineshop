import {CartItemContainer, ItemDetailsContainer, ImageContainer, ItemQuantityContainer, ItemNameContainer} from "./cart-item.styles";

const CartItem = ({item : {imageUrl, price, name, quantity}}) => (
    <CartItemContainer>
        <ImageContainer src={imageUrl} alt="item"/>
        <ItemDetailsContainer>
            <ItemNameContainer>{name}</ItemNameContainer>
            <ItemQuantityContainer>{quantity} x ${price}</ItemQuantityContainer>
        </ItemDetailsContainer>
    </CartItemContainer>
)

export default CartItem;