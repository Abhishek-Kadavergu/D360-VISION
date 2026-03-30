import { type FC } from 'react'
import Image from 'next/image'
import SectionHeading from '@/components/sectionHeading'
import {
	BentoGrid,
	BentoGridFeatureLookupWrapper,
	BentoGridSeperator,
	BentoGridTopLayer,
	BentoGridWideCardWrapper,
} from '@/components/bento-grid'
import styles from './styles.module.css'
import BentoCardLeft from '@/components/bento-grid/components/bento-grid-card-left'
import BentoGridCardRight from '@/components/bento-grid/components/bento-grid-card-right'
import FirstCard from './components/first-card'
import SecondCard from './components/second-card'
import WideCard from './components/wide-card'
import BentoGridFeatureLookUpCard from '@/components/bento-grid/components/bento-grid-feature-lookup-card'
import { issueTrackingFeatureLookup } from './feature-lookup-data'
import LayoutWrapper from '@/components/layout-wrapper'

const IssueTracking: FC = () => {
	return (
		<section className={styles.issue__tracking}>
			<LayoutWrapper>
				<div className={styles.heading__container}>
					<div className={styles.heading__inner__container}>
						<SectionHeading
							heading='Advanced capabilities'
							badgeText='Intelligence layer'
							badgeStyle='bg-[#D4B144] border-none'
						/>

						<div>
							<p>
								<span>Speed. Accuracy. Scale.</span> Optimized for high-volume
								enterprise workloads — consistent from first page to millionth.
							</p>
						</div>
					</div>
				</div>
			</LayoutWrapper>

			<div className={styles.hero__img__wrapper}>
				<Image
					src='/issue-tracking-hero.png'
					alt=''
					width={3200}
					height={1620}
				/>
			</div>

			<LayoutWrapper>
				<BentoGrid>
					<BentoGridTopLayer>
						<BentoCardLeft
							title='Pipeline throughput'
							description='Monitor volume, latency, and completion across AI stages.'>
							<FirstCard />
						</BentoCardLeft>
						<BentoGridCardRight
							title='Review queue'
							description='Triage exceptions and edge cases before they hit downstream systems.'>
							<SecondCard />
						</BentoGridCardRight>
					</BentoGridTopLayer>

					<BentoGridWideCardWrapper>
						<WideCard />
					</BentoGridWideCardWrapper>

					<BentoGridSeperator />

					<BentoGridFeatureLookupWrapper>
						{issueTrackingFeatureLookup.map((featureLookup) => (
							<BentoGridFeatureLookUpCard
								key={featureLookup.id}
								{...featureLookup}
							/>
						))}
					</BentoGridFeatureLookupWrapper>
				</BentoGrid>
			</LayoutWrapper>
		</section>
	)
}

export default IssueTracking
