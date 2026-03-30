import { type FC } from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import { Plus } from 'lucide-react'

export type CollaborateCarouselCardProps = {
	img: string
	heading: string
	body: string
}

const CarouselCard: FC<CollaborateCarouselCardProps> = ({
	img,
	heading,
	body,
}) => {
	return (
		<div className={styles.card}>
			<div className={styles.img__container}>
				<div className={styles.img__wrapper}>
					<Image src={img} alt='' width={336} height={469} />
				</div>
			</div>

			<div className={styles.content__container}>
				<div className={styles.card__heading__container}>
					<h3> {heading} </h3>
					<p> {body} </p>
				</div>

				<button type='button' className={styles.icon__button}>
					<Plus />
				</button>
			</div>
		</div>
	)
}

export default CarouselCard
