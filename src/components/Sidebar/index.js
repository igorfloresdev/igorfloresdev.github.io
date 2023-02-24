import './sidebar.css'

import Avatar from "../Avatar";
import Divider from "../Divider";
import Menu from "../Menu";

const Sidebar = (props) => {
    const menuItems = [
        {
            name: 'Experiências',
            icon: 'briefcase',
            href: '#'
        },
        {
            name: 'Projetos',
            icon: 'laptop',
            href: '#'
        },
        {
            name: 'Graduações',
            icon: 'graduation-cap',
            href: '#'
        },
        {
            name: 'Contato',
            icon: 'phone',
            href: '#'
        }
    ]

    return (
        <div className='sidebar bg-base-300 w-max h-screen flex flex-col'>
            <div className='menu-avatar self-center px-8 pt-8 pb-2'>
                <Avatar src='https://github.com/igorfloresdev.png' alt='Igor Flores' />
                <h1 className='uppercase text-center text-xl pt-2'>{props.title}</h1>
                <h2 className='text-center text-sm pt-2'>{props.subtitle}</h2>
            </div>
            <div className='w-4/5 self-center'>
                <Divider />
            </div>
            <div className='menu-side'>
                <Menu menuItems={menuItems} />
            </div>
        </div>
    )
}

export default Sidebar;