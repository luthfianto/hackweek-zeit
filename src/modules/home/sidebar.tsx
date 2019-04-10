import { SidebarSub, SidebarSubMenu } from '@kata-kit/layout';
import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import SidebarSubTitle from '../core/components/SidebarSubTitle';

const links = [
  { title: "Speakers", icon: "users", isExact: true },
  { title: "Stage", icon: "nlu", link: "stage-list" },
  { title: "Schedule", icon: "trait", link: "schedule-list" },
  { title: "Dashboard", icon: "dashboard" },
  { title: "Ticket", icon: "view" },
  { title: "FAQ", icon: "training" },
  { title: "Event", icon: "success" },
]

const SidebarEvent1: React.FC<RouteComponentProps> = ({ match }) => (
  <SidebarSub titleElement={<SidebarSubTitle>Sidebar</SidebarSubTitle>}>
    {links.map((value: any, index) =>
      <SidebarSubMenu
        key={index} exact={value.isExact} asNavLink to={"/" + (value.link || value.title.toLowerCase())} icon={value.icon}>
        {value.title}
      </SidebarSubMenu>
    )}
  </SidebarSub>
);

export default withRouter(SidebarEvent1);
