import React, { useState } from "react";
import { useRouter } from "next/router";
import cl from "classnames";
import Link from "next/link";
import Image from "next/image";
// import LogoDequity from "../../assets/imgs/Logo_dequity.png";
//import LogoDequity from "../../assets/imgs/LogoNew.svg";
import LogoDark from "../../assets/imgs/LogoNew.svg";
import LogoLight from "../../assets/imgs/LogoNewWhite.svg";
import type { RootState } from "@/src/store/store";
import { useSelector } from "react-redux";

import style from "./Footer.module.scss";

export const FooterNew = ({ data }: { data: any }) => {
  const themeSelector: string = useSelector(
    (state: RootState) => state.app.appReducer.appTheme
  );
  const [theme, setTheme] = useState("");

  const { locale } = useRouter();
  React.useEffect(() => {
    if (themeSelector) {
      setTheme(themeSelector);
    }
  }, [themeSelector]);

  const [langMenyActive, setLangMenuActive] = useState(false);

  const list = data?.data?.attributes?.nav_list?.split(",");

  const navList = [
    {
      title: list[0] ?? null,
      // link: "https://demo.dequity.io/en/properties",
      link: `https://demo.dequity.io/${locale}/properties?utm_content=${
        themeSelector === "theme-dark" ? "dark" : "light"
      }`,
    },
    {
      title: list[1] ?? null,
      link: "/about",
    },
    {
      title: list[2] ?? null,
      link: "/research",
    },
    {
      title: list[3] ?? null,
      link: "/learn",
    },
  ];

  function handlerClick() {
    const toStart = document.querySelector(".container-fluid");
    smoothScroll(toStart);
  }

  function smoothScroll(elem: any) {
    return new Promise<void>((resolve) => {
      if (!(elem instanceof Element)) {
        throw new TypeError("Argument 1 must be an Element");
      }
      let same = 0; // a counter
      let lastPos: any = null; // last known Y position
      // pass the user defined options along with our default
      const scrollOptions = Object.assign({ behavior: "smooth" });

      // let's begin
      elem.scrollIntoView(scrollOptions);
      requestAnimationFrame(check);

      // this function will be called every painting frame
      // for the duration of the smooth scroll operation
      function check() {
        // check our current position
        const newPos = elem.getBoundingClientRect().top;

        if (newPos === lastPos) {
          // same as previous
          if (same++ > 2 || Math.floor(lastPos) == 0) {
            // if it's more than two frames
            /* @todo: verify it succeeded
             * if(isAtCorrectPosition(elem, options) {
             *   resolve();
             * } else {
             *   reject();
             * }
             * return;
             */
            if (lastPos < 0) {
              smoothScroll(elem);
            }
            return resolve(); // we've come to an halt
          }
        } else {
          same = 0; // reset our counter
          lastPos = newPos; // remember our current position
        }
        // check again next painting frame
        requestAnimationFrame(check);
      }
    });
  }

  return (
    <>
      <div className={style.footer}>
        <div className={style.footer__wrapper}>
          <div className={style.footer__info}>
            <div className={style.footer__info_logo}>
              <div className={style.footer__info_logo_img}>
                {/* <img src={LogoDequity.src} alt="Dequity"/> */}
                <Image
                  src={
                    themeSelector === "theme-dark"
                      ? LogoLight.src
                      : LogoDark.src
                  }
                  width={180}
                  height={20}
                  objectPosition="left"
                  object-fit="contain"
                  objectFit="contain"
                  alt="Dequity"
                />{" "}
                {/* width={180} height={22} layout="fill" objectFit="cover" */}
              </div>
              <div className={style.footer__info_logo_copy}>
                {/* © Copyright 2023 dEquity. All Rights Reserved */}
                {data?.data?.attributes?.copyright_text}
              </div>
            </div>
            <div className={style.footer__info_nav}>
              {navList?.map((el: any, index: any) => {
                return (
                  <div key={index} className={style.footer__info_nav_link}>
                    <Link key={index} href={el.link}>
                      <div
                        className={style.footer__info_nav_item}
                        onClick={handlerClick}
                      >
                        {el.title}
                      </div>
                    </Link>
                  </div>
                );
              })}
              {/* <div className={style.footer__info_nav_item}>About Us</div>
                       <div className={style.footer__info_nav_item}>FAQs</div>
                       <div className={style.footer__info_nav_item}>info@dequity.io</div> */}
            </div>
            <div className={style.footer__info_item}>
              <div className={style.footer__info_soc}>
                <div className={style.footer__info_soc_item}>
                  {/* див удалить. вместо него Link */}
                  <div className={style.footer__info_soc_item_link}>
                    <Link
                      target="_blank"
                      href="https://x.com/dEquity_io"
                      className={style.footer__info_soc_item_link_svg}
                    >
                      {" "}
                      {/* className={style.footer__info_soc_item_link} */}
                      {/* <img src={TelegramIcon.src} alt="Telegram"/> */}
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.0633 11.156C11.0812 11.2064 12.5722 13.5881 14.3793 16.4448C16.1864 19.3014 17.6655 21.6688 17.6655 21.7119C17.6655 21.7767 12.0533 29.6199 11.5046 30.325L11.3197 30.5625H12.7809L14.2361 30.5553L16.6516 27.2166C17.9816 25.3745 19.0789 23.8778 19.0968 23.8778C19.1147 23.8778 20.0749 25.3817 21.2379 27.2166L23.3432 30.5625H26.1404C27.6791 30.5625 28.9375 30.5409 28.9375 30.5049C28.9375 30.4762 27.369 27.9577 25.4545 24.8996L21.9715 19.3446L24.9774 15.2215L27.9773 11.0985L26.5936 11.0769C25.8362 11.0697 25.1802 11.0769 25.1444 11.0913C25.1026 11.1129 24.1424 12.3937 23.0033 13.9551C21.8641 15.5094 20.8562 16.8765 20.7668 16.9845L20.6057 17.1931L18.6853 14.1278L16.7649 11.0625H13.8962C11.5642 11.0625 11.0394 11.0769 11.0633 11.156ZM20.7489 20.7693C23.4148 25.0219 25.5976 28.5118 25.5976 28.5262C25.5976 28.5405 25.2935 28.5477 24.9177 28.5477H24.2438L19.5978 21.2298C17.0392 17.2003 14.8206 13.7033 14.6655 13.4586L14.3793 12.9981L15.1367 13.0197L15.9001 13.0413L20.7489 20.7693Z"
                          fill="#99A6AF"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>

                <div className={style.footer__info_soc_item}>
                  {/* див удалить. вместо него Link */}
                  <div className={style.footer__info_soc_item_link}>
                    <Link
                      target="_blank"
                      href="https://blog.dequity.io"
                      className={style.footer__info_soc_item_link_svg}
                    >
                      {" "}
                      {/* className={style.footer__info_soc_item_link} */}
                      {/* <img src={TelegramIcon.src} alt="Telegram"/> */}
                      <svg
                        width="14"
                        height="16"
                        viewBox="0 0 14 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.600098 7.18802H13.4001V16L6.99885 12L0.600098 16V7.18802Z"
                          fill="#FCFDFD"
                        />
                        <path
                          d="M0.600098 0L13.4001 0V1.89018H0.600098V0Z"
                          fill="#FCFDFD"
                        />
                        <path
                          d="M0.600098 3.59401H13.4001V5.48419H0.600098V3.59401Z"
                          fill="#FCFDFD"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                <div className={style.footer__info_soc_item}>
                  {/* див удалить. вместо него Link */}
                  <div className={style.footer__info_soc_item_link}>
                    <Link
                      target="_blank"
                      href="https://www.youtube.com/@dEquity."
                      className={style.footer__info_soc_item_link_svg}
                    >
                      {" "}
                      {/* className={style.footer__info_soc_item_link} */}
                      {/* <img src={TelegramIcon.src} alt="Telegram"/> */}
                      <svg
                        width="20"
                        height="14"
                        viewBox="0 0 20 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.0644 0H10.1756C11.2032 0.00373699 16.4098 0.0411071 17.8136 0.417297C18.238 0.532108 18.6247 0.755896 18.9351 1.0663C19.2455 1.3767 19.4688 1.76284 19.5825 2.18614C19.7087 2.65949 19.7975 3.28606 19.8575 3.93256L19.87 4.06211L19.8975 4.38598L19.9075 4.51553C19.9888 5.65406 19.9988 6.72035 20 6.95329V7.04671C19.9988 7.28837 19.9875 8.4269 19.8975 9.61278L19.8875 9.74357L19.8762 9.87312C19.8137 10.5856 19.7212 11.2932 19.5825 11.8139C19.4691 12.2373 19.246 12.6237 18.9355 12.9341C18.6251 13.2446 18.2382 13.4682 17.8136 13.5827C16.3635 13.9713 10.8519 13.9988 10.0881 14H9.91062C9.52435 14 7.92675 13.9925 6.25164 13.9352L6.03913 13.9278L5.93037 13.9228L5.71661 13.914L5.50284 13.9053C4.11526 13.8443 2.79392 13.7459 2.18514 13.5815C1.76072 13.4671 1.37392 13.2436 1.06347 12.9334C0.753027 12.6232 0.529842 12.2371 0.416276 11.8139C0.277517 11.2944 0.185012 10.5856 0.122508 9.87312L0.112507 9.74232L0.102506 9.61278C0.0408121 8.76871 0.00662525 7.92288 0 7.07661L0 6.92339C0.00250016 6.65557 0.0125008 5.73005 0.080005 4.7086L0.0887556 4.5803L0.0925058 4.51553L0.102506 4.38598L0.130008 4.06211L0.142509 3.93256C0.202513 3.28606 0.291268 2.65824 0.417526 2.18614C0.5309 1.76267 0.754 1.37635 1.06446 1.06589C1.37492 0.755437 1.76182 0.531764 2.18639 0.417297C2.79517 0.255361 4.11651 0.155708 5.50409 0.0934246L5.71661 0.084705L5.93162 0.0772313L6.03913 0.0734942L6.25289 0.0647746C7.4426 0.0266257 8.6328 0.00544711 9.82311 0.00124572H10.0644V0ZM8.0005 3.99858V10.0002L13.1971 7.00062L8.0005 3.99858Z"
                          fill="#EBF4FD"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className={style.footer__info_soc_item}>
                  {/* див удалить. вместо него Link */}
                  <div className={style.footer__info_soc_item_link}>
                    <Link
                      target="_blank"
                      href="https://t.me/dequity_official"
                      className={style.footer__info_soc_item_link_svg}
                    >
                      {" "}
                      {/* className={style.footer__info_soc_item_link} */}
                      {/* <img src={TelegramIcon.src} alt="Telegram"/> */}
                      <svg
                        width="18"
                        height="15"
                        viewBox="0 0 18 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.2984 2.04793L14.7792 13.9283C14.5891 14.7668 14.0935 14.9755 13.3891 14.5805L9.55074 11.752L7.6987 13.5334C7.49376 13.7383 7.32229 13.9098 6.92731 13.9098L7.20304 10.0005L14.3171 3.5721C14.6264 3.29636 14.25 3.14354 13.8364 3.41931L5.04165 8.95702L1.25543 7.77199C0.431859 7.51483 0.41698 6.94838 1.42683 6.55339L16.2363 0.847989C16.9219 0.590871 17.5219 1.00074 17.2984 2.04793Z"
                          fill="#EBF4FD"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                <div className={style.footer__info_soc_item}>
                  {/* див удалить. вместо него Link */}
                  <div className={style.footer__info_soc_item_link}>
                    <Link
                      target="_blank"
                      href="https://discord.com/invite/hnVbw25JRY"
                      className={style.footer__info_soc_item_link_svg}
                    >
                      {" "}
                      {/* className={style.footer__info_soc_item_link} */}
                      {/* <img src={TelegramIcon.src} alt="Telegram"/> */}
                      <svg
                        width="20"
                        height="14"
                        viewBox="0 0 20 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.9225 1.16349C15.6558 0.621128 14.2844 0.227481 12.8557 4.02379e-05C12.8432 -0.000327694 12.8308 0.00183131 12.8192 0.0063655C12.8077 0.0108997 12.7974 0.0176989 12.7891 0.0262836C12.6176 0.314958 12.4176 0.691109 12.2843 0.979784C10.769 0.769839 9.22803 0.769839 7.71275 0.979784C7.57941 0.682362 7.37941 0.314958 7.19845 0.0262836C7.18893 0.00878813 7.16035 4.02379e-05 7.13178 4.02379e-05C5.70317 0.227481 4.34123 0.621128 3.065 1.16349C3.05548 1.16349 3.04595 1.17223 3.03643 1.18098C0.445883 4.7413 -0.268423 8.20539 0.0839681 11.6345C0.0839681 11.652 0.0934922 11.6695 0.11254 11.6782C1.82687 12.8329 3.47454 13.5327 5.10315 13.9964C5.13173 14.0051 5.1603 13.9964 5.16982 13.9789C5.55078 13.4978 5.89365 12.9904 6.1889 12.4568C6.20795 12.4218 6.1889 12.3868 6.1508 12.378C5.60793 12.1856 5.09363 11.9582 4.58885 11.6957C4.55076 11.6782 4.55076 11.6257 4.57933 11.5995C4.68409 11.5295 4.78886 11.4508 4.89362 11.3808C4.91267 11.3633 4.94124 11.3633 4.96029 11.3721C8.23657 12.7455 11.77 12.7455 15.0082 11.3721C15.0272 11.3633 15.0558 11.3633 15.0749 11.3808C15.1796 11.4595 15.2844 11.5295 15.3891 11.6083C15.4272 11.6345 15.4272 11.687 15.3796 11.7045C14.8844 11.9757 14.3605 12.1943 13.8177 12.3868C13.7796 12.3955 13.7701 12.4393 13.7796 12.4655C14.0844 12.9991 14.4272 13.5065 14.7987 13.9876C14.8272 13.9964 14.8558 14.0051 14.8844 13.9964C16.5225 13.5327 18.1702 12.8329 19.8845 11.6782C19.9036 11.6695 19.9131 11.652 19.9131 11.6345C20.3321 7.67178 19.2178 4.23393 16.9606 1.18098C16.9511 1.17223 16.9416 1.16349 16.9225 1.16349ZM6.68415 9.54379C5.70317 9.54379 4.8841 8.71276 4.8841 7.68928C4.8841 6.66579 5.68412 5.83476 6.68415 5.83476C7.6937 5.83476 8.49372 6.67454 8.4842 7.68928C8.4842 8.71276 7.68418 9.54379 6.68415 9.54379ZM13.3224 9.54379C12.3414 9.54379 11.5224 8.71276 11.5224 7.68928C11.5224 6.66579 12.3224 5.83476 13.3224 5.83476C14.332 5.83476 15.132 6.67454 15.1225 7.68928C15.1225 8.71276 14.332 9.54379 13.3224 9.54379Z"
                          fill="#EBF4FD"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* <div className={style.footer__info_soc_item}>
                  <div className={style.footer__info_soc_item_link}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                    >
                      <path d="m484.689 98.231-69.417 327.37c-5.237 23.105-18.895 28.854-38.304 17.972L271.2 365.631l-51.034 49.086c-5.647 5.647-10.372 10.372-21.256 10.372l7.598-107.722L402.539 140.23c8.523-7.598-1.848-11.809-13.247-4.21L146.95 288.614 42.619 255.96c-22.694-7.086-23.104-22.695 4.723-33.579L455.423 65.166c18.893-7.085 35.427 4.209 29.266 33.065z"></path>
                    </svg>
                  </div>
                </div> */}
              </div>
              <Link href="mailto:info@dEquity.io">
                <div className={style.footer__info_nav_item}>
                  info@dEquity.io
                </div>
              </Link>
            </div>
          </div>
          <div
            className={style.footer__text}
            dangerouslySetInnerHTML={{
              __html: data?.data?.attributes?.test_site_text,
            }}
          >
            {/* Please be aware that the site is currently in a testing phase, and no services are provided. The sole functionality of the site at present is to collect user-provided email contact details to contact persons who may have an interest in the services in the future. The Content is for informational purposes only, and you should not construe any such information or other material as legal, tax, investment, financial, or other advice. Nothing contained on our Site constitutes a solicitation, recommendation, endorsement, or offer by dEquity or any third-party service provider to buy or sell any securities or other financial instruments in this or in any other jurisdiction in which such solicitation or offer would be unlawful under the securities laws of such jurisdiction. dEquity isn't available for US investors., */}
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterNew;
