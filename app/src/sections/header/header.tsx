import Image from 'next/image'

//styles
import style from './header.module.css'
import Link from 'next/link'

export default function Header() {
    return (
        <div className={style.container}>
            <Image className={style.logo} src="/svg/LogoHeader-CyberEz.svg" alt="logo" width={130} height={48}/>
            <div className={style.menu}>
                <Link href={"#"} className={`${style.link} ${style.button_active}`}>Home</Link>
                <Link href={"/"} className={style.link}>FAQ</Link>
                <Link href={"/"} className={style.link}>Contato</Link>
                <Link href={"/"} className={style.link}>Outros</Link>
            </div>
        </div>
    )
}