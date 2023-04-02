import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Ariel from '../../../assets/images/arial.png'

import { actions } from '../../../redux/products-reducer'

import { IItems } from '../../../types/types'

type PropsType = {
    item: IItems
    deleteBasket: (id: number) => void
}



const BasketItem: React.FC<PropsType> = ({ item, deleteBasket }) => {
    const [amount, setAmount] = useState(1)

    const dispatch = useDispatch()


    useEffect(() => {
        if (amount < 1) {
            setAmount(1)
        }
        dispatch(actions.updateTotalPrice(item.id, amount))
        dispatch(actions.setTotalPrice())
    }, [amount])


    return (
        <div key={item.id} className="basket__item item-basket">
            <div className="item-basket__img">
                <img src={item.image ? item.image : Ariel} alt="" />
            </div>
            <div className="item-basket__info">
                <div className="item-basket__size-info">
                    <span className="item-basket__icon _icons-box"></span>
                    <div className="item-basket__size"> {item.size} </div>
                    <div className="item-basket__size-type"> {item.sizeType}</div>
                </div>
                <div className="item-basket__fullname">
                    <span className="item-basket__title">{item.title} </span>
                    <span className="item-basket__lable">{item.lable}</span>
                </div>
                <div className="item-basket__description">{item.description}</div>
            </div>
            <div className="item-basket__price-info">
                <div className="item-basket__quantity">
                    <button
                        className="item-basket__quantity-btn"
                        onClick={() => setAmount(amount - 1)}
                    >
                        -
                    </button>
                    <span className="item-basket__number">{amount}</span>
                    <button
                        className="item-basket__quantity-btn"
                        onClick={() => setAmount(amount + 1)}
                    >
                        +
                    </button>
                </div>
                <div className="item-basket__price">{item?.price} ₸</div>
                <button
                    className="item-basket__btn"
                    onClick={() => deleteBasket(item.id)}
                >
                    <span className='_icons-basket-delete'></span>
                </button>
            </div>
        </div>

    )
}

export default BasketItem;