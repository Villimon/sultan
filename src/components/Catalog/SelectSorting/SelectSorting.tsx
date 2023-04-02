import React from 'react'
import { IOptions } from '../../../types/types'




type PropsType = {
    style: string
    options: IOptions[]
    selectValue: string
    setSelectValue: (str: string) => void
}



const SelectSorting: React.FC<PropsType> = ({ style, options, selectValue, setSelectValue }) => {
    return (
        <div className={`${style}__sorting`}>
            <div className={`${style}__lable ${style}__lable-sorting`}>Сортировка:</div>
            <select
                className={`${style}__select`}
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
            >
                <option selected={true} >Сортировка</option>
                {options.map(option =>
                    <option
                        key={option.id}
                        value={option.value}
                    >
                        {option.value}
                    </option>
                )}
            </select>
        </div>
    );
}

export default SelectSorting;
