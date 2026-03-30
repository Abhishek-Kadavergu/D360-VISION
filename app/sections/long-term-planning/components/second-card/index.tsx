import { ReactNode, type FC } from 'react'
import styles from './styles.module.css'
import Electric from '@/assets/electric.svg'
import OffTrack from '@/assets/off-track.svg'
import AtRisk from '@/assets/at-risk.svg'

const updateCards: UpdateCardProps[] = [
	{
		id: 'update-card-1',
		badge: <OffTrack />,
		badgeTitle: 'Needs review',
		title: 'Low confidence on nested tables in appendix pages…',
		time: 'Live',
	},
	{
		id: 'update-card-2',
		badge: <AtRisk />,
		badgeTitle: 'Queued',
		title: 'Handwritten amendments detected — routing to human review…',
		time: 'Live',
	},
	{
		id: 'update-card-3',
		badge: <Electric />,
		badgeTitle: 'Validated',
		title: 'Structured JSON emitted to downstream API',
		time: 'Now',
	},
]

const SecondCard: FC = () => {
	return (
		<div className={styles.project__update__card}>
			<div className={styles.inner__container}>
				{updateCards.map((updateCard) => (
					<UpdateCard key={updateCard.id} {...updateCard} />
				))}
			</div>
		</div>
	)
}

type UpdateCardProps = {
	id: string
	badge: ReactNode
	badgeTitle: string
	title: string
	time: string
}

const UpdateCard: FC<UpdateCardProps> = ({
	badge,
	badgeTitle,
	title,
	time,
}) => {
	return (
		<div className={styles.update__card}>
			<div className={styles.inner__container}>
				<div className={styles.badge__container}>
					{badge}
					<span> {badgeTitle} </span>
				</div>
				<span className={styles.update__text}>{title}</span>
				<span className={styles.update__time}> {time} </span>
			</div>
		</div>
	)
}

export default SecondCard
