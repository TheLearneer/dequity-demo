import { useRouter } from "next/router";
import { FC } from "react";
import styles from "./Breadcrumbs.module.scss";
import cl from "classnames";
import Ugolok from "../../assets/svg/PropertyPage/Ugolok.svg"

type BreadcrumbItem =
  | string
  | {
    title: string;
    link: string;
    shouldHighlight?: boolean;
  };
interface IBreadcrumbs {
  items: BreadcrumbItem[];
  isPayment?: boolean;
 
}
export const Breadcrumbs: FC<IBreadcrumbs> = ({ items, isPayment }) => {
  const router = useRouter();
  
  const {locale} = useRouter();

  return (
    <ul className={styles.breadcrumbs}>
      {items.map((item, i) => {
        const isLast = i + 1 === items.length;
        if (typeof item === "string") {
          return (
            <li
              className={cl(
                styles.breadcrumbs__item,
                isPayment && styles["breadcrumbs__item--payment"]
              )}
              key={i}
            >
              {item}
            </li>
          );
        } else {
          return (
            <li
              className={cl(
                styles.breadcrumbs__item,
                isPayment && styles["breadcrumbs__item--payment"],
                isLast && styles["breadcrumbs__item--payment-last"]
              )}
              key={i}
              onClick={() => router.push(item.link)}
            >
              {item.title}
              {!isLast && (<img className={cl(styles.breadcrumbs__item_svg,
                styles["breadcrumbs__item_svg--" + locale]
              )} src={Ugolok.src} alt="ugolokicon" />

              )}
            </li>
          );
        }
      })}
    </ul>
  );
};

export default Breadcrumbs;
