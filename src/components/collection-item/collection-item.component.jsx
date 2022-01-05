import {
    CollectionItemContainer,
    BackgroundImage,
    AddButton,
    ItemNameContainer,
    ItemPriceContainer,
    CollectionFooterContainer
} from "./collection-item.styles";
import {addItem} from "../../redux/cart/cart.actions";
import {connect} from "react-redux";

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;
    return (
        <CollectionItemContainer>
            <BackgroundImage className='image' imageUrl={imageUrl}/>
            <CollectionFooterContainer>
                <ItemNameContainer>{name}</ItemNameContainer>
                <ItemPriceContainer>{price}</ItemPriceContainer>
            </CollectionFooterContainer>
            <AddButton onClick={() => addItem(item)} inverted>Add to Cart</AddButton>
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);