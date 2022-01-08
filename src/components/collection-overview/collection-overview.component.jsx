import {CollectionOverviewContainer} from "./collection-overview.styles";
import {useSelector} from "react-redux";
import CollectionPreview from "../collection-preview/collection-preview.component";

import {selectCollectionsForOverview} from "../../redux/shop/shop.selectors";

const CollectionOverview = () => {
    const collections = useSelector(selectCollectionsForOverview);
    return (
        <CollectionOverviewContainer>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
            }
        </CollectionOverviewContainer>
    )
}

export default CollectionOverview;