import React from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import {useNavbarSecondaryMenu} from '@docusaurus/theme-common/internal';
import {useLocation} from '@docusaurus/router';

function getBackLabel(pathname: string): string {
  // Determine first path segment to infer language, e.g. /cn/..., /ja/..., /es/...
  const firstSegment = pathname.split('/').filter(Boolean)[0];
  switch (firstSegment) {
    case 'cn':
      return '返回主菜单';
    case 'ja':
      return 'メインメニューに戻る';
    case 'es':
      return 'Volver al menú principal';
    default:
      return 'Back to main menu';
  }
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

function SecondaryMenuBackButton(props: ButtonProps) {
  const {pathname} = useLocation();
  const label = getBackLabel(pathname);
  return (
    <button {...props} type="button" className="clean-btn navbar-sidebar__back">
      {`← ${label}`}
    </button>
  );
}

// The secondary menu slides from the right and shows contextual information
// such as the docs sidebar
export default function NavbarMobileSidebarSecondaryMenu() {
  const isPrimaryMenuEmpty = useThemeConfig().navbar.items.length === 0;
  const secondaryMenu = useNavbarSecondaryMenu();
  return (
    <>
      {/* edge-case: prevent returning to the primaryMenu when it's empty */}
      {!isPrimaryMenuEmpty && (
        <SecondaryMenuBackButton onClick={() => secondaryMenu.hide()} />
      )}
      {secondaryMenu.content}
    </>
  );
}

