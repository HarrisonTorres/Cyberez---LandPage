import React from "react";

import style from "./card_icon.module.css";
import Image from "next/image";

interface Card_iconProps {
    srcImage?: string | undefined;
    altImage?: string | undefined;
    title?: string | undefined;
    text?: string | undefined;
}

function Card_icon({srcImage, altImage, title, text}:Card_iconProps){
  return (
    <div>
      <div className={style.card_container}>
        <div className={style.icon}>
          {srcImage && altImage && <Image
            src={srcImage}
            alt={altImage}
            width={48}
            height={48}
          />}
        </div>
        <h4 className={style.title}>{title}</h4>
        <p className={style.text}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default Card_icon;
