import React from 'react';

import Woman from "../../../assets/images/woman.png";

import Basket from '../../Common/Basket';
import LogoComponent from '../../Common/Logo';

import { NavLink } from 'react-router-dom';

import { AppStateType } from '../../../redux/store';

import { useSelector } from 'react-redux';






const HeaderBottom = () => {

    const totalPrice = useSelector((state: AppStateType) => state.products.totalPrice)

    return (
        <div className="header__bottom bottom-header">
            <div className="header__container header__container-mobile container">
                <LogoComponent style='bottom-header__logo' />
                <NavLink to={'/'} className="bottom-header__btn">Каталог<span className='_icons-menu'></span></NavLink>
                <div className="bottom-header__search">
                    <input type="text" placeholder='Поиск' className="bottom-header__input" />
                    <span className="bottom-header__icon  _icons-search"></span>
                </div>
                <div className="bottom-header__search-mobile">
                    <button className=" bottom-header__btn-mobile"><span className='_icons-search'></span>Поиск</button>
                </div>
                <div className="bottom-header__call">
                    <div className="bottom-header__info">
                        <h3 className="bottom-header__phone">+7 (777) 490-00-91</h3>
                        <h4 className="bottom-header__time">время работы: 9:00-20:00</h4>
                        <button className="bottom-header__order">Заказать звонок</button>
                    </div>
                    <div className="bottom-header__img">
                        <img src={Woman} alt="logo" />
                        <span className="bottom-header__img-circle"></span>
                    </div>
                </div>
                <button className="bottom-header__btn bottom-header__btn-price">Прайс-лист<span className='_icons-download'></span></button>
                <div className="bottom-header__basket">
                    <Basket style='bottom-header' />
                    <div className="bottom-header__data">
                        <h4 className="bottom-header__lable">Корзина</h4>
                        <h3 className="bottom-header__price">{totalPrice} ₸ </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderBottom;
