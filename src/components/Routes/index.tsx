import React, { Suspense } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import styled, { css } from 'styled-components';
import Header from '<components>/resuableSection/Header/Header';
import Footer from '<components>/resuableSection/Footer/Footer';
import LoadingSpinner from '../ui/LoadingSpinner/LoadingSpinner';
import Modal from '<components>/ui/Modal/Modal';
import Chat from '<components>/resuableSection/Chat/Chat';
import routeData from './data';


const Main = styled.main``;

const Routes = () => (
  <Router>
    <Suspense
      fallback={(
        <LoadingSpinner
          styles={css`
            position: absolute;
            height: 100vh;
            width: 100vw;
            background: pink;
            display: flex;
            align-items: center;
            justify-content: center;
          `}
        />
      )}
    >

      <Route
        path="*"
        render={({ location }) => {
          const path = location;
          const active = path.hash ? (/#!(\/.*)$/.exec(path.hash) || [])[1] : null;
          if (active) {
            return <Redirect to={active} />;
          }
          return undefined;
        }}
      />
      <Switch>
        {routeData.default.map(({ exact, path, Component }) => (
          <Route
            key={path}
            exact={exact}
            path={path}
            render={(props) => (
              <>
                <Header />
                <Main>
                  <Component {...props} />
                </Main>
              </>
            )}
          />
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
      <Footer />
      <Modal><Chat /></Modal>
    </Suspense>
  </Router>
);

export default Routes;
