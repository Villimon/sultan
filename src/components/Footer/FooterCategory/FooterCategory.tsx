

const categorys = [
    {
        id: 1,
        title: 'Бытовая химия',
    },
    {
        id: 2,
        title: 'Косметика и гигиена',
    },
    {
        id: 3,
        title: 'Товары для дома',
    },
    {
        id: 4,
        title: 'Товары для детей и мам',
    },
    {
        id: 5,
        title: 'Посуда',
    },
]




const FooterCategory = () => {
    return (
        <div className="footer__category category-footer">
            <h3 className="footer__title category-footer__title">Категории:</h3>
            <ul className="category-footer__list menu-footer__list">
                {categorys.map(c =>
                    <li key={c.id} className="category-footer__link menu-footer__link"><a href='#'>{c.title}</a></li>
                )}
            </ul>
        </div>
    );
}

export default FooterCategory;
