import { GetServerSideProps } from 'next';

import { Anime as AnimeProps } from '../../common/types/api/anime';
import Anime from '../../components/Anime';

import { anime } from '../../services/anime';

type AnimePageProps = {
  animeData: AnimeProps;
};

function AnimePage({ animeData }: AnimePageProps) {
  return <Anime anime={animeData} />;
}

export default AnimePage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (query.id) {
    const response = await anime.show(query.id as string);

    if (response.status === 200) {
      const { data } = response;

      return {
        props: {
          animeData: data.data,
        },
      };
    }
  }

  return {
    props: {
      animeData: {} as AnimeProps,
    },
  };
};
