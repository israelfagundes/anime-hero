import { useState } from 'react';
import { Layout, Menu as AntdMenu } from 'antd';
import { useRouter } from 'next/router';

import ThemeToggler from '../../../ThemeToggler';

import { MENU_ENTRIES } from '../../../../constants';

import { useTheme } from '../../../../hooks/useTheme';
import { ThemeModes } from '../../../../contexts/theme';

function Menu() {
  const router = useRouter();
  const { currentTheme } = useTheme();

  // const [, updateState] = useState<unknown>();
  // const forceUpdate = useCallback(() => {
  //   updateState({});
  // }, []);

  const { Sider } = Layout;
  const { ItemGroup, Item } = AntdMenu;

  const handleNavigation = (path = '/') => {
    router.push(path);
  };

  return (
    <Sider
      theme={currentTheme}
      breakpoint="md"
      collapsedWidth="0"
      style={{
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 1,
      }}
    >
      <AntdMenu
        theme={currentTheme}
        mode="inline"
        defaultSelectedKeys={['Home']}
        className="menu__root"
      >
        <div className="menu__theme-toggler-wrapper">
          <ThemeToggler />
        </div>

        {MENU_ENTRIES.map(({ section, items }) => (
          <ItemGroup className="menu__item-group" key={section} title={section}>
            {items.map(({ icon: Icon, title, pathname }) => {
              return (
                <Item
                  className="menu__entry__menuItem"
                  key={title}
                  onClick={() => handleNavigation(pathname)}
                >
                  <Icon size={20} />
                  {title}
                </Item>
              );
            })}
          </ItemGroup>
        ))}
      </AntdMenu>
    </Sider>
  );
}

export default Menu;
