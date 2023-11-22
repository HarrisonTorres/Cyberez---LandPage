import React from "react";

import style from "./plans.module.css";
import Text_struct from "../../components/text_struct/text_struct";
import Button from "../../components/buttons/button";

const Plans: React.FC = () => {
  return (
    <div className={style.container} id="planos">
      <div className={style.top_container}>
        <Text_struct
          span="Tabela de preços"
          h2="Comece A Usar Proteção De Ciberseguraça"
          p="Implemente medidas robustas de cibersegurança para proteger seus dados e garantir a integridade de suas informações online"
        />
      </div>
      <div className={style.bottom_container}>
        <div className={style.card}>
          <div className={style.card_title}>
            <Text_struct
              span="BASIC"
              p="Sua segurança completa, essencial e eficaz"
            />
          </div>
          <div className={style.card_price}>
            <span>R$99</span>
            <p>|</p>
            <p>/mês</p>
          </div>
          <ul className={style.card_list}>
            <li>
              <span></span>Monitoramento de Ameaças em Tempo Real
            </li>
            <li>
              <span></span>Programas de Treinamento para Usuários
            </li>
            <li>
              <span></span>Email Security
            </li>
          </ul>
          <Button name="Assinar" href="#" />
        </div>

        <div className={`${style.card} ${style.destaque}`}>
          <div className={style.card_title}>
            <Text_struct
              span="STANDARD"
              p="A segurança aprimorada que você precisa, com recursos abrangentes para uma experiência digital protegida."
            />
          </div>
          <div className={style.card_price}>
            <span>R$199</span>
            <p>|</p>
            <p>/mês</p>
          </div>
          <ul className={style.card_list}>
            <li>
              <span></span>Tudo no Básico
            </li>
            <li>
              <span></span>Avaliações de Vulnerabilidade
            </li>
            <li>
              <span></span>Resposta a Incidentes 24/7
            </li>
            <li>
              <span></span>Resposta a Incidentes 24/7
            </li>
          </ul>
          <Button name="Assinar" href="#" />
        </div>

        <div className={style.card}>
          <div className={style.card_title}>
            <Text_struct
              span="PREMIUM"
              p="Maximize sua segurança online com recursos avançados e proteção completa para uma experiência digital de excelência."
            />
          </div>
          <div className={style.card_price}>
            <span>R$399</span>
            <p>|</p>
            <p>/mês</p>
          </div>
          <ul className={style.card_list}>
            <li>
              <span></span>Tudo no STANDARD
            </li>
            <li>
              <span></span>Auditorias de Conformidade
            </li>
            <li>
              <span></span>Inteligência Avançada contra Ameaças
            </li>
          </ul>
          <Button name="Assinar" href="#" />
        </div>
      </div>
    </div>
  );
};

export default Plans;
