import React from 'react';

import Basket from '../../Common/Basket';
import LogoComponent from '../../Common/Logo';

import HeaderMenu from '../HeaderMenu/HeaderMenu';







const HeaderTop = () => {
    return (
        <div className="header__top top-header">
            <div className="header__container container">
                <div className="top-header__connection">
                    <div className="top-header__address">
                        <span className="top-header__icon _icons-geolocation"></span>
                        <div className="top-header__block">
                            <h3>г. Кокчетав, ул. Ж. Ташенова 129Б</h3>
                            <h4>(Рынок Восточный)</h4>
                        </div>
                    </div>
                    <div className="top-header__mail">
                        <span className="top-header__icon _icons-mail"></span>
                        <div className="top-header__block">
                            <h3>opt.sultan@mail.ru</h3>
                            <h4>На связи в любое время</h4>
                        </div>
                    </div>
                </div>
                <HeaderMenu />
                <LogoComponent style='top-header__logo' />
                <Basket style='top-header' />
            </div>
        </div>


    );
}

export default HeaderTop;
