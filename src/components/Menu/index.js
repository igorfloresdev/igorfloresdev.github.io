const Menu = (props) => {
    return (
        <ul className="menu">
            {props.menuItems.map(menuItem =>
                <li key={menuItem.name}>
                    <a href={menuItem.href}>
                        <i className={menuItem.icon} />
                        {menuItem.name}
                    </a>
                </li>
            )}
        </ul>
    )
}

export default Menu;