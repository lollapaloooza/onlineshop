import {CollectionPageContainer, CollectionPageTitle, CollectionItemsContainer} from "./collections.styles";
import CollectionItem from "../../components/collection-item/collection-item.component";
import {connect} from "react-redux";
import {selectCollection} from "../../redux/shop/shop.selectors";


const CollectionPage = ({collection}) => {
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

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);