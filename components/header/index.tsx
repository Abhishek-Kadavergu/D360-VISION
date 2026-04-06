'use client'

import { type FC, useState, useEffect } from 'react'
import Link from 'next/link'
import { GET_STARTED_PATH } from '@/lib/routes'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import styles from './styles.module.css'

const Header: FC = () => {
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}
	}, [isOpen])

	return (
		<div className={cn(styles.header, isOpen && styles.menu__open)}>
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
									'!hidden sm:!flex',
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
									'!hidden sm:!flex'
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
								<button 
									type='button' 
									aria-label={isOpen ? 'Close menu' : 'Open menu'}
									onClick={() => setIsOpen(!isOpen)}
								>
									{isOpen ? <X size={20} /> : <Menu size={20} />}
								</button>
							</li>
						</ul>

						{/* Mobile Menu */}
						<div className={styles.mobile__nav}>
							<Link className={styles.mobile__nav__link} href='/#platform' onClick={() => setIsOpen(false)}>
								Platform
							</Link>
							<Link className={styles.mobile__nav__link} href='/#capabilities' onClick={() => setIsOpen(false)}>
								Capabilities
							</Link>
							<Link className={styles.mobile__nav__link} href='/#use-cases' onClick={() => setIsOpen(false)}>
								Use Cases
							</Link>
							<Link className={styles.mobile__nav__link__primary} href={GET_STARTED_PATH} onClick={() => setIsOpen(false)}>
								Get Started
								<span aria-hidden="true">&rarr;</span>
							</Link>
						</div>
					</div>
				</nav>
			</header>
		</div>
	)
}

export default Header
