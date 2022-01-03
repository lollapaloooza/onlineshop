import './collection-preview.component.scss';
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1>{title}</h1>
        <div className='preview'>
            {
                items
                    .filter((item, id) => id<4)
                    .map(({id, ...otherItemProps}) => (
                    <CollectionItem key={id} {...otherItemProps}/>
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;