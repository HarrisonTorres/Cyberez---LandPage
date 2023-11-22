import React from "react";

import style from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.logo_container}>
        <div className={style.logo}>
          <Image
            src={"svg/LogoHeader-CyberEz.svg"}
            alt="Logo"
            width={130}
            height={48}
          />
          <p>
            Acesse nossa redes sociais e descubra mais sobre nosso propositos.
            Rede sociais emcaminha para o criador do site
          </p>
        </div>
        <div className={style.redes_sociais}>
          <a href="#">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="ig">
                <g id="Group">
                  <path
                    id="Vector"
                    d="M12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16V16Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M3 16V8C3 6.67392 3.52678 5.40215 4.46447 4.46447C5.40215 3.52678 6.67392 3 8 3H16C17.3261 3 18.5979 3.52678 19.5355 4.46447C20.4732 5.40215 21 6.67392 21 8V16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21H8C6.67392 21 5.40215 20.4732 4.46447 19.5355C3.52678 18.5979 3 17.3261 3 16Z"
                    stroke="white"
                    stroke-width="1.5"
                  />
                  <path
                    id="Vector_3"
                    d="M17.5 6.51002L17.51 6.49902"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
            </svg>
          </a>
          <a>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="fb">
                <path
                  id="Vector"
                  d="M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </a>
          <a>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="tw">
                <path
                  id="Vector"
                  d="M23 3.01006C23 3.01006 20.982 4.20206 19.86 4.54006C19.2577 3.84757 18.4573 3.35675 17.567 3.13398C16.6767 2.91122 15.7395 2.96725 14.8821 3.29451C14.0247 3.62177 13.2884 4.20446 12.773 4.96377C12.2575 5.72309 11.9877 6.62239 12 7.54006V8.54006C10.2426 8.58562 8.50127 8.19587 6.93101 7.4055C5.36074 6.61513 4.01032 5.44869 3 4.01006C3 4.01006 -1 13.0101 8 17.0101C5.94053 18.408 3.48716 19.109 1 19.0101C10 24.0101 21 19.0101 21 7.51006C21 7.23206 20.972 6.95406 20.92 6.68006C21.94 5.67406 23 3.01006 23 3.01006Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </a>
          <a>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="yt">
                <g id="Group">
                  <path
                    id="Vector"
                    d="M14 12L10.5 14V10L14 12Z"
                    fill="white"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M2 12.7074V11.2924C2 8.39739 2 6.94939 2.905 6.01839C3.811 5.08639 5.237 5.04639 8.088 4.96539C9.438 4.92739 10.818 4.90039 12 4.90039C13.181 4.90039 14.561 4.92739 15.912 4.96539C18.763 5.04639 20.189 5.08639 21.094 6.01839C22 6.94939 22 8.39839 22 11.2924V12.7074C22 15.6034 22 17.0504 21.095 17.9824C20.189 18.9134 18.764 18.9544 15.912 19.0344C14.562 19.0734 13.182 19.1004 12 19.1004C10.6958 19.0965 9.39163 19.0745 8.088 19.0344C5.237 18.9544 3.811 18.9144 2.905 17.9824C2 17.0504 2 15.6024 2 12.7084V12.7074Z"
                    stroke="white"
                    stroke-width="1.5"
                  />
                </g>
              </g>
            </svg>
          </a>
        </div>
      </div>
      <div className={style.menu_container}>
        <div className={style.menu_title}>
          <span>Navegue</span>
        </div>
        <div className={style.menu}>
          <Link href="#our-services">Nossos Serviços</Link>
          <Link href="#sobre">Sobre Nós</Link>
          <Link href="#planos">Planos</Link>
          <Link href="/">SAC</Link>
        </div>
      </div>
      <div className={style.contact_container}>
        <div>
          <span>Contato</span>
        </div>
        <div className={style.menu}>
          <a>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="email">
                <path
                  id="Vector"
                  d="M13.6666 3.16675H2.99997C2.26664 3.16675 1.67331 3.76675 1.67331 4.50008L1.66664 12.5001C1.66664 13.2334 2.26664 13.8334 2.99997 13.8334H13.6666C14.4 13.8334 15 13.2334 15 12.5001V4.50008C15 3.76675 14.4 3.16675 13.6666 3.16675ZM13.4 6.00008L8.68664 8.94675C8.47331 9.08008 8.19331 9.08008 7.97997 8.94675L3.26664 6.00008C3.09997 5.89341 2.99997 5.71341 2.99997 5.52008C2.99997 5.07341 3.48664 4.80675 3.86664 5.04008L8.33331 7.83342L12.8 5.04008C13.18 4.80675 13.6666 5.07341 13.6666 5.52008C13.6666 5.71341 13.5666 5.89341 13.4 6.00008Z"
                  fill="white"
                />
              </g>
            </svg>
            <span>harrison.contato01@gmail.com</span>
          </a>
          <a>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="ping">
                <path
                  id="Vector"
                  d="M8.33331 1.83325C5.75331 1.83325 3.66664 3.91992 3.66664 6.49992C3.66664 9.27992 6.61331 13.1133 7.82664 14.5733C8.09331 14.8933 8.57997 14.8933 8.84664 14.5733C10.0533 13.1133 13 9.27992 13 6.49992C13 3.91992 10.9133 1.83325 8.33331 1.83325ZM8.33331 8.16658C7.41331 8.16658 6.66664 7.41992 6.66664 6.49992C6.66664 5.57992 7.41331 4.83325 8.33331 4.83325C9.25331 4.83325 9.99997 5.57992 9.99997 6.49992C9.99997 7.41992 9.25331 8.16658 8.33331 8.16658Z"
                  fill="white"
                />
              </g>
            </svg>
            <span>osasco-SP Brasil</span>
          </a>
          <a>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="tel">
                <path
                  id="Vector"
                  d="M13.1533 10.6733L11.46 10.4799C11.0533 10.4333 10.6533 10.5733 10.3667 10.8599L9.14001 12.0866C7.25334 11.1266 5.70667 9.58659 4.74667 7.69326L5.98001 6.45992C6.26667 6.17326 6.40667 5.77326 6.36001 5.36659L6.16667 3.68659C6.08667 3.01326 5.52001 2.50659 4.84001 2.50659H3.68667C2.93334 2.50659 2.30667 3.13326 2.35334 3.88659C2.70667 9.57992 7.26001 14.1266 12.9467 14.4799C13.7 14.5266 14.3267 13.8999 14.3267 13.1466V11.9933C14.3333 11.3199 13.8267 10.7533 13.1533 10.6733Z"
                  fill="white"
                />
              </g>
            </svg>
            <span>11 95776-2990</span>
          </a>
        </div>
      </div>
      <div className={style.newlester_container}>
        <div>
          <span>NewLester</span>
        </div>
        <div className={style.input_container}>
          <input placeholder="Digite seu E-mail" />
          <button>Inscrever-se</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
