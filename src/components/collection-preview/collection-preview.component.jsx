import {CollectionPreviewContainer, PreviewTitle, PreviewContainer} from "./collection-preview.styles";
import CollectionItem from "../collection-item/collection-item.component";
import {withRouter} from "react-router-dom";

const CollectionPreview = ({title, items, match, history}) => (
    <CollectionPreviewContainer>
        <PreviewTitle onClick={()=> history.push(`${match.url}/${title.toLowerCase()}`)}>{title}</PreviewTitle>
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

export default withRouter(CollectionPreview);