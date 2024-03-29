import React from 'react'
import {
  Cog6ToothIcon,
  FolderArrowDownIcon,
  FolderIcon,
  HomeIcon,
} from '@heroicons/react/24/outline'
import logo from '../assets/logo.jpg';
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  setSidebarOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon },
  { name: 'Devices', href: '/devices', icon: FolderIcon },
  { name: 'Device issuance', href: '/issuance', icon: FolderArrowDownIcon },
]

const Sidebar: React.FC<SidebarProps> = ({ setSidebarOpen }) => {
  const location = useLocation();
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
      <div className="flex h-24 shrink-0 items-center">
        <img
          className="h-16 w-auto"
          src={logo}
          alt="Virittämö Helsinki"
        />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    onClick={() => setSidebarOpen && setSidebarOpen(false)}
                    className={classNames(
                      location.pathname === item.href
                        ? 'bg-gray-50 text-indigo-600'
                        : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                      'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        location.pathname === item.href ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                        'h-6 w-6 shrink-0'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="mt-auto">
            <Link
              to="/settings"
              className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
            >
              <Cog6ToothIcon
                className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                aria-hidden="true"
              />
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
