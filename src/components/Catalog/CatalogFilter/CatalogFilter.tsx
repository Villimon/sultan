import React from 'react'

import { IList } from '../../../types/types'




type PropsType = {
    style: string
    list: IList[]
    setFilterValue: (srt: string) => void
    setSelectValue: (srt: string) => void
}



const CatalogFilter: React.FC<PropsType> = ({ style, list, setFilterValue, setSelectValue }) => {

    const clickHandler = (e: any) => {
        setSelectValue('')
        setFilterValue(e.target.textContent)
    }

    return (
        <div data-testid='toggle-elem' className={`${style}__filter`}>
            <ul className={`${style}__list`}>
                {list.map(item =>
                    <li
                        onClick={clickHandler}
                        className={`${style}__filter-item`}
                        key={item.id}
                    >
                        {item.title}
                    </li>
                )}
            </ul>
        </div>
    );
}

export default CatalogFilter;
