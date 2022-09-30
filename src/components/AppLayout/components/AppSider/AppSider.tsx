import { APP_ROUTES } from '@/constants/routes';
import XfersLogo from '@/icons/XfersLogo';
import { Grid, Layout, Menu } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from './AppSider.module.scss';
import { SIDE_MENU_ITEM_KEYS } from './constants';
import { getAppSiderMenu, getSelectedSideBarMenuKey } from './helpers';

function AppSider() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const previousCollapsedRef = useRef(false);
  const menuItems = getAppSiderMenu();
  const selectedKeys = getSelectedSideBarMenuKey(location.pathname);

  // Responsive
  const screens = Grid.useBreakpoint();

  useEffect(() => {
    if (screens.xs) {
      setCollapsed(true);
    } else {
      setCollapsed(previousCollapsedRef.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screens]);
  //

  // Handlers
  const handleCollapse = (isCollapse: boolean) => {
    previousCollapsedRef.current = isCollapse;
    setCollapsed(isCollapse);
  };

  return (
    <Layout.Sider className={s.sidebarWrapper} collapsible collapsed={collapsed} onCollapse={handleCollapse}>
      <div className={s.logoArea}>
        <div className={s.logoOuter}>
          <Link to={APP_ROUTES.ACCOUNT_LIST.getRoute()}>
            <div className={s.logoWrapper}>
              <XfersLogo className={s.logoImg} />
            </div>
          </Link>
        </div>
      </div>

      <div className={s.menuArea}>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[SIDE_MENU_ITEM_KEYS.ACCOUNTS]}
          selectedKeys={selectedKeys}
          items={menuItems}
        />
      </div>
    </Layout.Sider>
  );
}

export default AppSider;
