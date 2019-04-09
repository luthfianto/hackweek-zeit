import { SidebarMainMenu } from '~/interfaces/types';

const menus: Record<string, SidebarMainMenu> = {
  first: {
    title: 'Event 1',
    path: '/first-demo',
    icon: 'docs'
  },
  second: {
    title: 'Event 2',
    path: '/second-demo',
    icon: 'dict'
  }
  ,
  third: {
    title: 'Event 3',
    path: '/second-demo',
    icon: 'dict'
  }
};

export { menus };
