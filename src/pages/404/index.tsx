import React from 'react';
import { Link } from 'react-router-dom';
/**
 * Renders a 404 (Not Found) page component.
 *
 * This component is responsible for displaying a user-friendly 404 error page
 * when a requested page is not found. It includes a centered layout with a
 * title, description, and a link to return to the homepage.
 */
const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <h1 className="mt-6 text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Oops! Page not found
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <svg
            className="mx-auto h-40 w-auto text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/85"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
