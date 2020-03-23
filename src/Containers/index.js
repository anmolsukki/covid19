import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
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
        },
        {
          title: 'Helpline',
          isSelected: this.props.location.pathname === '/helpline' ? true : false,
          link: '/helpline',
        },
        {
          title: 'About',
          isSelected: this.props.location.pathname === '/about' ? true : false,
          link: '/about',
        },
        // {
        //   title: 'Test Centres',
        //   isSelected: this.props.location.pathname === '/pnr-status' ? true : false,
        //   link: '/pnr-status',
        // },
        // {
        //   title: 'Sources',
        //   isSelected: this.props.location.pathname === '/train-schedule' ? true : false,
        //   link: '/train-schedule',
        // },
      ],
    };
  }

  loading = () => <div>Loading...</div>;

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen,
      };
    });
  };

  backDropClickHandler = async () => {
    await this.setState({
      sideDrawerOpen: false,
    });
  };

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backDropClickHandler} />;
    }
    return (
      <div>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} navClass={this.state.navData} />
        <SideDrawer
          show={this.state.sideDrawerOpen}
          bacDrawer={this.backDropClickHandler}
          navClass={this.state.navData}
        />
        {backdrop}
        <Container fluid>
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
        </Container>
      </div>
    );
  }
}

export default Main;
