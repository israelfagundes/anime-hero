import { Rate } from 'antd';
import { useMemo } from 'react';

import { AnimeResponseData } from '../../common/types/api/anime';
import VideoBanner from '../VideoBanner';

type AnimeProps = {
  anime: AnimeResponseData;
};

function Anime({ anime }: AnimeProps) {
  const { attributes } = anime;

  const averageRating = useMemo(() => {
    return Number(attributes.averageRating) / 10 / 2;
  }, [attributes]);

  return (
    <div className="home__dashboard">
      <article className="anime__content__root">
        <header className="anime__content__title-wrapper">
          <span>
            <h1>{attributes.canonicalTitle}</h1>
            <span>{attributes.status}</span>
          </span>

          <h3>{attributes.titles.ja_jp}</h3>

          <span>
            {attributes.ageRating}{' '}
            {attributes.ageRatingGuide && `- ${attributes.ageRatingGuide}`}
          </span>

          <Rate disabled allowHalf defaultValue={averageRating} />
        </header>

        <div className="anime__content__anime-synopsis">
          <div className="anime-synopsis__image-wrapper">
            <img
              src={attributes.posterImage.medium}
              alt={attributes.canonicalTitle}
              style={{ width: '100%', height: '100%' }}
            />
          </div>

          <section className="anime-synopsis__text">
            <h3>About: </h3>
            <p>{attributes.synopsis}</p>
            <p>Duration: {attributes.episodeLength} per episode</p>
            <p>Episodes: {attributes.episodeCount || '?'}</p>
          </section>
        </div>

        <section className="anime__content__anime-info">
          <div className="anime-info__trailer-wrapper">
            <VideoBanner
              frameTitle={attributes.canonicalTitle}
              videoId={attributes.youtubeVideoId}
            />
          </div>
        </section>
      </article>
    </div>
  );
}

export default Anime;
