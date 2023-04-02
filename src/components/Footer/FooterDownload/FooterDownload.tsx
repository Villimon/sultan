





const FooterDownload = () => {
    return (
        <div className="footer__download download-footer">
            <h3 className="footer__title download-footer__title">Скачать прайс-лист:</h3>
            <button className="download-footer__btn">Прайс-лист<span className='_icons-download'></span></button>
            <h4 className="download-footer__lable">Связь в мессенджерах:</h4>
            <div className="download-footer__social">
                <a href='#'><span className="download-footer__icon download-footer__icon-green _icons-wa"></span></a>
                <a href='#'><span className="download-footer__icon download-footer__icon-blue _icons-telegram"></span></a>
            </div>
        </div>
    );
}

export default FooterDownload;
