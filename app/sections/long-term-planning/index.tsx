import { type FC } from "react";
import styles from "./styles.module.css";
import LayoutWrapper from "@/components/layout-wrapper";
import SectionHeading from "@/components/sectionHeading";
import Link from "next/link";
import Image from "next/image";
import {
  BentoGrid,
  BentoGridFeatureLookupWrapper,
  BentoGridSeperator,
  BentoGridTopLayer,
  BentoGridWideCardWrapper,
} from "@/components/bento-grid";
import BentoCardLeft from "@/components/bento-grid/components/bento-grid-card-left";
import BentoGridCardRight from "@/components/bento-grid/components/bento-grid-card-right";
import BentoGridFeatureLookUpCard from "@/components/bento-grid/components/bento-grid-feature-lookup-card";
import { longTermFeatureLookup } from "./feature-lookup-data";
import FirstCard from "./components/first-card";
import SecondCard from "./components/second-card";
import WideCard from "./components/wide-card";

const LongTermPlanning: FC = () => {
  return (
    <section
      id="capabilities"
      className={`${styles.long__term__planning} scroll-mt-[calc(var(--header-top)+var(--header-height)+12px)]`}
    >
      <LayoutWrapper>
        <div className={styles.heading__container}>
          <div className={styles.heading__inner__container}>
            <Link href="/">
              <SectionHeading
                heading="Turn Raw Data Into Structured Intelligence."
                badgeText="Core pipeline"
                badgeStyle="bg-[#68CC58] border-none"
              />
            </Link>
          </div>
          <div className={styles.description__container}>
            <p>
              <span>Extract meaning, not just text.</span> D360 Vision
              understands documents end-to-end — layout, context, and
              relationships.
            </p>
          </div>
        </div>
      </LayoutWrapper>

      <div className={styles.hero__img__wrapper}>
        <Image src="/roadmap.png" alt="" width={3200} height={1620} />
      </div>

      {/* <LayoutWrapper>
				<BentoGrid>
					<BentoGridTopLayer>
						<BentoCardLeft
							title='Structured intelligence pipeline'
							description='Consolidate ingestion, understanding, and outputs in one place.'>
							<FirstCard />
						</BentoCardLeft>
						<BentoGridCardRight
							title='Live intelligence'
							description='Track extraction quality and structured output health.'>
							<SecondCard />
						</BentoGridCardRight>
					</BentoGridTopLayer>

					<div className='h-6'></div>

					<BentoGridWideCardWrapper>
						<WideCard />
					</BentoGridWideCardWrapper>

					<BentoGridSeperator />

					<BentoGridFeatureLookupWrapper>
						{longTermFeatureLookup.map((featureLookup) => (
							<BentoGridFeatureLookUpCard
								key={featureLookup.id}
								{...featureLookup}
							/>
						))}
					</BentoGridFeatureLookupWrapper>
				</BentoGrid>
			</LayoutWrapper> */}
    </section>
  );
};

export default LongTermPlanning;
