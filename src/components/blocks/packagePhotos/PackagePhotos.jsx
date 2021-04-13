import s from './PackagePhotos.module.scss';
import img1 from '../../../assets/img/img_1.svg'
import img2 from '../../../assets/img/img_2.svg'
import img3 from '../../../assets/img/img_3.svg'
import img4 from '../../../assets/img/img_4.svg'


function PackagePhotos() {
    return (
        <div className={s.container}>
            <div className={s.root}>
                <h2 className={s.title}>Фотографии пакета:</h2>
                <div className={s.gallery}>
                    <img className={s.galleryImg} src={img1} alt=""/>
                    <img className={s.galleryImg} src={img2} alt=""/>
                    <img className={s.galleryImg} src={img3} alt=""/>
                    <img className={s.galleryImg} src={img4} alt=""/>
                    <img className={s.galleryImg} src={img1} alt=""/>
                    <img className={s.galleryImg} src={img2} alt=""/>
                    <img className={s.galleryImg} src={img3} alt=""/>
                    <img className={s.galleryImg} src={img4} alt=""/>
                </div>
                <div className={s.more}>
                    <a className={s.link} href="">Показать все фото</a>
                </div>
            </div>
        </div>    
    );
}

export default PackagePhotos;