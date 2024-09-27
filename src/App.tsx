import { BrowserRouter } from 'react-router-dom';
import Layout from './layout';
import AppRoutes from './routes';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
}
