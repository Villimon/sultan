import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { AppStateType } from '../../redux/store'
import { actions } from '../../redux/products-reducer'

import Modal from '../Common/Modal'
import BreadCrumbs from '../Common/BreadCrumbs'

import BasketItem from '../Basket/BasketItem/BasketItem'




const Basket = () => {
    const [activeModal, setActiveModal] = useState(false)

    const dispatch = useDispatch()

    const basket = useSelector((state: AppStateType) => state.products.basket)
    const totalPrice = useSelector((state: AppStateType) => state.products.totalPrice)

    useEffect(() => {
        dispatch(actions.setTotalPrice())
    }, [basket.length])



    const deleteBasket = (id: number) => {
        dispatch(actions.deleteBasket(id))
    }

    const resetBasket = () => {
        setActiveModal(true)
        dispatch(actions.resetBasket())
    }


    return (
        <>
            <BreadCrumbs list={['Корзина']} />
            <section className="basket">
                <div className="basket__container container">
                    <h2 className="basket__title">Корзина</h2>
                    {
                        basket.length
                            ?
                            <>
                                <div className="basket__body">
                                    {basket.map(b =>
                                        <BasketItem
                                            key={b.id}
                                            item={b}
                                            deleteBasket={deleteBasket}
                                        />
                                    )}
                                </div>
                                <div className="basket__bottom">
                                    <button
                                        className="basket__btn"
                                        onClick={resetBasket}
                                    >
                                        Оформить заказ
                                    </button>
                                    <div className="basket__sum">{totalPrice} ₸</div>
                                </div>
                            </>
                            : <h3 className="basket__lable">Корзина пуста</h3>
                    }
                    {activeModal &&
                        <Modal active={activeModal} setActive={setActiveModal}>
                            <span
                                className="modal__icon-cross _icons-cross"
                                onClick={() => setActiveModal(false)}
                            ></span>
                            <div className="modal__body">
                                <span className="modal__icon _icons-successfully"></span>
                                <h1 className="modal__title">Спасибо за заказ</h1>
                                <h3 className="modal__lable">Наш менеджер свяжется с вами в ближайшее время</h3>
                            </div>
                        </Modal>
                    }
                </div>
            </section>
        </>


    );
}




export default Basket;
