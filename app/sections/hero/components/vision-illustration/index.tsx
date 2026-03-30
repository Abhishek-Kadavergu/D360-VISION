import { type FC } from 'react'
import styles from './styles.module.css'

const FlowArrows: FC = () => (
	<svg
		className={styles.flow__svg}
		viewBox='0 0 120 240'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden>
		<defs>
			<linearGradient id='flowGrad' x1='0' y1='0' x2='120' y2='0'>
				<stop stopColor='rgba(255,255,255,0.08)' />
				<stop offset='0.5' stopColor='rgba(104,204,88,0.45)' />
				<stop offset='1' stopColor='rgba(255,255,255,0.12)' />
			</linearGradient>
		</defs>
		<path
			d='M20 40 H60 L100 120 L60 200 H20'
			stroke='url(#flowGrad)'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
			fill='none'
		/>
		<circle cx='100' cy='120' r='6' fill='rgba(104,204,88,0.35)' />
		<circle cx='100' cy='120' r='12' stroke='rgba(104,204,88,0.2)' strokeWidth='1' fill='none' />
	</svg>
)

const DocIcon: FC = () => (
	<svg
		width='20'
		height='20'
		viewBox='0 0 24 24'
		fill='none'
		className={styles.icon}
		aria-hidden>
		<path
			d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z'
			stroke='currentColor'
			strokeWidth='1.25'
		/>
		<path d='M14 2v6h6' stroke='currentColor' strokeWidth='1.25' />
	</svg>
)

const ImageIcon: FC = () => (
	<svg
		width='20'
		height='20'
		viewBox='0 0 24 24'
		fill='none'
		className={styles.icon}
		aria-hidden>
		<rect x='3' y='5' width='18' height='14' rx='2' stroke='currentColor' strokeWidth='1.25' />
		<circle cx='8.5' cy='10' r='1.5' fill='currentColor' />
		<path
			d='M21 15l-5-5-4 4-3-3-4 4'
			stroke='currentColor'
			strokeWidth='1.25'
			strokeLinecap='round'
		/>
	</svg>
)

const GridIcon: FC = () => (
	<svg
		width='20'
		height='20'
		viewBox='0 0 24 24'
		fill='none'
		className={styles.icon}
		aria-hidden>
		<path
			d='M4 4h7v7H4V4zm9 0h7v7h-7V4zm-9 9h7v7H4v-7zm9 0h7v7h-7v-7z'
			stroke='currentColor'
			strokeWidth='1.25'
		/>
	</svg>
)

const VisionIllustration: FC = () => {
	return (
		<div className={styles.root}>
			<div className={styles.column}>
				<div className={styles.column__title}>Unstructured input</div>
				<div className={styles.stack}>
					<div className={styles.input__card}>
						<div className={styles.input__card__top}>
							<DocIcon />
							<span className={styles.input__card__label}>Documents</span>
						</div>
						<div className={styles.input__lines}>
							<span />
							<span />
							<span className={styles.input__lines__short} />
						</div>
					</div>
					<div className={styles.input__card}>
						<div className={styles.input__card__top}>
							<ImageIcon />
							<span className={styles.input__card__label}>Images</span>
						</div>
						<div className={styles.input__thumb} />
					</div>
					<div className={styles.input__card}>
						<div className={styles.input__card__top}>
							<GridIcon />
							<span className={styles.input__card__label}>Enterprise data</span>
						</div>
						<div className={styles.mini__table}>
							{Array.from({ length: 6 }).map((_, i) => (
								<div key={i} className={styles.mini__table__cell} />
							))}
						</div>
					</div>
				</div>
			</div>

			<div className={styles.flow}>
				<FlowArrows />
				<span className={styles.flow__badge}>Vision + Language</span>
			</div>

			<div className={styles.column}>
				<div className={styles.column__title}>Structured intelligence</div>
				<div className={styles.output__panel}>
					<pre className={styles.output__code}>
						{`{
  "entities": [...],
  "tables": [...],
  "confidence": 0.99,
  "layout": {...}
}`}
					</pre>
					<div className={styles.output__meta}>
						<span className={styles.pill}>JSON</span>
						<span className={styles.pill}>API-ready</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default VisionIllustration
