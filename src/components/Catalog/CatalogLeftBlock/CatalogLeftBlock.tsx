import React, { useState } from 'react'

import { checkboxValue } from '../../../configs/checkboxValue'
import { list } from '../../../configs/list'
import { options } from '../../../configs/options'

import CatalogFilter from '../CatalogFilter/CatalogFilter'
import SelectSorting from '../SelectSorting/SelectSorting'




type PropsType = {
    selectValue: string
    searchValue: string
    inputsPriceFirstValue: number
    inputsPriceSecondValue: number
    checkboxValues: Array<string>
    setSelectValue: (str: string) => void
    setFilterValue: (str: string) => void
    setSearchValue: (str: string) => void
    setInputsPriceFirstValue: (num: number) => void
    setInputsPriceSecondValue: (num: number) => void
    setCheackboxValues: (str: string[]) => void
    setShowResult: (show: boolean) => void
}


const CatalogLeftBlock: React.FC<PropsType> = ({
    selectValue,
    searchValue,
    checkboxValues,
    inputsPriceFirstValue,
    inputsPriceSecondValue,
    setShowResult,
    setCheackboxValues,
    setSelectValue,
    setFilterValue,
    setSearchValue,
    setInputsPriceFirstValue,
    setInputsPriceSecondValue
}) => {
    const [showCatalogFilter, setShowCatalogFilter] = useState(false)

    const onChangeHandler = (checked: boolean, value: string) => {
        if (checked) {
            if (!checkboxValues.includes(value)) {
                setCheackboxValues([...checkboxValues, value])
            }
        } else {
            checkboxValues = checkboxValues.filter(i => i !== value)
            setCheackboxValues(checkboxValues)
        }
    }

    const resetParams = () => {
        setShowResult(false)
        setCheackboxValues([])
        setInputsPriceSecondValue(0)
        setInputsPriceFirstValue(0)
    }



    return (
        <div className="catalog__left left-catalog">
            <div className="left-catalog__params params">
                <h3 className="params__title">
                    ПОДБОР ПО ПАРАМЕТРАМ
                    <span
                        data-testid='toggle-btn'
                        onClick={() => setShowCatalogFilter(!showCatalogFilter)}
                        className="params__icon-search _icons-arrow-left">
                    </span>
                </h3>
                {showCatalogFilter &&
                    <CatalogFilter
                        style='params'
                        list={list}
                        setFilterValue={setFilterValue}
                        setSelectValue={setSelectValue}
                    />}
                <SelectSorting
                    style='params'
                    options={options}
                    setSelectValue={setSelectValue}
                    selectValue={selectValue}
                />
                <div className="params__filter-price filter-price">
                    <div className="filter-price__price">Цена <span>₸</span></div>
                    <div className="filter-price__inputs">
                        <input
                            type="number"
                            value={inputsPriceFirstValue === 0
                                ? ''
                                : inputsPriceFirstValue
                            }
                            onChange={(e) => setInputsPriceFirstValue(+e.target.value)}
                            placeholder='0'
                            className="filter-price__input"
                        />
                        <span>-</span>
                        <input
                            type="number"
                            value={inputsPriceSecondValue === 0
                                ? ''
                                : inputsPriceSecondValue
                            }
                            onChange={(e) => setInputsPriceSecondValue(+e.target.value)}
                            placeholder='10 000'
                            className="filter-price__input"
                        />
                    </div>
                </div>
                <div className="left-catalog__producer">
                    <h4 className="params__lable">Производитель</h4>
                    <div className="params__search">
                        <input
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            type="text"
                            placeholder='Поиск...'
                            className="params__input"
                        />
                        <span className="params__icon _icons-search"></span>
                    </div>
                    <div className="params__inputs">
                        {checkboxValue
                            .filter(item => item.value.toLocaleLowerCase().includes(searchValue?.toLocaleLowerCase()))
                            .map(item =>
                                <div key={item.id} className="params__inputs-flex">
                                    <input
                                        type="checkbox"
                                        checked={checkboxValues.includes(item.value)}
                                        onChange={(e) => onChangeHandler(e.target.checked, item.value)}
                                        className="params__input-checkbox"

                                    />
                                    <span>{item.value}</span>
                                </div>
                            )}
                    </div>
                    <div className="params__more" >Показать все <span className='_icons-triangle'></span></div>
                </div>
                <div className="left-catalog__buttons">
                    <button
                        className="left-catalog__btn"
                        onClick={() => setShowResult(true)}
                    >
                        Показать
                    </button>
                    <button
                        className="left-catalog__btn left-catalog__btn-circle"
                        onClick={resetParams}
                    >
                        <span className='_icons-basket-delete'></span>
                    </button>
                </div>
            </div>
            <div className="left-catalog__filter">
                {list.map(l =>
                    <ul
                        key={l.id}
                        className="left-catalog__list">
                        <span
                            onClick={(e: any) => setFilterValue(e.target.textContent)}
                            className="left-catalog__list-span">
                            {l.title}
                        </span>
                        {l.items.map(item =>
                            <li
                                key={item}
                                className="left-catalog__filter-item">
                                {item}
                            </li>
                        )}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default CatalogLeftBlock;
