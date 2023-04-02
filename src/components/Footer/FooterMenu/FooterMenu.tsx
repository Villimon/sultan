import { nav } from "../../../configs/navigation";





const FooterMenu = () => {
    return (
        <div className="footer__menu menu-footer">
            <h3 className="footer__title menu-footer__title">Меню сайта:</h3>
            <nav className="menu-footer__body">
                <ul className="menu-footer__list">
                    {nav.map(n => (
                        <li
                            key={n.id}
                            className="menu-footer__link"
                        >
                            <a href='#'>{n.title}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default FooterMenu;
