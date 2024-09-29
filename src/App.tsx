import { BrowserRouter } from 'react-router-dom';
import Layout from './layout';
import AppRoutes from './routes';

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
