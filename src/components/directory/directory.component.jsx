import {DirectoryContainer} from "./directory.styles";
import MenuItem from "../menu-item/menu-item.component";
import {useSelector} from "react-redux";
import {selectDirectorySections} from "../../redux/directory/directory.selectors";

const Directory = () => {
    const sections = useSelector(selectDirectorySections);
    return (
        <DirectoryContainer>
            {
                sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps}/>
                ))
            }
        </DirectoryContainer>
    )
}

export default Directory;