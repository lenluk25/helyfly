import s from './Price.module.scss';

function Price() {
    return (
        <div className={s.price}>
            <div className={s.content}>
                <div className={s.wrapper}>
                    <span className={s.time}>15:00 - 18:00</span>
                    <span className={s.price}>850$</span>
                    <span className={s.place}>Осталось — 1 место</span>
                </div>
            </div>
        </div>
        
    );
}

export default Price;