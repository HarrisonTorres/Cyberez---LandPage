import React from 'react';
import Link from 'next/link'


import style from "./button.module.css"

interface ButtonProps {
  name: string
  href: string
}

function Button({name, href}: ButtonProps) {
  return (
    <div className={style.container}>
        <Link href={href} className={style.button_primary}>{name}</Link>
    </div>
    
    )
}

export default Button;