import { type FC } from "react";
import styles from "./styles.module.css";
import CarouselCard from "../carouselCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCaseCards } from "@/lib/constant";

const Carousel: FC = () => {
  return (
    <div className={styles.container}>
      <div>
        {/* <div className={styles.carousel__container}>
					<div className={styles.carousel__inner__container}>
						{useCaseCards.map((card) => (
							<CarouselCard key={card.id} {...card} />
						))}
					</div>
				</div> */}

        {/* <div className={styles.card__controls__container}>
          <button type="button" className={styles.icon__button}>
            <ChevronLeft />
          </button>
          <button type="button" className={styles.icon__button}>
            <ChevronRight />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Carousel;
