import { Outlet } from 'react-router-dom';
import  Loading  from "../Loading/Loading";
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      
    </div>
  );
};