import React, { useState } from 'react';
import { FaTachometerAlt, FaSignOutAlt, FaBullhorn, FaHandHoldingHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { logout } from '../../pages/user/authpage/logout';
import { useUserZustands } from '../../zustand/useUserZustands';

const UserSideBar = () => {
  const { tab, setSelectedTab } = useUserZustands();
  const { logoutuser } = logout();

  async function logoutUser() {
    if (confirm('Do you want to logout?')) {
      await logoutuser();
    }
  }

  function configureSelectedTab(selectedTab) {
    setSelectedTab(selectedTab);
  }

  return (
    <div className="w-1/4 bg-sky-200 md:block hidden sticky top-0 h-screen ml-3">
      <ul className="flex flex-col gap-4 px-5 w-full items-start text-start py-5 mt-10">
        <Link
          to="/user/dashboard"
          onClick={() => configureSelectedTab('dashboard')}
          className={`hover:bg-sky-100 py-3 text-sm w-full pl-2 rounded ${
            tab === 'dashboard' ? 'bg-blue-300 text-white' : 'text-sky-800'
          }`}
        >
          <li className="flex gap-2 items-center">
            <FaTachometerAlt /> <span>Dashboard</span>
          </li>
        </Link>
        <Link
          to="/user/createsCampaign"
          onClick={() => configureSelectedTab('createCampaign')}
          className={`hover:bg-sky-100 py-3 text-sm w-full pl-2 rounded ${
            tab === 'createCampaign' ? 'bg-blue-300 text-white' : 'text-sky-800'
          }`}
        >
          <li className="flex gap-2 items-center">
            <FaHandHoldingHeart /> <span>Create Campaign</span>
          </li>
        </Link>
        <Link
          to="/user/MyDonations"
          onClick={() => configureSelectedTab('myDonations')}
          className={`hover:bg-sky-100 py-3 text-sm w-full pl-2 rounded ${
            tab === 'myDonations' ? 'bg-blue-300 text-white' : 'text-sky-800'
          }`}
        >
          <li className="flex gap-2 items-center">
            <FaBullhorn /> <span>My Donations</span>
          </li>
        </Link>
        <a
          onClick={logoutUser}
          className="hover:bg-sky-100 py-3 text-sm w-full pl-2 rounded text-sky-800"
        >
          <button className="flex gap-2 items-center">
            <FaSignOutAlt /> <span>Logout</span>
          </button>
        </a>
      </ul>
    </div>
  );
};

export default UserSideBar;
