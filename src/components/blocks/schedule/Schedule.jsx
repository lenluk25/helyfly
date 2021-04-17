import s from './Schedule.module.scss';
import Button from '../../button/Button';
import Price from './price/Price';

function Schedule() {
    return (
        <div className={s.container}>
                <h2 className={s.title}>Доступная съемка в ближайшее время:</h2>
            <div className={s.schedule}>
                <div className={s.wrapper}>
                    <h4 className={s.title} >Пятница, 14 сентября</h4>
                </div>
                <div className={s.box}>
                    <Price/>
                    <Button title="Выбрать" className="btnSmall"/>
                </div>
                <div className={s.box}>
                    <Price/>
                    <Button title="Выбрать" className="btnSmall"/>
                </div>
            </div>

        </div>
        
    );
}

export default Schedule;