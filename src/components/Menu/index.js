import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';

const iconList = Object
    .keys(Icons)
    .filter(key => key !== "fas" && key !== "prefix")
    .map(icon => Icons[icon])

library.add(...iconList)

const Menu = (props) => {
    return (
        <ul className="menu">
            {props.menuItems.map(menuItem =>
                <li>
                    <a href={menuItem.href}>
                        <FontAwesomeIcon icon={menuItem.icon} />
                        {menuItem.name}
                    </a>
                </li>
            )}
        </ul>
    )
}

export default Menu;