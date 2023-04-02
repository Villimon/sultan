import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AppStateType } from '../../redux/store';




type PropsType = {
    style: string
}


const Basket: React.FC<PropsType> = ({ style }) => {

    const basket = useSelector((state: AppStateType) => state.products.basket)


    return (
        <NavLink to={`/basket`} className={`${style}__body`}>
            <div className={`${style}__icon-basket _icons-basket`}></div>
            {
                basket.length > 0
                    ? <span className={`${style}__number`}>{basket.length}</span>
                    : null
            }
        </NavLink >
    );
}

export default Basket;
