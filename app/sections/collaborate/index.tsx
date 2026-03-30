import { type FC } from 'react'
import styles from './styles.module.css'
import SectionHeading from '@/components/sectionHeading'
import Carousel from './components/carousel'
import LayoutWrapper from '@/components/layout-wrapper'

const Collaborate: FC = () => {
	return (
		<section
			id='use-cases'
			className={`${styles.collaborate} scroll-mt-[calc(var(--header-top)+var(--header-height)+12px)]`}
		>
			<LayoutWrapper>
				<div className={styles.heading__container}>
					<div className={styles.heading__inner__container}>
						<SectionHeading
							heading='Built for Real-World Data Complexity.'
							badgeText='Industries'
							badgeStyle='bg-[#b59aff] border-none'
						/>
					</div>

					<div className={styles.heading__text__container}>
						<p>
							<span>One intelligence engine.</span> From finance to healthcare,
							D360 Vision turns messy inputs into reliable structured data.
						</p>
					</div>
				</div>
			</LayoutWrapper>

			<div className={styles.carousel__container}>
				<Carousel />
			</div>
		</section>
	)
}

export default Collaborate
