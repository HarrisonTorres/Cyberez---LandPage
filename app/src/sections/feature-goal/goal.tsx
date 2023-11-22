"use client";
import style from "./goal.module.css";
import { useState } from "react";
//components
import Text_struct from "../../components/text_struct/text_struct";
import Card_defalt from "../../components/cards/card_defalt";
const Goal = () => {
  const [scrollX, setScrollX] = useState(0);

  const nextScroll = (slide: number) => {
    console.log(slide);
    switch (slide) {
      case 1:
        setScrollX(0);
        console.log("0");
        break;
      case 2:
        setScrollX(-1);
        console.log("44");
        break;
      case 3:
        setScrollX(-412);
        console.log("888");
        break;
      case 4:
        setScrollX(-914);
        break;
      case 5:
        setScrollX(-1452);
        break;
    }

    if (scrollX < -1452) {
      setScrollX(-1452);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.hidden}>
      <div className={style.top_container}>
        <Text_struct
          span="Nosso Objetivo"
          h2="Protegendo Seu Mundo Digital Juntos"
          p="Na CyberEz, fortalecemos sua segurança digital, protegendo seu mundo online com expertise, confiança e simplicidade "
        />
      </div>
      <div>
        <div className={style.bottom_container}>
          <ul
            className={style.list}
            style={{ transform: `translateX(${scrollX}px)` }}
          >
            <li>
              <Card_defalt
                classname={`${scrollX === 0 ? style.active_slide : ""}`}
                title="Atualização Avançada"
                text="Na CyberEz, fortalecemos sua segurança digital com uma atualização avançada, protegendo seu mundo online com expertise, confiança e simplicidade."
              />
            </li>
            <li>
              <Card_defalt
                classname={`${scrollX === -1 ? style.active_slide : ""}`}
                title="Declaração de Missão"
                text="A missão da CyberEz é fortalecer sua segurança digital, protegendo seu mundo online com expertise, confiança e simplicidade."
              />
            </li>
            <li>
              <Card_defalt
                classname={`${scrollX === -412 ? style.active_slide : ""}`}
                title="Objetivos Chave"
                text="Na CyberEz, nossos objetivos chave incluem fortalecer sua segurança digital, protegendo seu mundo online com expertise, confiança e simplicidade."
              />
            </li>
            <li>
              <Card_defalt
                classname={`${scrollX === -914 ? style.active_slide : ""}`}
                title="Abordagem Centrada no Cliente"
                text="Com uma abordagem centrada no cliente, na CyberEz fortalecemos sua segurança digital, protegendo seu mundo online com expertise, confiança e simplicidade."
              />
            </li>
            <li>
              <Card_defalt
                classname={`${scrollX === -1452 ? style.active_slide : ""}`}
                title="Ação Solicitada"
                text="A CyberEz convida você a fortalecer sua segurança digital, protegendo seu mundo online com expertise, confiança e simplicidade. Ação solicitada!"
              />
            </li>
          </ul>
        </div>
        <div className={style.button_slide}>
          <div
            className={`${style.button} ${
              scrollX === 0 ? style.active_checkout : ""
            }`}
            onClick={(value) => {
              setScrollX(0);
              nextScroll(1);
            }}
          ></div>
          <div
            className={`${style.button} ${
              scrollX === -1 ? style.active_checkout : ""
            }`}
            onClick={() => {
              setScrollX(0);
              nextScroll(2);
            }}
          ></div>
          <div
            className={`${style.button} ${
              scrollX === -412 ? style.active_checkout : ""
            }`}
            onClick={() => {
              setScrollX(0);
              nextScroll(3);
            }}
          ></div>
          <div
            className={`${style.button} ${
              scrollX === -914 ? style.active_checkout : ""
            }`}
            onClick={() => {
              setScrollX(0);
              nextScroll(4);
            }}
          ></div>
          <div
            className={`${style.button} ${
              scrollX === -1452 ? style.active_checkout : ""
            }`}
            onClick={() => {
              setScrollX(0);
              nextScroll(5);
            }}
          ></div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Goal;
