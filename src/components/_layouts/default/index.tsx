import { Layout } from 'antd';

import Menu from './Menu';

type DefaultLayoutProps = {
  children: JSX.Element;
};

function DefaultLayout({ children }: DefaultLayoutProps) {
  const { Content } = Layout;

  return (
    <Layout>
      <Menu />
      <Content className="default_layout__content-root">{children}</Content>
    </Layout>
  );
}

export default DefaultLayout;
