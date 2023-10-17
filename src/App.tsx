
import './style.css';
import { Layout } from './components/Includes/Layout';
import { HomePage } from './pages/Homepage';


export const App = () => {
  return (
    <div>
      <Layout>

      <HomePage />

      </Layout>
      
    </div>
  );
};
