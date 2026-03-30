import { type FC } from 'react'
import Link from 'next/link'
import { GET_STARTED_PATH } from '@/lib/routes'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import styles from './styles.module.css'

const Header: FC = () => {
	return (
		<div className={styles.header}>
			<div className={styles.header__blur__mask}></div>
			<div className={styles.header__overlay}></div>
			<header className={styles.header__wrapper}>
				<nav className={styles.header__root}>
					<div className={styles.header__inner}>
						<ul className={styles.header__list}>
							<li className={cn(styles.header__brand, styles.header__item)}>
								<Link href='/' className={styles.header__brand__link}>
									<span className={styles.header__brand__text}>D360 VISION</span>
								</Link>
							</li>

							<li
								className={cn(
									styles.header__nav,
									styles.hide__mobile,
									styles.header__item,
								)}>
								<Link className={styles.header__link} href='/#platform'>
									Platform
								</Link>
								<Link className={styles.header__link} href='/#capabilities'>
									Capabilities
								</Link>
								<Link className={styles.header__link} href='/#use-cases'>
									Use Cases
								</Link>
							</li>

							<li
								className={cn(
									styles.header__item,
									styles.header__button,
									styles.header__signup,
								)}>
								<Link
									className={cn(styles.header__link, styles.button__signup)}
									href={GET_STARTED_PATH}>
									Get Started
								</Link>
							</li>

							<li
								className={cn(
									styles.header__item,
									styles.header__button,
									styles.header__menu,
								)}>
								<button type='button' aria-label='Open menu'>
									<Menu />
								</button>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		</div>
	)
}

export default Header
