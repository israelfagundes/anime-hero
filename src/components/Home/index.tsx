import { AnimeResponse } from '../../common/types/api/anime';

import AnimeCard from '../AnimeCard';
import VideoBanner from '../VideoBanner';

export type VideoBannerProps = {
  frameTitle: string;
  videoId: string;
};

export type HomeProps = {
  topRated: AnimeResponse;
  seasonHighlights: AnimeResponse;
  bannerVideo: VideoBannerProps;
};

function Home({ topRated, seasonHighlights, bannerVideo }: HomeProps) {
  return (
    <div className="home__dashboard">
      <VideoBanner
        frameTitle={bannerVideo.frameTitle}
        videoId={bannerVideo.videoId}
      />

      <div className="home__highlights">
        <h3>Top Rated Animes</h3>

        <ul className="home__anime-list">
          {topRated.data?.map(({ attributes, id }) => {
            const {
              ageRatingGuide,
              averageRating,
              canonicalTitle,
              posterImage,
            } = attributes;

            return (
              <AnimeCard
                key={id}
                anime={{
                  ageRatingGuide,
                  rating: String((Number(averageRating) / 10).toFixed(2)),
                  thumb: posterImage.small,
                  title: canonicalTitle,
                  url: `/anime/${id}`,
                }}
              />
            );
          })}
        </ul>
      </div>

      <div className="home__highlights">
        <h3>Season Highlights</h3>

        <ul className="home__anime-list">
          {seasonHighlights.data?.map(({ attributes, id }) => {
            const {
              ageRatingGuide,
              averageRating,
              canonicalTitle,
              posterImage,
            } = attributes;

            return (
              <AnimeCard
                anime={{
                  ageRatingGuide,
                  rating: String((Number(averageRating) / 10).toFixed(2)),
                  thumb: posterImage.small,
                  title: canonicalTitle,
                  url: `/anime/${id}`,
                }}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Home;
