import { SidebarSub, SidebarSubMenu } from '@kata-kit/layout';
import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import SidebarSubTitle from '../core/components/SidebarSubTitle';

const links = [
  { title: "Dashboard", icon: "bot" },
  { title: "Stage", icon: "nlu" },
  { title: "Schedule", icon: "bot" },
  { title: "Speaker", icon: "bot" },
  { title: "Ticket", icon: "bot" },
  { title: "FAQ", icon: "bot" },
  { title: "Event", icon: "bot" },
]

const HomeSidebar: React.FC<RouteComponentProps> = ({ match }) => (
  <SidebarSub titleElement={<SidebarSubTitle>Sidebar</SidebarSubTitle>}>
    <SidebarSubMenu asNavLink exact to={`/first-demo/`} icon="bot">First Page</SidebarSubMenu>
    {links.map((value: any, index) =>
        <SidebarSubMenu key={index} asNavLink to={"/" + value.title.toLowerCase()} icon={value.icon}>{value.title}</SidebarSubMenu>
    )}
  </SidebarSub>
);

export default withRouter(HomeSidebar);
