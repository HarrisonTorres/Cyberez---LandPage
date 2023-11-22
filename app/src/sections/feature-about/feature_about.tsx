import React from "react";

//style
import style from "./feature_about.module.css";
import Link from "next/link";
import Image from "next/image";
import Button from "../../components/buttons/button";
import Text_struct from "../../components/text_struct/text_struct";

function Feature_About() {
  return (
    <div className={style.container} id="sobre">
      <div className={style.left_container}>
        <Image
          className={style.image_one}
          src="/img/bannersobre1.png"
          alt="hero"
          width={383}
          height={440}
        ></Image>
        <Image
          className={style.image_two}
          src="/img/bannersobre2.png"
          alt="hero"
          width={383}
          height={440}
        ></Image>
      </div>
      <div className={style.right_container}>
        <Text_struct 
          span="Sobre nós"
          h2="Descubra nossa jornada protegendo o seu mundo digital com expertise
          e cuidado."
          p="Explore conosco a trajetória dedicada a proteger seu mundo digital.
          Na CyberEz, unimos expertise e cuidado para garantir uma segurança
          incomparável. Sua tranquilidade é nossa prioridade, pois acreditamos
          que cada clique merece confiança. Descubra o caminho para uma
          experiência digital protegida e confiável"
        />
        <Button name={"Saiba mais"} href={"#"} />
      </div>
    </div>
  );
}

export default Feature_About;
