import React from 'react';
import { nav } from '../../../configs/navigation';







const HeaderMenu = () => {
    return (
        <div className="top-header__menu menu">
            <span className="menu__icon  _icons-menu-burgger"></span>
            <nav className="menu__body">
                <ul className="menu__list">
                    {nav.map(n => (
                        <li key={n.id} className="menu__link">
                            <a href='#'>{n.title}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default HeaderMenu;
