import { type Metadata } from 'next'
import LayoutWrapper from '@/components/layout-wrapper'
import GetStartedForm from './get-started-form'
import styles from './styles.module.css'

export const metadata: Metadata = {
	title: 'Get started — D360 Vision',
	description:
		'Request a demo or get started with D360 Vision. Tell us about your enterprise vision AI needs.',
}

const GetStartedPage = () => {
	return (
		<main className={styles.main}>
			<LayoutWrapper>
				<div className={styles.inner}>
					<h1 className={styles.title}>Request a demo</h1>
					<p className={styles.lede}>
						Share your details and we’ll follow up with next steps for D360
						Vision.
					</p>
					<GetStartedForm />
				</div>
			</LayoutWrapper>
		</main>
	)
}

export default GetStartedPage
