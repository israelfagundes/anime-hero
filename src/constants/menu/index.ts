import { IconType } from 'react-icons';
import {
  HiHome,
  HiShieldCheck,
  HiUserCircle,
  HiClock,
  HiFolderDownload,
  HiTicket,
  HiVideoCamera,
  HiLogout,
  HiCog,
} from 'react-icons/hi';

type MenuSections = 'Menu' | 'Category' | 'Library' | 'General';

export type ItemTitles =
  | 'Home'
  | 'Community'
  | 'Celebs Speakers'
  | 'Movies'
  | 'Serials'
  | 'Recent'
  | 'Downloaded'
  | 'Settings'
  | 'Log Out';

type MenuEntries = Array<{
  section: MenuSections;
  items: Array<{
    title: ItemTitles;
    icon: IconType;
    pathname?: string;
  }>;
}>;

export const MENU_ENTRIES: MenuEntries = [
  {
    section: 'Menu',
    items: [
      {
        title: 'Home',
        icon: HiHome,
        pathname: '/',
      },
      {
        title: 'Community',
        icon: HiShieldCheck,
      },
      {
        title: 'Celebs Speakers',
        icon: HiUserCircle,
      },
    ],
  },
  {
    section: 'Category',
    items: [
      {
        title: 'Movies',
        icon: HiTicket,
      },
      {
        title: 'Serials',
        icon: HiVideoCamera,
      },
    ],
  },
  {
    section: 'Library',
    items: [
      {
        title: 'Recent',
        icon: HiClock,
      },
      {
        title: 'Downloaded',
        icon: HiFolderDownload,
      },
    ],
  },
  {
    section: 'General',
    items: [
      {
        title: 'Settings',
        icon: HiCog,
      },
      {
        title: 'Log Out',
        icon: HiLogout,
      },
    ],
  },
];
