import {CollectionPreviewContainer, PreviewTitle, PreviewContainer} from "./collection-preview.styles";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({title, items}) => (
    <CollectionPreviewContainer>
        <PreviewTitle>{title}</PreviewTitle>
        <PreviewContainer>
            {
                items
                    .filter((item, id) => id<4)
                    .map((item) => (
                    <CollectionItem key={item.id} item={item}/>
                ))
            }
        </PreviewContainer>
    </CollectionPreviewContainer>
)

export default CollectionPreview;