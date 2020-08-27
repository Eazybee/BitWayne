import HomePage from '<components>/pages/Home';

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
  ],
};

export default Routes;
