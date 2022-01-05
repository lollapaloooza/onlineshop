import {CollectionOverviewContainer} from "./collection-overview.styles";
import {connect} from "react-redux";
import CollectionPreview from "../collection-preview/collection-preview.component";

import {createStructuredSelector} from "reselect";
import {selectCollectionsForOverview} from "../../redux/shop/shop.selectors";

const CollectionOverview = ({collections}) => (
    <CollectionOverviewContainer>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
        }
    </CollectionOverviewContainer>
)


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForOverview
})

export default connect(mapStateToProps)(CollectionOverview);