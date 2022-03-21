import { Layout, Menu as AntdMenu } from 'antd';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import ThemeToggler from '../../../ThemeToggler';

import { MENU_ENTRIES } from '../../../../constants';

import { useTheme } from '../../../../hooks/useTheme';

function Menu() {
  const router = useRouter();
  const { currentTheme } = useTheme();
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  const { Sider } = Layout;
  const { ItemGroup, Item } = AntdMenu;

  const [collapsed, setCollapsed] = useState(true);

  const handleNavigation = (path = '/') => {
    setCollapsed(true);
    router.push(path);
  };

  const handleCollapseMenu = useCallback(() => {
    setCollapsed(prev => !prev);
  }, []);

  return (
    <Sider
      theme={currentTheme}
      collapsed={isMobile && collapsed}
      onCollapse={handleCollapseMenu}
      collapsible={isMobile}
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
