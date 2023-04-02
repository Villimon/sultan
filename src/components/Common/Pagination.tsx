import React from 'react'




type PropsType = {}


const Pagination: React.FC<PropsType> = ({ }) => {
    return (
        <div className="catalog__pagination pagination">
            <span className="pagination__icon _icons-arrow-left"></span>
            <ul className="pagination__list">
                <li className="pagination__number ">1</li>
                <li className="pagination__number active">2</li>
                <li className="pagination__number">3</li>
                <li className="pagination__number">4</li>
                <li className="pagination__number">5</li>
            </ul>
            <span className="pagination__icon _icons-arrow-right"></span>
        </div>
    );
}

export default Pagination;
