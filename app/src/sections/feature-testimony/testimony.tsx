import React from "react";

import style from "./testimony.module.css";
import Text_struct from "../../components/text_struct/text_struct";
import CommentCard from "../../components/cards/comment_card";

const Testimony: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.top_container}>
        <Text_struct
          span="Depoimento"
          h2="Veja o que outras pessoas estão dizendo"
          p="Alguns comentarios de nosso cliente sobre todos nossos serviços"
        />
      </div>
      <div className={style.button_container}>
        <div className={style.card_container}>
          <CommentCard
            comment="A Cyber Security foi fundamental para a segurança de nossos dados
                    sensíveis. A Avaliação de Segurança Cibernética revelou áreas de
                    vulnerabilidade que não estávamos cientes."
            name="Luciana Pereira"
            imgUrl="/img/photo_profile_1.png"
            description="CEO de uma Empresa de E-commerce"
          />
          <CommentCard
            comment="A expertise da Cyber Security na Resposta e Recuperação de Incidentes é excepcional. Em um momento de crise cibernética, a equipe agiu com rapidez e eficácia para minimizar danos. Estamos extremamente satisfeitos."
            name="Rafael Lima"
            imgUrl="/img/photo_profile_1.png"
            description="Diretor de Operações em uma Consultoria Financeira"
          />
          <CommentCard
            comment="Agradecemos à Cyber Security pela abordagem abrangente em Avaliação de Segurança Cibernética. A equipe não apenas identificou ameaças potenciais, mas também forneceu orientações claras para aprimorar nossa postura de segurança."
            name="Fernanda Costa"
            imgUrl="/img/photo_profile_1.png"
            description="Gerente de TI de uma Instituição Educacional"
          />
          <CommentCard
            comment="A segurança cibernética é uma prioridade crítica em nosso setor, e a Cyber Security tem sido nossa escolha confiável. Seu serviço de Resposta e Recuperação de Incidentes foi testado e comprovado em situações reais, garantindo a continuidade de nossas operações. Recomendo sem hesitação."
            name="Gabriel Oliveira"
            imgUrl="/img/photo_profile_1.png"
            description="Empresário no Setor de Saúde"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimony;
