import './sidebar.css'

import Avatar from "../Avatar";
import Divider from "../Divider";
import Menu from "../Menu";

const Sidebar = (props) => {
    const menuItems = [
        {
            name: 'Experiências',
            icon: 'fa-solid fa-briefcase',
            href: '#works'
        },
        {
            name: 'Graduação & Cursos',
            icon: 'fa-solid fa-graduation-cap',
            href: '#graduation'
        },
        {
            name: 'Projetos',
            icon: 'fa-solid fa-laptop',
            href: '#projects'
        },
        {
            name: 'Contato',
            icon: 'fa-solid fa-envelope',
            href: '#contact'
        }
    ]

    return (
        <div className={`sidebar bg-base-300 w-max h-screen flex flex-col ${props.className}`}>
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