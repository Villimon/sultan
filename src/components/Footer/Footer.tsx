import FooterAbout from "./FooterAbout/FooterAbout";
import FooterMenu from "./FooterMenu/FooterMenu";
import FooterCategory from "./FooterCategory/FooterCategory";
import FooterDownload from "./FooterDownload/FooterDownload";
import FooterContact from "./FooterContact/FooterContact";






const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__container container">
                <FooterAbout />
                <FooterMenu />
                <FooterCategory />
                <FooterDownload />
                <FooterContact />
            </div>
        </footer>
    );
}

export default Footer;
