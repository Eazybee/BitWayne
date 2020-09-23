import HomePage from '<components>/pages/Home/Home';
import AboutPage from '<components>/pages/About/About';
import ContactPage from '<components>/pages/Contact/Contact';

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
    {
      exact: true,
      path: '/contact',
      Component: ContactPage,
    },
  ],
};

export default Routes;
