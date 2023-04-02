import React from 'react'




type PropsType = {
    list: string[] | undefined
}



const BreadCrumbs: React.FC<PropsType> = ({ list }) => {
    return (
        <section className="bread-crumbs">
            <div className="bread-crumbs__container container">
                <h4 className="bread-crumbs__title"><span>Главная</span>
                    {list?.map(l => <span key={l}>{l}</span>)}</h4>
            </div>
        </section>
    );
}

export default BreadCrumbs;
