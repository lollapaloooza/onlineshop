import {CollectionPageContainer, CollectionPageTitle, CollectionItemsContainer} from "./collections.styles";
import CollectionItem from "../../components/collection-item/collection-item.component";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {selectCollection} from "../../redux/shop/shop.selectors";


const CollectionPage = () => {
    const { collectionId } = useParams();
    const collection = useSelector(selectCollection(collectionId));
    const {title, items} = collection;
    return (
        <CollectionPageContainer>
            <CollectionPageTitle>{title}</CollectionPageTitle>
            <CollectionItemsContainer>
                {
                    items.map(item => <CollectionItem key={item.id} item={item}/>)
                }
            </CollectionItemsContainer>
        </CollectionPageContainer>
    )
}

export default CollectionPage;