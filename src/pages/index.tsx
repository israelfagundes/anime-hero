import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { AxiosResponse } from 'axios';
import Home, { HomeProps, VideoBannerProps } from '../components/Home';

import { anime } from '../services/anime';
import { AnimeResponse } from '../common/types/api/anime';

import { getRandomNumberFromInterval } from '../utils/getRandomNumberFromInterval';

export default function HomePage({
  topRated,
  seasonHighlights,
  bannerVideo,
}: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | Anime Hero</title>
      </Head>

      <Home
        bannerVideo={bannerVideo}
        topRated={topRated}
        seasonHighlights={seasonHighlights}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  let topRated: AnimeResponse | unknown = [];
  let trending: AnimeResponse | unknown = [];
  let bannerVideo: VideoBannerProps | unknown = {};

  await Promise.all([anime.topRated(), anime.trending()]).then(
    (res: AxiosResponse<AnimeResponse>[]) => {
      const topRatedRes = res[0];
      const trendingRes = res[1];

      if (topRatedRes.status === 200) {
        const { data } = topRatedRes;
        topRated = data;
      }

      if (trendingRes.status === 200) {
        const { data } = trendingRes;

        const randomVideo =
          data.data[getRandomNumberFromInterval(0, data.data.length)]
            .attributes;

        bannerVideo = {
          frameTitle: randomVideo.canonicalTitle,
          videoId: randomVideo.youtubeVideoId,
        } as VideoBannerProps;

        trending = data;
      }
    },
  );

  return {
    props: {
      topRated,
      seasonHighlights: trending,
      bannerVideo,
    },
  };
};
