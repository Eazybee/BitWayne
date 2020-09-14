import HomePage from '<components>/pages/Home/Home';
import AboutPage from '<components>/pages/About/About';

type RouteData = {
  default: {
    exact: boolean;
    path: string;
    protected?: boolean;
    Component: (prop?: any) => JSX.Element;
  }[];
};

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
  ],
};

export default Routes;
