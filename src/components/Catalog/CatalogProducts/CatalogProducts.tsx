import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';

import { IItems } from '../../../types/types';

import { actions } from '../../../redux/products-reducer';
import { AppStateType } from '../../../redux/store';

import Modal from '../../Common/Modal';

import arial from '../../../assets/images/arial.png'

import { list } from '../../../configs/list';


type PropsType = {
    sorting: (a: IItems, b: IItems) => number
    filterValue: string
    inputsPriceFirstValue: number
    inputsPriceSecondValue: number
    checkboxValues: Array<string>
    showResult: boolean
    admin: boolean
}


const CatalogProducts: React.FC<PropsType> = ({
    sorting,
    admin,
    filterValue,
    showResult,
    checkboxValues,
    inputsPriceFirstValue,
    inputsPriceSecondValue
}) => {
    const [activeModalEdit, setActiveModalEdit] = useState(false)
    const [activeModalAddProduct, setActiveModalAddProduct] = useState(false)
    const [state, setState] = useState({})
    const [newProduct, setNewProduct] = useState<IItems | null>()
    const [productId, setProductId] = useState<number>()
    const [selectValueNewProduct, setSelectValueNewProduct] = useState<string[]>([])
    const [selectValueEditProduct, setSelectValueEditProduct] = useState<string[]>([])

    const dispatch = useDispatch()
    const basket = useSelector((state: AppStateType) => state.products.basket)
    const products = useSelector((state: AppStateType) => state.products.products)
    const product = useSelector((state: AppStateType) => state.products.products.find(i => productId && i.id == productId))



    useEffect(() => {
        dispatch(actions.setTotalPrice())
    }, [basket.length])



    const addInBasket = (item: IItems) => {
        if (!basket.includes(item)) {
            dispatch(actions.setBasket(item))
        }
    }

    const deleteProduct = (id: number) => {
        dispatch(actions.deleteProduct(id))
    }



    const handleInputChange = (e: any) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        if (name === 'typeOfCare') {
            if (!selectValueEditProduct.includes(value)) {
                setSelectValueEditProduct([...selectValueEditProduct, value])
            }
        }

        setState({
            ...state,
            [name]: value,
            'typeOfCare': [...selectValueEditProduct]
        });

    }

    const handleNewProduct = (e: any) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        let id = Number((Math.random() * 1000).toFixed(0))

        if (name === 'typeOfCare') {
            if (!selectValueNewProduct.includes(value)) {
                setSelectValueNewProduct([...selectValueNewProduct, value])
            }
        }

        setNewProduct({
            id,
            ...newProduct,
            [name]: value,
            'typeOfCare': [...selectValueNewProduct]
        });
    }



    const editMode = (id: number) => {
        setActiveModalEdit(true)
        setProductId(id)

    }

    const editProduct = (id: number) => {
        setActiveModalEdit(false)
        dispatch(actions.editProduct(id, state))
        setState({})
    }

    const addNewProduct = () => {
        setActiveModalAddProduct(false)
        if (newProduct) {
            dispatch(actions.addNewProduct(newProduct))
        }
        setNewProduct(null)
        setSelectValueNewProduct([])
    }


    return (
        <>
            {admin &&
                <button
                    className="item-catalog__btn item-catalog__btn-add"
                    onClick={() => setActiveModalAddProduct(true)}
                >
                    Добавить продукт
                </button>
            }
            <div className="catalog__products">
                {products
                    .filter(item => showResult
                        ? item.price && (item.price > inputsPriceFirstValue && item.price < inputsPriceSecondValue)
                        : item
                    )
                    .filter(item => showResult && checkboxValues.length
                        ? item.brand && checkboxValues.includes(item.brand)
                        : item
                    )
                    .filter(item => filterValue == ''
                        ? item
                        : item.typeOfCare?.includes(filterValue)
                    )
                    .sort(sorting)
                    .map(item =>
                        <div key={item.id} className="catalog__column item-catalog">
                            <div className="item-catalog__column">
                                <div className="item-catalog__body">
                                    <div className="item-catalog__img">
                                        <img src={item.image ? item.image : arial} alt="" />
                                    </div>
                                    <div className="item-catalog__size-info">
                                        <span className={item.sizeType === 'мл'
                                            ? "item-catalog__icon _icons-bottle"
                                            : "item-catalog__icon _icons-box"}
                                        ></span>
                                        <div className="item-catalog__size">{item.size}</div>
                                        <div className="item-catalog__size-type">{item.sizeType}</div>
                                    </div>
                                    <NavLink to={`/product/${item.id}`} className="item-catalog__title">
                                        <span className="item-catalog__name">{item.title}</span>
                                        <span className="item-catalog__description">{item.lable}</span>
                                    </NavLink>
                                    <div className="item-catalog__info">
                                        <div className="item-catalog__barcode"><span>Штрихкод: </span>{item.barcode}</div>
                                        <div className="item-catalog__producer"><span>Производитель: </span>{item.producer}</div>
                                        <div className="item-catalog__brand"><span>Бренд: </span>{item.brand}</div>
                                    </div>
                                    <div className="item-catalog__bottom">
                                        <div className="item-catalog__price">{item.price} ₸</div>
                                        <button
                                            className="item-catalog__btn"
                                            onClick={() => addInBasket(item)}
                                        >В КОРЗИНУ
                                            <span className="item-catalog__icon _icons-basket"></span>
                                        </button>
                                    </div>
                                    {admin
                                        ? <div className="item-catalog__admin">
                                            <button
                                                className="item-catalog__btn item-catalog__btn-delete"
                                                onClick={() => deleteProduct(item.id)}
                                            >
                                                Удалить
                                            </button>
                                            <button
                                                className="item-catalog__btn item-catalog__btn-edit"
                                                onClick={() => editMode(item.id)}
                                            >
                                                Редактировать
                                            </button>
                                        </div>
                                        : null
                                    }
                                </div>
                                <Modal active={activeModalEdit} setActive={setActiveModalEdit}>
                                    {product && <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <label>
                                            Title:
                                            <input
                                                placeholder={product.title}
                                                name="title"
                                                type="text"
                                                onChange={handleInputChange}
                                            />
                                        </label>
                                        <label>
                                            SizeType:
                                            <input
                                                placeholder={product.sizeType}
                                                name="sizeType"
                                                type="text"
                                                onChange={handleInputChange}
                                            />
                                        </label>
                                        <label>
                                            Size:
                                            <input
                                                placeholder={product.size}
                                                name="size"
                                                type="text"
                                                onChange={handleInputChange}
                                            />
                                        </label>
                                        <label>
                                            Barcode:
                                            <input
                                                placeholder={product.barcode}
                                                name="barcode"
                                                type="text"
                                                onChange={handleInputChange}
                                            />
                                        </label>
                                        <label>
                                            Producer:
                                            <input
                                                placeholder={product.producer}
                                                name="producer"
                                                type="text"
                                                onChange={handleInputChange}
                                            />
                                        </label>
                                        <label>
                                            Brand:
                                            <input
                                                placeholder={product.brand}
                                                name="brand"
                                                type="text"
                                                onChange={handleInputChange}
                                            />
                                        </label>
                                        <label>
                                            Description:
                                            <input
                                                placeholder={product.description}
                                                name="description"
                                                type="text"
                                                onChange={handleInputChange}
                                            />
                                        </label>
                                        <label>
                                            Price:
                                            <input
                                                placeholder={String(product.price)}
                                                name="price"
                                                type="number"
                                                onChange={handleInputChange}
                                            />
                                        </label>
                                        <label>
                                            Lable:
                                            <input
                                                placeholder={product.lable}
                                                name="lable"
                                                type="text"
                                                onChange={handleInputChange}
                                            />
                                        </label>
                                        <div>
                                            <select
                                                name="typeOfCare"
                                                onChange={handleInputChange}
                                            >
                                                <option >Тип ухода</option>
                                                {list.map(option =>
                                                    <option
                                                        key={option.id}
                                                        value={option.title}
                                                    >
                                                        {option.title}
                                                    </option>
                                                )}
                                            </select>
                                            <label>
                                                TypeOfCare:
                                                <input
                                                    value={product.typeOfCare?.join(',')}
                                                    type="text"
                                                />
                                            </label>
                                        </div>
                                        <button
                                            onClick={() => editProduct(product.id)}
                                        >
                                            Редактировать
                                        </button>
                                    </div>
                                    }
                                </Modal>
                                <Modal active={activeModalAddProduct} setActive={setActiveModalAddProduct}>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <label>
                                            Title:
                                            <input
                                                name="title"
                                                type="text"
                                                onChange={handleNewProduct}
                                            />
                                        </label>
                                        <label>
                                            SizeType:
                                            <input
                                                name="sizeType"
                                                type="text"
                                                onChange={handleNewProduct}
                                            />
                                        </label>
                                        <label>
                                            Size:
                                            <input
                                                name="size"
                                                type="text"
                                                onChange={handleNewProduct}
                                            />
                                        </label>
                                        <label>
                                            Barcode:
                                            <input
                                                name="barcode"
                                                type="text"
                                                onChange={handleNewProduct}
                                            />
                                        </label>
                                        <label>
                                            Producer:
                                            <input
                                                name="producer"
                                                type="text"
                                                onChange={handleNewProduct}
                                            />
                                        </label>
                                        <label>
                                            Brand:
                                            <input
                                                name="brand"
                                                type="text"
                                                onChange={handleNewProduct}
                                            />
                                        </label>
                                        <label>
                                            Description:
                                            <input
                                                name="description"
                                                type="text"
                                                onChange={handleNewProduct}
                                            />
                                        </label>
                                        <label>
                                            Price:
                                            <input
                                                name="price"
                                                type="number"
                                                onChange={handleNewProduct}
                                            />
                                        </label>
                                        <label>
                                            Lable:
                                            <input
                                                name="lable"
                                                type="text"
                                                onChange={handleNewProduct}
                                            />
                                        </label>
                                        <div>
                                            <select
                                                name="typeOfCare"
                                                onChange={handleNewProduct}
                                            >
                                                <option >Тип ухода</option>
                                                {list.map(option =>
                                                    <option
                                                        key={option.id}
                                                        value={option.title}
                                                    >
                                                        {option.title}
                                                    </option>
                                                )}
                                            </select>
                                            <label>
                                                TypeOfCare:
                                                <input
                                                    value={selectValueNewProduct.join(',')}
                                                    type="text"
                                                />
                                            </label>
                                        </div>

                                        <button onClick={addNewProduct}>Добавить продукт</button>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                    )
                }
            </div >
        </>
    );
}

export default CatalogProducts;
