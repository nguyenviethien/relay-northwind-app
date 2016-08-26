import React from 'react';
import Relay from 'react-relay';
import App from './components/App';
import Page404 from './components/Page404';
import BrokenPage from './components/BrokenPage';
import LoadingPage from './components/LoadingPage';
import MainPage from './components/MainPage';

import CategoryListViewer from './components/categories/CategoryListViewer';
import CustomerConnectionViewer from './components/customers/CustomerConnectionViewer';
import EmployeeListViewer from './components/employees/EmployeeListViewer';
import OrderConnectionViewer from './components/orders/OrderConnectionViewer';
import ProductConnectionViewer from './components/products/ProductConnectionViewer';
import RegionListViewer from './components/regions/RegionListViewer';
import ShipperListViewer from './components/shippers/ShipperListViewer';
import SupplierConnectionViewer from './components/suppliers/SupplierConnectionViewer';
// import LoadingPage from 'app/components/LoadingPage/LoadingPage';
// import BrokenPage from 'app/components/BrokenPage/BrokenPage';

// import cv from 'app/cv/routes.js';

const ViewerQueries = {
  viewer: () => Relay.QL`query { viewer }`,
};

// const AppWithRelay = Relay.createContainer(App, {
//   prepareVariables(prevVars) {
//     return prevVars;
//   },
//   fragments: {
//     viewer: () => Relay.QL`fragment on Viewer {
//       ${Menu.getFragment('viewer')}
//     }`,
//   },
// });

const routes = [
  {
    path: '/',
    component: App,
    // queries: RelayQueries,
    indexRoute: {
      component: MainPage,
      // queries: RelayQueries,
    },
    childRoutes: [
      {
        path: 'categories',
        component: CategoryListViewer,
        queries: ViewerQueries,
      },
      {
        path: 'customers',
        component: CustomerConnectionViewer,
        queries: ViewerQueries,
      },
      {
        path: 'employees',
        component: EmployeeListViewer,
        queries: ViewerQueries,
      },
      {
        path: 'orders',
        component: OrderConnectionViewer,
        queries: ViewerQueries,
      },
      {
        path: 'products',
        component: ProductConnectionViewer,
        queries: ViewerQueries,
      },
      {
        path: 'regions',
        component: RegionListViewer,
        queries: ViewerQueries,
      },
      {
        path: 'shippers',
        component: ShipperListViewer,
        queries: ViewerQueries,
      },
      {
        path: 'suppliers',
        component: SupplierConnectionViewer,
        queries: ViewerQueries,
      },
      {
        path: '*',
        component: Page404,
      },
    ],
  },
];


// add loaders and error catcher for all routes, also for nested routes if will exist
function addLoaderForRelayComponents(routeList) {
  function addLoader(route) {
    if (route.queries && route.component && !route.render) {
      route.render = (o) => { // eslint-disable-line
        if (o.props) {
          return React.createElement(route.component, o.props);
        }

        if (o.error) {
          return <BrokenPage message={o.error.message} />;
        }

        return <LoadingPage />;
      };
    }
  }

  routeList.forEach(route => {
    if (route.indexRoute) {
      addLoader(route.indexRoute);
    }
    addLoader(route);

    if (route.childRoutes && Array.isArray(route.childRoutes)) {
      addLoaderForRelayComponents(route.childRoutes);
    }
  });
}
addLoaderForRelayComponents(routes);


export default routes;