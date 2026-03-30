import { type FC } from "react";
import styles from "./styles.module.css";
import LayoutWrapper from "@/components/layout-wrapper";
import BlurPopUpByWord from "@/components/blur-pop-up-by-words";
import { cn } from "@/lib/utils";
import BlurPopUp from "@/components/blur-pop-up";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { GET_STARTED_PATH } from "@/lib/routes";
import IllustrateAnimate from "@/components/illustrate-animate";
import VisionIllustration from "./components/vision-illustration";

const Hero: FC = () => {
  return (
    <section
      id="hero"
      className={`${styles.hero} scroll-mt-[calc(var(--header-top)+var(--header-height)+12px)]`}
    >
      <LayoutWrapper>
        <p className={cn(styles.hero__eyebrow, styles.hide__mobile)}>
          D360 VISION
        </p>
        <p
          className={cn(
            styles.hero__eyebrow,
            styles.show__mobile,
            "text-center",
          )}
        >
          Vision AI Platform
        </p>

        <h1 className={cn(styles.heading, styles.hide__mobile)}>
          <BlurPopUpByWord text="See Data. Understand Everything." />
        </h1>

        <h1 className={cn(styles.heading, styles.show__mobile, "text-center")}>
          <BlurPopUpByWord text="See Data. Understand Everything." />
        </h1>

        <BlurPopUp delay={1}>
          <h2 className={cn(styles.sub__heading, styles.hide__mobile)}>
            D360 Vision uses advanced Vision Language AI to understand
            documents, images, and enterprise data — transforming them into
            structured, actionable intelligence in real time.
          </h2>
          <h2 className={cn(styles.sub__heading, styles.show__mobile)}>
            D360 Vision uses advanced Vision Language AI to understand
            documents, images, and enterprise data — transforming them into
            structured, actionable intelligence in real time.
          </h2>
        </BlurPopUp>

        <BlurPopUp delay={1.05}>
          <ul className={styles.hero__bullets}>
            <li>No OCR dependency</li>
            <li>Understands structure, context, meaning</li>
            <li>Enterprise-scale performance</li>
          </ul>
        </BlurPopUp>

        <div className={cn(styles.button__container)}>
          {/* <BlurPopUp delay={1.1}>
            <Link className={styles.start__link} href={GET_STARTED_PATH}>
              Request Demo
            </Link>
          </BlurPopUp> */}

          {/* <BlurPopUp delay={1.15}>
            <Link className={styles.intoducing__link} href={GET_STARTED_PATH}>
              <span>Get Started</span>
              <ChevronRight />
            </Link>
          </BlurPopUp> */}
        </div>

        <BlurPopUp delay={1.2}>
          <p className={styles.hero__trust}>Built with proprietary AI by PCG</p>
        </BlurPopUp>

        <div className={styles.hero__img__container}>
          <div className={styles.hero__illustration__container}>
            <div className={styles.hero__illustration__perspective}>
              <p className={styles.hero__floating__label} aria-hidden>
                AI Understanding Engine
              </p>
              <div className={styles.hero__illustration__base}>
                <IllustrateAnimate
                  delay={2}
                  duration={1.4}
                  className={styles.hero__illustration__canvas}
                >
                  <VisionIllustration />
                </IllustrateAnimate>
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default Hero;
