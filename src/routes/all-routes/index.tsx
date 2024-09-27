import { HomePage } from '@/pages';
import type { PathRouteProps } from 'react-router-dom';

// Define the header routes
export const headerRoutes: Array<PathRouteProps> = [
  {
    path: '/',
    element: <HomePage />
  }
];
