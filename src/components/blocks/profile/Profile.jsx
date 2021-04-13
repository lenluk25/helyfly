import s from './Profile.module.scss';
import foto from '../../../assets/img/foto.jpg'

function Profile() {
    return (
        <div className={s.container}>
            <div className={s.about}>
                <div className={s.wrapper}>
                    <img className={s.foto} src={foto} alt="foto"/>
                </div>
                <h3 className={s.title}>Марина Иванова</h3>
                <span className={s.titleSignature}>Фотограф</span>
                <a className={s.link} href="#">Показать больше<br/> информации о фотографе</a>
            </div>
            <div className={s.content}>
                <h3 className={s.title}>Об организаторе:</h3>
                <p className={s.text}>Всем привет! Я фотограф Мария! И по мимо фотосъемки я так же являюсь членом группы экспертов туристической отрасли, которые хорошо разбираются 
                    в маркетинге, операциях 
                    и услугах обслуживания клиентов, специализирующихся 
                    на совместном использовании 
                    и частных турах. 

                    Сначала мы (я и моя команда) изучаем интересы клиентов, а затем придумываем подходящее решение, которое соответствует бюджету и планам клиента. 
                    Мы никогда не зависим 
                    от субпоставщиков 
                    и не свяжемся…</p>
                <a className={s.link} href="#">Читать еще</a>
                <h3 className={s.title}>Что я предоставлю:</h3>
                <p className={s.text}>Встречу вас на машине после длительного перелёта.
                    Качественный подбор места 
                    и локации для вашей съемки.
                    При необходимости всегда возможно прерваться 
                    на обед/ужин.
                    Более 50 фотографий на выходе 
                    с обработкой и замечательные впечатления о Дубае!</p>
                <a className={s.link} href="#">Читать еще</a>
            </div>
        </div>
    );
}

export default Profile;