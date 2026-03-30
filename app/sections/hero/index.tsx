import { type FC } from "react";
import styles from "./styles.module.css";
import LayoutWrapper from "@/components/layout-wrapper";
import BlurPopUpByWord from "@/components/blur-pop-up-by-words";
import { cn } from "@/lib/utils";
import BlurPopUp from "@/components/blur-pop-up";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Inbox from "@/assets/inbox.svg";
import Sidebar from "./components/sidebar";
import IllustrateAnimate from "@/components/illustrate-animate";

const Hero: FC = () => {
  return (
    <section className={styles.hero}>
      <LayoutWrapper>
        <p className={cn(styles.hero__eyebrow, styles.hide__mobile)}>
          Vision AI Platform
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

        {/* <div className={cn(styles.button__container)}>
					<BlurPopUp delay={1.1}>
						<Link className={styles.start__link} href='#'>
							Request Demo
						</Link>
					</BlurPopUp>

					<BlurPopUp delay={1.15}>
						<Link className={styles.intoducing__link} href='#'>
							<span>Get Started</span>
							<ChevronRight />
						</Link>
					</BlurPopUp>
				</div> */}

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
                <div className={styles.hero__illustration__sidebar}>
                  <Sidebar />
                </div>
                <IllustrateAnimate
                  delay={2}
                  duration={1.4}
                  className={styles.hero__illustration__inbox}
                >
                  <Inbox />
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
