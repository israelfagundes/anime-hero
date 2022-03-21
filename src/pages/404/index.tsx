import { GetStaticProps } from 'next';

function Custom404() {
  return null;
}

export default Custom404;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    redirect: {
      destination: '/',
      statusCode: 303,
    },
  };
};
