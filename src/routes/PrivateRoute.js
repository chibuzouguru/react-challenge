import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { routes } from 'routes/routes';
import { PrivateLayout } from 'layouts/PrivateLayout';

class ConnectedPrivateRoute extends PureComponent {
  static propTypes = {
    component: PropTypes.node,
    location: PropTypes.object,
    user: PropTypes.object,
  };

  render() {
    const { component: Component, user, location, ...rest } = this.props;
    if (user && user.authenticated) {
      return (
        <Route
          key={location.pathname}
          {...rest}
          render={props => (
            <PrivateLayout>
              <Component {...props} />
            </PrivateLayout>
          )}
        />
      );
    }
    return (
      <Redirect
        to={{
          pathname: routes.REDIRECT,
          state: {
            from: location,
          },
        }}
      />
    );
  }
}
const mapStateToProps = state => ({
  user: state.user,
});

export const PrivateRoute = withRouter(connect(mapStateToProps)(ConnectedPrivateRoute));
