import {
    CollectionItemContainer,
    BackgroundImage,
    AddButton,
    ItemNameContainer,
    ItemPriceContainer,
    CollectionFooterContainer
} from "./collection-item.styles";
import {addItem} from "../../redux/cart/cart.actions";
import {useDispatch} from "react-redux";

const CollectionItem = ({item}) => {
    const dispatch = useDispatch();
    const {name, price, imageUrl} = item;
    return (
        <CollectionItemContainer>
            <BackgroundImage className='image' imageUrl={imageUrl}/>
            <CollectionFooterContainer>
                <ItemNameContainer>{name}</ItemNameContainer>
                <ItemPriceContainer>{price}</ItemPriceContainer>
            </CollectionFooterContainer>
            <AddButton onClick={() => dispatch(addItem(item))} inverted>Add to Cart</AddButton>
        </CollectionItemContainer>
    )
}

export default CollectionItem;