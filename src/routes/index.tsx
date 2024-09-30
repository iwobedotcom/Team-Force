import { PathRouteProps } from 'react-router-dom';
import { headerRoutes } from './all-routes';
import { Suspense } from 'react';
import { Routes, Route as ReactRoute } from 'react-router-dom';
import { AppLoader } from '@/components';
import { NotFoundPage } from '@/pages';

/**
 * Renders an array of route configurations as React Router `Route` components.
 *
 * @param routes - An array of `PathRouteProps` objects, each representing a route configuration.
 * @returns An array of `Route` components, one for each route configuration in the input array.
 */
const renderRoutes = (routes: PathRouteProps[]) => {
  return routes.map((route, index) => {
    const Component = route.element;
    return <ReactRoute key={index} path={route.path} element={Component} />;
  });
};

/**
 * Renders the main application routes, including the header routes and a fallback route for 404 pages.
 *
 * The `AppRoutes` function is responsible for setting up the main application routes using React Router. It wraps the routes in a `Suspense` component to display a loading indicator while the routes are being loaded. The `headerRoutes` array is rendered using the `renderRoutes` function, which maps each route configuration to a `Route` component. Finally, a catch-all route is added to handle 404 pages, rendering the `NotFoundPage` component.
 */
const AppRoutes = () => {
  return (
    <Suspense fallback={<AppLoader />}>
      <Routes>
        {renderRoutes(headerRoutes)}
        <ReactRoute path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
