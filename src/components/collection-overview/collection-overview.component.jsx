import './collection-overview.styles.scss';
import {connect} from "react-redux";
import CollectionPreview from "../collection-preview/collection-preview.component";

import {createStructuredSelector} from "reselect";
import {selectCollectionsForOverview} from "../../redux/shop/shop.selectors";

const CollectionOverview = ({collections}) => (
    <div className='collection-overview'>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
        }
    </div>
)


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForOverview
})

export default connect(mapStateToProps)(CollectionOverview);