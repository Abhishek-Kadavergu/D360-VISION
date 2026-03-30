import { type FC } from "react";
import styles from "./styles.module.css";
import LayoutWrapper from "@/components/layout-wrapper";
import CustomerMarquee from "./components/customer-marquee";

const Customers: FC = () => {
  return (
    <section className={styles.customers}>
      <LayoutWrapper>
        <p className={styles.description__large__screen}>
          <span className={styles.highlight}>
            Built for modern enterprises handling complex data.
          </span>
        </p>

        <p className={styles.description__small__screen}>
          Built for modern enterprises handling complex data.
        </p>

        {/* <div className={styles.customer__list__container}>
          <CustomerList />

          <div className={styles.link__container}>
            <Link href="/" className={styles.link}>
              <span className={styles.link__text}>
                {" "}
                Enterprise deployments{" "}
              </span>
              <ChevronRight />
            </Link>
          </div>
        </div> */}
      </LayoutWrapper>
      <div className={styles.customer__marquee__container}>
        <CustomerMarquee />
      </div>
    </section>
  );
};

export default Customers;
