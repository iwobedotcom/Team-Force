import { BrowserRouter } from 'react-router-dom';
import Layout from './layout';
import AppRoutes from './routes';

/**
 * The main entry point of the application. Renders the application layout and routes.
 */
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
