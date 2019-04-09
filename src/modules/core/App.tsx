import { Content, Sidebar, SidebarAndContent, SidebarMain, SidebarMainMenu, Topbar, Wrapper } from '@kata-kit/layout';
import { Robot } from '@kata-kit/loading';
import * as React from 'react';
import { Redirect, Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import HomeSidebar from '../home/sidebar';
import Logo from './components/Logo';
import Selector from './components/Selector';
import * as sidebar from './sidebar';

import 'bootstrap/dist/css/bootstrap.min.css';


// Modules
const HomeModule = React.lazy(() => import('../home'));
const AboutModule = React.lazy(() => import('../about'));

const ScheduleModule = React.lazy(() => import('../schedule'));

class App extends React.Component<RouteComponentProps> {
  public render() {
    const currLoc = this.getCurrentLocation();

    return (
      <Wrapper>
        <Topbar logoContent={<Logo />}></Topbar>
        <SidebarAndContent hasTop>
          <Sidebar hasTop collapsed={this.isSidebarCollapsed()}>
            <SidebarMain hasTop>
              {Object.keys(sidebar.menus).map(menu => (
                <React.Fragment key={menu}>
                  <SidebarMainMenu
                    asNavLink
                    exact={sidebar.menus[menu].isExact}
                    to={sidebar.menus[menu].path}
                    icon={sidebar.menus[menu].icon}
                  >
                    {sidebar.menus[menu].title}
                  </SidebarMainMenu>
                </React.Fragment>
              ))}
            </SidebarMain>
            {!this.isSidebarCollapsed() && (
              <React.Fragment>
                {currLoc ? this.getSidebarSub(currLoc) : null}
              </React.Fragment>
            )}
          </Sidebar>
          <Content>
            <React.Suspense fallback={<Robot />}>
              <Switch>
                <Route path="/first-demo" component={HomeModule} />
                <Route path="/second-demo" component={AboutModule} />
                <Route path="/schedule" component={ScheduleModule} />
                <Route render={() => <Redirect to="/first-demo" />} />
              </Switch>
            </React.Suspense>
          </Content>
        </SidebarAndContent>
      </Wrapper>
    );
  }

  private isSidebarCollapsed() {
    return this.props.location.pathname.search(/first-demo/) === -1;
    // return false;
  }

  private getCurrentLocation() {
    const locations =
      this.props.location && this.props.location.pathname
        ? this.props.location.pathname.split('/')
        : [];
    return locations.length > 1 ? locations[1] : undefined;
  }

  private getSidebarSub(location: string) {
    switch (location) {
      case 'first-demo': {
        return <HomeSidebar />;
      }
      default: {
        return null;
      }
    }
  }
}

export default withRouter(App);
