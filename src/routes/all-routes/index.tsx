import { HomePage } from '@/pages';
import type { PathRouteProps } from 'react-router-dom';

// Define the header routes
/**
 * Defines the header routes for the application.
 * The header routes are the main navigation routes that are displayed in the header of the application.
 * This array contains the path and the corresponding React component for each header route.
 */
export const headerRoutes: Array<PathRouteProps> = [
  {
    path: '/',
    element: <HomePage />
  }
];
