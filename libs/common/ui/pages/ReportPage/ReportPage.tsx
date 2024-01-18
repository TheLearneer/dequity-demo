import React, { useEffect, useRef, useState } from "react";
import styles from "./ReportPage.module.scss";
import cl from "classnames";
import { useRouter } from "next/router";
import { ReportDarkSVG, ReportLightSVG } from "../../assets/svg";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store/store";
import MobileMenuIcon from "../../widgets/MobileMenuIcon/MobileMenuIcon";
import Link from "next/link";

export const ReportPage = ({ reportData }: { reportData: any }) => {
  const { locale } = useRouter();

  const theme = useSelector(
    (state: RootState) => state.app.appReducer.appTheme
  );

  const {
    data: { attributes },
  } = reportData;

  const pdfObject = attributes?.pdfFile?.data?.[0]?.attributes
  return (
    <>
      <div
        className={cl(
          styles.report_wrapper,
          styles.container,
          locale === "ar" && styles.container_ar
        )}
      >
        <div className={styles.report}>
          <div className={styles.report__content}>
            <div>
              <h3>{attributes.title_label}</h3>
            </div>
            <div>
              <h1>{attributes.title}</h1>
            </div>

            <div>
              <p>{attributes.description}</p>
            </div>

            <div className={styles.report__button}>
              <Link target="_blank" href={`https://webmaster.dequity.io/${pdfObject.url}`}>
                <button>{attributes.button_text}</button>
              </Link>
            </div>
          </div>

          <div className={styles.report__img}>
            {theme === "theme-dark" ? <ReportDarkSVG /> : <ReportLightSVG />}
          </div>

          <div className={cl(styles.decor, styles.decor1)} />
          <div className={cl(styles.decor, styles.decor2)} />
        </div>
      </div>

      <MobileMenuIcon />
    </>
  );
};

export default ReportPage;
