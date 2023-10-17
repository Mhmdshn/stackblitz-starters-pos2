import { FC } from 'react';
import { Layout } from '../Includes/Layout';
import { Sidebar } from '../Includes/Sidebar';
import { Home } from '../pages/Home';
import { HomePage } from '../pages/Homepage';

import './style.css';

type propsApp = {
  children: React.ReactNode
  name: string
}

export const App = (props: propsApp) => {
  return (
    <div>
      <Layout>

      <HomePage />

      </Layout>
      
    </div>
  );
};
