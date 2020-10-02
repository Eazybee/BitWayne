import { FC } from 'react';
import { RouteChildrenProps } from 'react-router-dom';
import loadable, { LoadableComponent } from '@loadable/component';
import LoadingSpinner from '<components>/ui/LoadingSpinner/LoadingSpinner';
import HomePage from '<components>/pages/Home/Home';
import AboutPage from '<components>/pages/About/About';
import ContactPage from '<components>/pages/Contact/Contact';


type RouteData = {
  default: {
    exact: boolean;
    path: string;
    protected?: boolean;
    Component: (FC<RouteChildrenProps<any, any>>)
    | ((prop?: any) => JSX.Element) | LoadableComponent<unknown>;
  }[];
};

const RatesPage = loadable(
  () => import('<components>/pages/Rates/Rates'),
  {
    // @ts-ignore
    fallback: LoadingSpinner,
  },
);

const Routes: RouteData = {
  default: [
    {
      exact: true,
      path: '/',
      Component: HomePage,
    },
    {
      exact: true,
      path: '/about',
      Component: AboutPage,
    },
    {
      exact: true,
      path: '/contact',
      Component: ContactPage,
    },
    {
      exact: true,
      path: '/rates',
      Component: RatesPage,
    },
  ],
};

export default Routes;
