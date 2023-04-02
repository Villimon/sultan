
import Visa from '../../../assets/images/visa.png'
import Mastercard from '../../../assets/images/mastercard.png'





const FooterContact = () => {
    return (
        <div className="footer__contact contact-footer">
            <h3 className="footer__title contact-footer__title">Контакты:</h3>
            <div className="contact-footer__body">
                <div className="contact-footer__left">
                    <div className="contact-footer__info">
                        <h3 className="contact-footer__phone">+7 (777) 490-00-91</h3>
                        <h4 className="contact-footer__time">время работы: 9:00-20:00</h4>
                        <button className="contact-footer__order">Заказать звонок</button>
                    </div>
                    <div className="contact-footer__block">
                        <h3>opt.sultan@mail.ru</h3>
                        <h4>На связи в любое время</h4>
                    </div>
                    <div className="contact-footer__images">
                        <a href='#' className="contact-footer__img contact-footer__img-visa">
                            <img className="contact-footer__img" src={Visa} />
                        </a>
                        <a href='#' className="contact-footer__img contact-footer__img-mastercard">
                            <img className="contact-footer__img " src={Mastercard} />
                        </a>
                    </div>
                </div>
                <div className="contact-footer__right">
                    <h4 className="download-footer__lable">Связь в мессенджерах:</h4>
                    <div className="download-footer__social">
                        <a href='#'>
                            <span className="download-footer__icon download-footer__icon-green _icons-wa"></span>
                        </a>
                        <a href='#'>
                            <span className="download-footer__icon download-footer__icon-blue _icons-telegram"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterContact;
