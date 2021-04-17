import s from './Footer.module.scss';
import logo from '../../../assets/img/logo.svg';
import icon1 from '../../../assets/img/vk.svg';
import icon2 from '../../../assets/img/facebook.svg';
import icon3 from '../../../assets/img/instragram.svg.svg';

function Footer() {
    return (
        <div className={s.footer}>
            <div className={s.footerTop} >
                <img className={s.logo} src={logo} alt="logo"/>
                <div className={s.social}>
                    <ul className={s.list}>
                        <li><img src={icon1} alt="vk"/></li>
                        <li><img src={icon2} alt="facebook"/></li>
                        <li><img src={icon3} alt="instagram"/></li>
                    </ul>
                </div>
            </div>
            <div className={s.footerBottom} >
                <div className={s.language}>RU</div>
            </div>
        </div>
    );
}

export default Footer;