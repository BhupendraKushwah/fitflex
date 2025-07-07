import React, { Suspense, useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router';
import PropTypes from 'prop-types';
import Navbar from '../common/Navbar';
import Sidebar from '../common/Sidebar';
import { getAuthenticationToken } from '@/utils/authentication.util';

// Mock authentication check (replace with real auth logic)
const isAuthenticated = getAuthenticationToken();

const CommonLayout = ({ isProtected = false }) => {
  const [isResponsive, setIsResponsive] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth < 992);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  })
  const handleSidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    const sidebarButton = document.querySelector('.ph-text-indent');
    sidebar.classList.toggle('open');
    document.body.classList.toggle('overflow-hidden');
    sidebarButton.classList.toggle('ph-text-outdent');
  };

  if (isProtected && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
console.log(isProtected , isAuthenticated);

  return (
    <div className="position-relative">
          {(isProtected && isAuthenticated) && <Navbar handleSidebar={handleSidebar} isResponsive={isResponsive}/>}
        <main className="main-container">
        <Suspense fallback={<div className="d-flex align-items-center justify-content-center">Loading...</div>}>
          {(isProtected && isAuthenticated) && <Sidebar isResponsive={isResponsive} />}
          <div className="main flex-grow-1">
            <Outlet />
          </div>
        </Suspense>
      </main>
    </div>
  );
};

CommonLayout.propTypes = {
  isProtected: PropTypes.bool,
};

export default CommonLayout;