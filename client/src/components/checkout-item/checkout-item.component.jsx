import {CheckoutItemContainer, ImageContainer, ItemNameContainer, ItemPriceContainer, ItemQuantityContainer, QuantityValueContainer, QuantityArrowContainer, RemoveButtonContainer} from "./checkout-item.styles";
import {useDispatch} from "react-redux";
import {clearItemFromCart, addItem, removeItem} from "../../redux/cart/cart.actions";

const CheckoutItem = ({cartItem}) => {
    const dispatch = useDispatch();
    const {name, imageUrl, price, quantity} = cartItem;
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt="item"/>
            </ImageContainer>
            <ItemNameContainer>{name}</ItemNameContainer>
            <ItemQuantityContainer>
                <QuantityArrowContainer onClick={() => dispatch(removeItem(cartItem))}>&#10094;</QuantityArrowContainer>
                <QuantityValueContainer>{quantity}</QuantityValueContainer>
                <QuantityArrowContainer onClick={() => dispatch(addItem(cartItem))}>&#10095;</QuantityArrowContainer>
            </ItemQuantityContainer>
            <ItemPriceContainer>{price}</ItemPriceContainer>
            <RemoveButtonContainer onClick={()=>dispatch(clearItemFromCart(cartItem))}>&#10005;</RemoveButtonContainer>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;