import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';

// Define your website's URL
const siteUrl = 'https://example.com';

// Define your routes
const routes = [
  '/'
  // Add more routes as needed
];

// Create a stream to write to
const stream = new SitemapStream({ hostname: siteUrl });

// Add the routes to the sitemap
routes.forEach((route) => {
  stream.write({ url: route, changefreq: 'daily', priority: 0.7 });
});

// End the stream
stream.end();

// Generate sitemap XML
streamToPromise(Readable.from(stream)).then((data) => {
  createWriteStream('./public/sitemap.xml').write(data.toString());
});
