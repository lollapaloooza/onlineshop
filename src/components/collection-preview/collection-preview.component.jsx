import './collection-preview.component.scss';
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1>{title}</h1>
        <div className='preview'>
            {
                items
                    .filter((item, id) => id<4)
                    .map((item) => (
                    <CollectionItem key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;