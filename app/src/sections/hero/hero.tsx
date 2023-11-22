import React from 'react';
import Link from 'next/link'

//styles
import style from './hero.module.css';
import Image from 'next/image';

//components
import Button from '../../components/buttons/button';
function Hero() {
  return (
    <div className={style.container}>
        <div className={style.left_container}>
            <div className={style.text_container}>
                <h1 className={style.title}>Potencializando Você na Era Digital</h1>
                <p className={style.text}>Desbrave a era digital com a CyberEz! A sua segurança online merece mais do que simples proteção; merece inovação e expertise. Descubra um novo nível de tranquilidade ao navegar na internet. Inicie agora mesmo a sua jornada com a CyberEz e garanta uma defesa robusta contra ameaças cibernéticas.</p>
            </div>
            <Button name={'Comprar'} href={'#'}/>
        </div>
        <div className={style.right_container}>
           <Image className={style.image} src="/img/EscudoBannerPricipal.png" alt="hero" width={530} height={530}  ></Image> 
           <div className={style.blur_bg_img}></div>
        </div>
    </div>
    )
}

export default Hero;