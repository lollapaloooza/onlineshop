import {CheckoutItemContainer, ImageContainer, ItemNameContainer, ItemPriceContainer, ItemQuantityContainer, QuantityValueContainer, QuantityArrowContainer, RemoveButtonContainer} from "./checkout-item.styles";
import {connect} from "react-redux";
import {clearItemFromCart, addItem, removeItem} from "../../redux/cart/cart.actions";

const CheckoutItem = ({cartItem, clearItem, removeItem, addItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt="item"/>
            </ImageContainer>
            <ItemNameContainer>{name}</ItemNameContainer>
            <ItemQuantityContainer>
                <QuantityArrowContainer onClick={() => removeItem(cartItem)}>&#10094;</QuantityArrowContainer>
                <QuantityValueContainer>{quantity}</QuantityValueContainer>
                <QuantityArrowContainer onClick={() => addItem(cartItem)}>&#10095;</QuantityArrowContainer>
            </ItemQuantityContainer>
            <ItemPriceContainer>{price}</ItemPriceContainer>
            <RemoveButtonContainer onClick={()=>clearItem(cartItem)}>&#10005;</RemoveButtonContainer>
        </CheckoutItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);