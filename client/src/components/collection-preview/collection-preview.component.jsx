import {CollectionPreviewContainer, PreviewTitle, PreviewContainer} from "./collection-preview.styles";
import CollectionItem from "../collection-item/collection-item.component";
import {useHistory, useRouteMatch} from "react-router-dom";

const CollectionPreview = ({title, items}) => {
    const history = useHistory();
    const match = useRouteMatch();

    return (
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
}

export default CollectionPreview;