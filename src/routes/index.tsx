import { PathRouteProps } from 'react-router-dom';
import { headerRoutes } from './all-routes';
import { Suspense } from 'react';
import { Routes, Route as ReactRoute } from 'react-router-dom';
import { AppLoader } from '@/components';
import { NotFoundPage } from '@/pages';

const renderRoutes = (routes: PathRouteProps[]) => {
  return routes.map((route, index) => {
    const Component = route.element;
    return <ReactRoute key={index} path={route.path} element={Component} />;
  });
};

function AppRoutes() {
  return (
    <Suspense fallback={<AppLoader />}>
      <Routes>
        {renderRoutes(headerRoutes)}
        <ReactRoute path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
