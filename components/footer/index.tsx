import { type FC } from 'react'
import Link from 'next/link'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import Logo from './logo.svg'
import { footerSections } from '@/lib/constant'
import FooterSection from './footerSection'
import styles from './styles.module.css'

const Footer: FC = () => {
	return (
		<footer className={styles.container}>
			<div className={styles.inner__container}>
				<div className={styles.left__container}>
					<Link className={styles.logo__link} href='/'>
						<span className={styles.logo}>
							<Logo />
						</span>
						<span> D360 Vision </span>
						<span className={styles.hide__mobile}> — Enterprise AI </span>
					</Link>

					<div className={styles.social__icons}>
						<Link
							href='https://www.linkedin.com/company/piazzaconsulting'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Piazza Consulting Group on LinkedIn'>
							<FaLinkedin />
						</Link>
						<Link
							href='https://www.instagram.com/piazzaconsulting/'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Piazza Consulting Group on Instagram'>
							<FaInstagram />
						</Link>
					</div>
				</div>

				{footerSections.map((section, idx) => (
					<FooterSection key={idx} {...section} />
				))}
			</div>
		</footer>
	)
}

export default Footer
