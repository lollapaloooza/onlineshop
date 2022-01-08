import {MenuItemContainer, ContentContainer, ItemSubtitle, ItemTitle, BackgroundImage} from "./menu-item.styles";
import {useRouteMatch, useHistory} from "react-router-dom";

const MenuItem = ({title, imageUrl, size, linkUrl}) => {
    const history = useHistory();
    const match = useRouteMatch();

    return (
        <MenuItemContainer size={size} onClick={()=> history.push(`${match.url}${linkUrl}`)}>
            <BackgroundImage imageUrl={imageUrl} className='background-image'/>
            <ContentContainer className='content'>
                <ItemTitle>{title}</ItemTitle>
                <ItemSubtitle>SHOP NOW</ItemSubtitle>
            </ContentContainer>
        </MenuItemContainer>
    )
}

export default MenuItem;