import LogoComponent from "../../Common/Logo";






const FooterAbout = () => {
    return (
        <div className="footer__about about-footer">
            <div className="about-footer__block">
                <LogoComponent logoWhite style='about-footer__logo' />
                <button className=" about-footer__btn">Прайс-лист<span className='_icons-download'></span></button>
            </div>
            <p className="about-footer__text">Компания «Султан» — снабжаем розничные магазины товарами
                "под ключ" в Кокчетаве и Акмолинской области</p>
            <h4 className="about-footer__lable">Подпишись на скидки и акции</h4>
            <div className="about-footer__block-input">
                <input placeholder='Введите ваш E-mail' type="text" className="about-footer__input" />
                <span className="about-footer__icon _icons-arrow-right"></span>
            </div>
        </div>
    );
}

export default FooterAbout;
