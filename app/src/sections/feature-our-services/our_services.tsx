import React from 'react';

import style from './our_services.module.css'
import Image from 'next/image';

import Card_icon from '../../components/cards/card_icon'
import Text_struct from '../../components/text_struct/text_struct';
const Our_Services: React.FC = () => {
  return (
    <div className={style.container} id='our-services'>
        <div className={style.text_container}>
            <Text_struct
                span='Nossos Serviços'
                h2='Protegendo Seus Ativos Digitais com Expertise'
                p='Protegendo Seus Ativos Digitais com Expertise envolve estratégias especializadas para garantir a segurança eficaz dos recursos online, preservando a integridade e confidencialidade contra ameaças cibernéticas'
            />
        </div>
        <div className={style.container_card}>
            <Card_icon 
                srcImage='/svg/icon-card-1.svg'
                altImage='Icon padlock'
                text='Avaliação de Segurança Cibernética analisa e fortalece a proteção contra ameaças online'
                title='Avaliação de Segurança Cibernética'
            />
            <Card_icon
                srcImage='/svg/icon-card-2.svg'
                altImage='Icon'
                text='Avaliação de Segurança Cibernética analisa e fortalece a proteção contra ameaças online'
                title='Avaliação de Segurança Cibernética'
            />
            <Card_icon
                srcImage='/svg/icon-card-3.svg'
                altImage='Icon'
                title='Detecção e Prevenção de Intrusões'
                text='Cruciais para defender contra ameaças digitais, mitigando impactos e restaurando a normalidade operacional.'            
            />
        </div>
    </div>
    )
}

export default Our_Services;