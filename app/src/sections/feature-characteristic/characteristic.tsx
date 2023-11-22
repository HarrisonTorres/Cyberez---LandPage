import Image from "next/image";
import React from "react";

import style from "./characteristic.module.css";

//components
import Card_defalt from "../../components/cards/card_defalt";
import Text_struct from "../../components/text_struct/text_struct";

const Characteristic = () => {
  return (
    <div className={style.container}>
      <div className={style.left_container}>
        <Image
          src="/img/banner-carinha-trabalhando.png"
          alt="imagem"
          width={521}
          height={880}
          className={style.img}
        />
      </div>
      <div className={style.right_container}>
        <div className={style.text_container}>
          <Text_struct
            span="Ponto de Característica"
            h2="Funcionalidades Chave do Serviço que Garantem sua Proteção"
            p="Funcionalidades essenciais garantem proteção, proporcionando segurança e
                    eficácia para uma experiência confiável."
          />
        </div>
        <div className={style.container_card}>
          <div className={style.card}>
            <Card_defalt
              altImage="a"
              srcImage="/svg/Customize.svg"
              title="Soluções de Segurança Personalizadas"
              text=""
            />
          </div>
          <div className={style.card}>
            <Card_defalt
              altImage="a"
              srcImage="/svg/Threat.svg"
              title="Soluções de Segurança Personalizadas"
              text=""
            />
          </div>
          <div className={style.card}>
            <Card_defalt
              altImage="a"
              srcImage="/svg/24 Hours Service.svg"
              title="Soluções de Segurança Personalizadas"
              text=""
            />
          </div>
          <div className={style.card}>
            <Card_defalt
              altImage="a"
              srcImage="/svg/Training.svg"
              title="Soluções de Segurança Personalizadas"
              text=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Characteristic;
