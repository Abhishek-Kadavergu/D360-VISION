import { type FC } from 'react'
import styles from './styles.module.css'

const SectionHeading: FC = () => {
	return (
		<div className={styles.top__container}>
			<div className={styles.heading}>
				<h2>Intelligence, not extraction.</h2>
			</div>

			<div className={styles.description}>
				<p>
					D360 Vision pairs vision and language in one enterprise-grade engine —
					built for accuracy, clarity, and throughput.
				</p>
			</div>
		</div>
	)
}

export default SectionHeading
