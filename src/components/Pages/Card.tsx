import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { actions } from '../../redux/products-reducer';
import { AppStateType } from '../../redux/store';

import { IItems } from '../../types/types';

import BreadCrumbs from '../Common/BreadCrumbs';







const Card = () => {
    const [amount, setAmount] = useState(1)
    const [showDescription, setShowDescription] = useState(true)
    const [showCharacteristics, setShowCharacteristics] = useState(true)

    const { id } = useParams<{ id: string }>()
    const dispatch = useDispatch()


    const product = useSelector((state: AppStateType) => state.products.products.find(i => id && i.id == +id))
    const basket = useSelector((state: AppStateType) => state.products.basket)



    useEffect(() => {
        if (amount < 1) {
            setAmount(1)
        }
    }, [amount])

    useEffect(() => {
        dispatch(actions.setTotalPrice())
    }, [basket.length])



    const addInBasket = (item: IItems) => {
        if (!basket.includes(item)) {
            dispatch(actions.setBasket(item))
        }
    }



    return (
        <>
            <BreadCrumbs list={['Косметика и гигиена', `${product?.brand} ${product?.lable}`]} />
            <section className="card">
                <div className="card__container container">
                    <div className="card__img">
                        <img src={product?.image} alt="" />
                    </div>
                    <div className="card__body">
                        <h4 className="card__state">В наличии</h4>
                        <div className="card__fullname">
                            <span className="card__title">{product?.title} </span>
                            <span className="card__lable">{product?.lable}</span>
                        </div>
                        <div className="card__size-info">
                            <span className={product?.sizeType === 'г'
                                ? "card__icon _icons-box"
                                : "card__icon _icons-bottle"
                            }></span>
                            <div className="card__size"> {product?.size} </div>
                            <div className="card__size-type">{product?.sizeType}</div>
                        </div>
                        <div className="card__price-info">
                            <div className="card__price">
                                {product?.price && (+product?.price * amount).toFixed(2)} ₸
                            </div>
                            <div className="card__quantity">
                                <button
                                    className="card__quantity-btn"
                                    onClick={() => setAmount(amount - 1)}
                                >
                                    -
                                </button>
                                <span className="card__number">{amount}</span>
                                <button
                                    className="card__quantity-btn"
                                    onClick={() => setAmount(amount + 1)}
                                >
                                    +
                                </button>
                            </div>
                            <button
                                className="card__btn card__btn-basket"
                                onClick={() => product && addInBasket(product)}
                            >
                                В корзину
                                <span className='_icons-basket'></span>
                            </button>
                            <div className="card__share card__share-mobile">
                                <span className='card__icon _icons-share'></span>
                            </div>
                        </div>
                        <div className="card__action-info">
                            <div className="card__share"><span className='card__icon _icons-share'></span></div>
                            <div className="card__action">
                                При покупке от 10 000 ₸ бесплатная доставка по Кокчетаву и области
                            </div>
                            <button className="card__btn card__btn-download">
                                Прайс-лист<span className='_icons-download'></span>
                            </button>
                        </div>
                        <div className="card__info">
                            <div className="card__name"><span>Производитель: </span>{product?.producer}</div>
                            <div className="card__name"><span>Бренд: </span>{product?.brand}</div>
                            <div className="card__name"><span>Артикул: </span>{product?.barcode}</div>
                            <div className="card__name"><span>Штрихкод: </span>{product?.barcode}</div>
                        </div>
                        <div className="card__description">
                            <div className="card__show">
                                Описание
                                <span onClick={() => setShowDescription(!showDescription)}
                                    className={!showDescription
                                        ? 'card__icon-triangle active _icons-triangle'
                                        : 'card__icon-triangle _icons-triangle'}>
                                </span>
                            </div>
                            {showDescription && <p className="card__text">{product?.description}</p>}
                        </div>
                        <div className="card__characteristics">
                            <div className="card__show">
                                Характеристики
                                <span
                                    onClick={() => setShowCharacteristics(!showCharacteristics)}
                                    className={!showCharacteristics
                                        ? 'card__icon-triangle active _icons-triangle'
                                        : 'card__icon-triangle _icons-triangle'}>
                                </span>
                            </div>
                            {showCharacteristics && <div className="card__characteristics-list">
                                <div className="card__name">
                                    <span>Назначение: </span>{product?.brand}
                                </div>
                                <div className="card__name">
                                    <span>Тип: </span>{product?.brand}
                                </div>
                                <div className="card__name">
                                    <span>Производитель: </span>{product?.brand}
                                </div>
                                <div className="card__name">
                                    <span>Бренд: </span>{product?.brand}
                                </div>
                                <div className="card__name">
                                    <span>Артикул: </span>{product?.barcode}
                                </div>
                                <div className="card__name">
                                    <span>Штрихкод: </span>{product?.barcode}
                                </div>
                                <div className="card__name">
                                    <span>Вес: </span>{product?.size} {product?.sizeType}
                                </div>
                                <div className="card__name">
                                    <span>Объем: </span>{product?.size} {product?.sizeType}
                                </div>
                                <div className="card__name">
                                    <span>Кол-во в коробке: </span>{product?.size} {product?.sizeType}
                                </div>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}

export default Card;
