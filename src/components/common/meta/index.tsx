import { Helmet } from 'react-helmet-async';
import { metadata } from '../../../config/metadata';

/**
 * Renders a Helmet component with metadata for the application.
 *
 * The metadata is sourced from the `metadata` object imported from the `../../../config/metadata` module.
 *
 * This component should be used to set the title, description, keywords, referrer, robots, and other meta tags
 * for the application, ensuring a consistent and SEO-friendly presentation across the application.
 */
const Meta = () => {
  const { applicationName, description, keywords, referrer, robots, title } = metadata;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="application-name" content={applicationName} />
      <meta name="referrer" content={referrer} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="robots" content={JSON.stringify(robots)} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={applicationName} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#6624d1" />
      <link rel="shortcut icon" href="/assets/favicon.svg" />
    </Helmet>
  );
};

export default Meta;
