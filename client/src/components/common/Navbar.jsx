import React, { useState } from 'react';

const Navbar = ({ handleSidebar, isResponsive }) => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
    setIsProfileOpen(false); // Close profile dropdown if open
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
    setIsNotificationOpen(false); // Close notification dropdown if open
  };

  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-primary border-bottom border-dark px-1 py-2">
      <div className="container-fluid">
        <div className='d-flex align-items-center'>
          <div className="me-3" style={{ width: '26px', height:'26px' }}>
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" fill="currentColor"></path>
            </svg>
          </div>
          {!isResponsive && <span className="navbar-brand fs-5 fw-bold">FitFlex</span>}
          {isResponsive &&
            <h1 className='m-0' onClick={handleSidebar} style={{cursor:'pointer' ,paddingTop:'4px'}}>
              <i class="ph ph-text-indent navbar-brand" style={{fontSize:'42px'}}></i>
            </h1>
          }
        </div>

        <div className="" id="navbarContent">
          <div className="ms-auto d-flex align-items-center gap-3">
            {/* Notification Button and Dropdown */}
            <div className="dropdown">
              <button
                className="btn btn-primary d-flex align-items-center rounded-circle p-2"
                type="button"
                onClick={toggleNotification}
                aria-expanded={isNotificationOpen}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"
                  ></path>
                </svg>
              </button>
              {isNotificationOpen && (
                <ul className="dropdown-menu dropdown-menu-end show mt-2 position-absolute translate-middle-x ml-3">
                  <li className="dropdown-item fw-bold">Notifications</li>
                  <li><hr className="dropdown-divider" /></li>
                  <li className="dropdown-item">New workout plan assigned</li>
                  <li className="dropdown-item">Goal milestone reached!</li>
                  <li className="dropdown-item">Upcoming class in 1 hour</li>
                </ul>
              )}
            </div>

            {/* Profile Button and Dropdown */}
            <div className="dropdown">
              <button
                className="btn p-0 rounded-circle"
                type="button"
                onClick={toggleProfile}
                aria-expanded={isProfileOpen}
              >
                <div
                  className="rounded-circle"
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDCeXYFO6pPV7CGbdH7l_z1quK3RXBgQqKyS0WxNs-T83TwCIU8op2p8u_uqGmwbXWakHaOKckJtpC-1LSxyv1sIK7eO6vU2SeR__Gk0CjbT5yh_M-ALiCOa8rmzn9Xik2aoEXyuDDdG8bbEEoLw2J66DzmSa-gB7_J8M7aBmIMWy3t6kyPBGQX8R_mYOvrmK2E3_FF1nOJIPuMhLS0TkKiOy6UbK36Hu1Cs9A9lc19MkP1NI93LrmuwFAsN2y5jqaYxRF06lPo2Lpe")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '40px',
                    height: '40px'
                  }}
                ></div>
              </button>
              {isProfileOpen && (
                <ul className="dropdown-menu dropdown-menu-end show mt-2 position-absolute end-0">
                  <li className="dropdown-item">Profile</li>
                  <li className="dropdown-item">Settings</li>
                  <li className="dropdown-item">Logout</li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;