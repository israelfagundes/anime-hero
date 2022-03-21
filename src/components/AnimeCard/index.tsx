import Link from 'next/link';
import { HiStar } from 'react-icons/hi';

type AnimeProps = {
  title: string;
  thumb: string;
  rating: string;
  url: string;
  ageRatingGuide: string;
  infoAside?: boolean;
};

type AnimeCardProps = {
  anime: AnimeProps;
};

function AnimeCard({ anime }: AnimeCardProps) {
  const { title, thumb, rating, url, infoAside, ageRatingGuide } = anime;

  return (
    <li
      className={`anime-card__root ${
        infoAside ? 'anime-card__root-info-aside' : ''
      }`}
    >
      <Link href={url}>
        <a>
          <div className="anime-card__thumb-wrapper">
            <img src={thumb} alt={title} />

            {!infoAside && (
              <div className="anime-card__anime-rating">
                {rating} <HiStar color="#fff" />
              </div>
            )}
          </div>

          <div className="anime-card__info-wrapper">
            {!infoAside && <h2>{title}</h2>}

            {infoAside && (
              <>
                <div className="anime-card__info-aside__title-wrapper">
                  <h2>{title}</h2>
                  <span>{ageRatingGuide}</span>
                </div>

                <div className="anime-card__anime-rating-outlined">
                  {rating} <HiStar color="var(--ant-primary-color)" />
                </div>
              </>
            )}
          </div>
        </a>
      </Link>
    </li>
  );
}

export default AnimeCard;
