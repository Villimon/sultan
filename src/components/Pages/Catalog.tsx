import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';

import { list } from '../../configs/list';
import { options } from '../../configs/options';
import { IItems } from '../../types/types';

import BreadCrumbs from '../Common/BreadCrumbs';
import Pagination from '../Common/Pagination';

import CatalogFilter from '../Catalog/CatalogFilter/CatalogFilter';
import CatalogLeftBlock from '../Catalog/CatalogLeftBlock/CatalogLeftBlock';
import CatalogProducts from '../Catalog/CatalogProducts/CatalogProducts';
import SelectSorting from '../Catalog/SelectSorting/SelectSorting';




const Catalog = () => {
    const [selectValue, setSelectValue] = useState('')
    const [filterValue, setFilterValue] = useState('')
    const [searchValue, setSearchValue] = useState('')
    const [showResult, setShowResult] = useState(false)
    const [admin, setAdmin] = useState(false)

    const [inputsPriceFirstValue, setInputsPriceFirstValue] = useState<number>(0)
    const [inputsPriceSecondValue, setInputsPriceSecondValue] = useState<number>(0)

    const [checkboxValues, setCheackboxValues] = useState<string[]>([])



    const location = useLocation();


    useEffect(() => {
        if (location.pathname === '/edit') {
            setAdmin(true)
        }
        else {
            setAdmin(false)
        }
    }, [location])



    const sorting = (a: IItems, b: IItems) => {
        if (selectValue === 'Название (по убыванию)') {
            if (a.title && b.title) {
                if (a.title > b.title) return -1
                if (a.title < b.title) return 1
            }
        }
        if (selectValue === 'Название (по возрастанию)') {
            if (a.title && b.title) {
                if (a.title > b.title) return 1
                if (a.title < b.title) return -1
            }
        }
        if (selectValue === 'Цена (по убыванию)') {
            if (a.price && b.price) {
                if (a.price > b.price) return -1
                if (a.price < b.price) return 1
            }
        }
        if (selectValue === 'Цена (по возрастанию)') {
            if (a.price && b.price) {
                if (a.price > b.price) return 1
                if (a.price < b.price) return -1
            }
        }
    }

    return (
        <>
            <BreadCrumbs list={['Косметика и гигиена']} />
            <section className='catalog'>
                <div className="catalog__container container">
                    <div className="catalog__top">
                        <h2 data-testid='title-elem' className="catalog__title">Косметика и гигиена</h2>
                        <SelectSorting
                            style='catalog'
                            options={options}
                            setSelectValue={setSelectValue}
                            selectValue={selectValue}
                        />
                    </div>
                    <CatalogFilter
                        style='catalog'
                        list={list}
                        setFilterValue={setFilterValue}
                        setSelectValue={setSelectValue}
                    />
                    <div className="catalog__body">
                        <CatalogLeftBlock
                            setSelectValue={setSelectValue}
                            selectValue={selectValue}
                            setFilterValue={setFilterValue}
                            setSearchValue={setSearchValue}
                            searchValue={searchValue}
                            inputsPriceFirstValue={inputsPriceFirstValue}
                            inputsPriceSecondValue={inputsPriceSecondValue}
                            setInputsPriceFirstValue={setInputsPriceFirstValue}
                            setInputsPriceSecondValue={setInputsPriceSecondValue}
                            setCheackboxValues={setCheackboxValues}
                            checkboxValues={checkboxValues}
                            setShowResult={setShowResult}
                        />
                        <div className="catalog__right">
                            <CatalogProducts
                                filterValue={filterValue}
                                inputsPriceFirstValue={inputsPriceFirstValue}
                                inputsPriceSecondValue={inputsPriceSecondValue}
                                checkboxValues={checkboxValues}
                                showResult={showResult}
                                admin={admin}
                                // @ts-ignore
                                sorting={sorting}
                            />
                            <Pagination />
                            <p className="catalog__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Catalog;
