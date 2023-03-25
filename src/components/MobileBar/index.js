import React from 'react'

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

const MobileBar = (props) => {
    return (
        <div className={`navbar bg-base-300 ${props.className}`}>
            <div className="flex-1">
                <a href="#works" className="btn btn-ghost uppercase text-lg">{props.title}</a>
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    <label className="avatar btn btn-ghost btn-circle">
                        <div className="w-10 rounded-full">
                            <img alt="Imagem Igor Flores" src="https://github.com/igorfloresdev.png" />
                        </div>
                    </label>
                </div>
                <div className="dropdown dropdown-end">
                    <button className="btn btn-square btn-ghost">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-300 rounded-box w-52">
                        {menuItems.map(item => (
                            <li key={item.name} ><a href={item.href}><i className={item.icon}></i>{item.name}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MobileBar