import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Navbar from './Toolbars/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './BackDrop/BackDrop';
import routes from '../Router/routes';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideDrawerOpen: false,
      navData: [
        {
          title: 'Covid19 India',
          isSelected: this.props.location.pathname === '/home' ? true : false,
          link: '/home',
          icon: '',
        },
        {
          title: 'About',
          isSelected: this.props.location.pathname === '/about' ? true : false,
          link: '/about',
          icon: 'fa fa-info-circle',
        },
        {
          title: 'Helpline',
          isSelected: this.props.location.pathname === '/helpline' ? true : false,
          link: '/helpline',
          icon: 'fa fa-phone',
        },
        {
          title: 'News',
          isSelected: this.props.location.pathname === '/news' ? true : false,
          link: '/news',
          icon: 'fas fa-newspaper',
        },
        {
          title: 'Test Centres',
          isSelected: this.props.location.pathname === '/test-center' ? true : false,
          link: '/test-center',
          icon: 'fas fa-align-center',
        },
      ],
    };
  }

  loading = () => <div>Loading...</div>;

  drawerToggleClickHandler = async () => {
    await this.setState((prevState) => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen,
      };
    });
  };

  handleClick = async (index) => {
    let navData = JSON.parse(JSON.stringify(this.state.navData));
    for (let i in navData) {
      if (navData[i].link === index.link) {
        navData[i].isSelected = true;
      } else navData[i].isSelected = false;
    }
    await this.setState({ navData });
  };

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.drawerToggleClickHandler} />;
    }
    return (
      <div>
        <Navbar
          drawerClickHandler={this.drawerToggleClickHandler}
          navClass={this.state.navData}
          addClass={this.handleClick}
        />
        <SideDrawer
          show={this.state.sideDrawerOpen}
          bacDrawer={this.drawerToggleClickHandler}
          navClass={this.state.navData}
          addClass={this.handleClick}
        />
        {backdrop}
        <main>
          <Suspense fallback={this.loading()}>
            <Switch>
              {routes.map((route, idx) => {
                return route.component ? (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => <route.component {...props} />}
                  />
                ) : null;
              })}
              <Redirect from="/" to="/home" />
            </Switch>
          </Suspense>
        </main>
      </div>
    );
  }
}

export default Main;
