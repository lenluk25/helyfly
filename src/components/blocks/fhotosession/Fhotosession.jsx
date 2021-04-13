import s from './Fhotosession.module.scss';
import kiss from '../../../assets/img/kiss.svg'
import clock from '../../../assets/img/clock.svg'
import camera from '../../../assets/img/camera.svg'
import map from '../../../assets/img/map-location.svg'
import bubble from '../../../assets/img/speech-bubble.svg'
import cup from '../../../assets/img/cup.svg'
import stars from '../../../assets/img/stars.svg'


function Fhotosession() {
    return (
        <div className={s.container}>
            <div className={s.root}>
                <h2 className={s.title}>Фотосессия<br/> в вертолете</h2>
                <img className={s.img} src={kiss} alt="foto"/>
                <div className={s.content}>
                    <p className={s.text}>Полет на вертолете это прекрасная возможность получить новые ощущения!
                    А наш замечательный фотограф запечатлит лучшие моменты!</p>
                    <ul className={s.list}>
                        <li className={s.listItem}><img className={s.listImg} src={clock} alt=""/>3 часа съемки</li>
                        <li className={s.listItem}><img className={s.listImg} src={camera} alt=""/>Более 50 фотографий</li>
                        <li className={s.listItem}><img className={s.listImg} src={map} alt=""/>Москва</li>
                        <li className={s.listItem}><img className={s.listImg} src={bubble} alt=""/>Готовы ответить на любые вопросы</li>
                    </ul>
                    <div className={s.wrapper}>
                        <img src={cup} alt=""/>
                        <div className={s.box}>
                            <a className={s.link} href="">Более <span className={s.linkAccent}> 150 </span> отзывов с оценкой</a>
                            <img className={s.imgRating} src={stars} alt=""/>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>  
    );
}

export default Fhotosession;