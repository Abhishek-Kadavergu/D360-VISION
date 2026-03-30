import { type FC } from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import LayoutWrapper from '@/components/layout-wrapper'

const PreFooter: FC = () => {
	return (
		<section
			id='cta'
			className={`${styles.prefooter} scroll-mt-[calc(var(--header-top)+var(--header-height)+12px)]`}
		>
			<LayoutWrapper>
				<div className={styles.grid__container}>
					<div className=''>
						<h3 className={styles.heading}>
							Stop Reading Data.
							<br />
							Start Understanding It.
						</h3>
						<p className={styles.subtext}>
							Move beyond OCR and unlock true AI-powered intelligence with D360
							Vision.
						</p>
					</div>

					<div className={styles.links__outter__container}>
						<div className={styles.links__inner__container}>
							<Link className={styles.get__started__link} href='/'>
								Request Demo
							</Link>
							<Link className={styles.talk__to__sales} href='/'>
								Get Started
							</Link>
						</div>
					</div>
				</div>
			</LayoutWrapper>
		</section>
	)
}

export default PreFooter
