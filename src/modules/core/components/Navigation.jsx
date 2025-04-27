import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Beranda' },
  { to: '/programs', label: 'Program Saya' },
  { to: '/programs/create', label: 'Buat Program' },
  { to: '/journal', label: 'Jurnal' },
  { to: '/info', label: 'Informasi' },
];

function Navigation({ mobile = false, closeMenu = () => {} }) {
  const baseClasses = mobile
    ? "block px-4 py-2 text-white hover:bg-indigo-600 rounded"
    : "px-3 py-2 text-white hover:bg-indigo-500 rounded mx-1";
    
  const activeClasses = mobile
    ? "bg-indigo-500"
    : "bg-indigo-700";
    
  return (
    <ul className={mobile ? "space-y-1 px-2" : "flex space-x-1"}>
      {navItems.map((item) => (
        <li key={item.to}>
          <NavLink
            to={item.to}
            onClick={mobile ? closeMenu : undefined}
            className={({ isActive }) => 
              `${baseClasses} ${isActive ? activeClasses : ''}`
            }
            end={item.to === '/'}
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;