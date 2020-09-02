import React, { Suspense } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import { css } from 'styled-components';
import LoadingSpinner from '../ui/LoadingSpinner/LoadingSpinner';
import routeData from './data';

const Routes = () => (
  <Router>
    <Suspense
      fallback={(
        <LoadingSpinner
          styles={css`
            position: fixed;
            top: 50%;
            right: 50%;
            margin-left: 30;
            margin-bottom: 30;
          `}
        />
      )}
    >
      <Switch>
        {routeData.default.map(({ exact, path, Component }) => (
          <Route key={path} exact={exact} path={path} component={Component} />
        ))}
        <Route
          path="*"
          render={({ location }) => (
            <Redirect
              to={{
                pathname: '/',
                state: { from: location },
              }}
            />
          )}
        />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
