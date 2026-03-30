import { type FC } from 'react'
import { type FooterSection } from '@/lib/constant'
import styles from './styles.module.css'
import Link from 'next/link'

const isExternal = (href: string) => /^https?:\/\//i.test(href)

const FooterSection: FC<FooterSection> = ({ items, title }) => {
	return (
		<div className={styles.footer__section}>
			<h3 className={styles.footer__section__title}> {title} </h3>
			<ul className={styles.footer__section__list}>
				{items.map(({ id, item, link }) => (
					<li key={id} className={styles.item}>
						<Link
							href={link}
							{...(isExternal(link)
								? {
										target: '_blank',
										rel: 'noopener noreferrer',
									}
								: {})}>
							{item}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default FooterSection
