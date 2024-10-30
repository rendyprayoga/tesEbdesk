"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  return (
    <section className="font-rubik flex">
      <nav className=" w-full max-w-screen-full px-6 py-2 mx-auto bg-white shadow-md rounded-md sticky top-0 flex justify-between items-center z-50">
        <button
          onClick={toggleMenu}
          className="p-2 rounded-md text-gray-600 hover:bg-gray-200"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h7"
              />
            )}
          </svg>
        </button>

        <div className="relative flex items-center space-x-4">
          <button className="p-2 rounded-md text-gray-600 hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0112.25 3a.75.75 0 00-.75.75 8.25 8.25 0 107.877 10.965.75.75 0 00.375-.713z"
              />
            </svg>
          </button>
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2"
          >
            <img
              src="/user.png"
              alt="user avatar"
              className="w-8 h-8 rounded-lg"
            />
            <span className="text-sm font-medium text-gray-800">User.Inc</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Profile
              </a>
              <Link
                href="/login"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Sign Out
              </Link>
            </div>
          )}
        </div>
      </nav>

      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } bg-gray-700 shadow-md`}
        aria-label="Sidebar"
      >
        <div className="flex items-center px-4 py-4">
          <Image
            src="/ipsum.png"
            alt="Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="text-slate-200 font-semibold">Logo Ipsum</span>
        </div>
        <div className="h-full px-3 py-4 overflow-y-auto">
          <ul className="space-y-2 ">
            <li>
              <Link
                href="/dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group mb-4"
              >
                <img src="/dash.png" className="w-6 h-6" />
                <span className="ms-3 text-gray-400">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <img src="/slack.png" className="w-6 h-6" />
                <span className="flex-1 ms-3 whitespace-nowrap text-gray-400">
                  Visualization
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <img src="/fi_archive.png" className="w-6 h-6" />
                <span className="flex-1 ms-3 whitespace-nowrap text-gray-400">
                  Case
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <img src="/fi_server.png" className="w-6 h-6" />
                <span className="flex-1 ms-3 whitespace-nowrap text-gray-400">
                  Data Set
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/datasource"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <img src="/fi_database.png" className="w-6 h-6" />
                <span className="flex-1 ms-3 whitespace-nowrap text-gray-400">
                  Data Source
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <img src="/fi_wifi.png" className="w-6 h-6" />
                <span className="flex-1 ms-3 whitespace-nowrap text-gray-400">
                  Connection
                </span>
              </Link>
            </li>
            <p className="text-gray-400">Assets</p>
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <img src="/fi_figma.png" className="w-6 h-6" />
                <span className="ms-3 text-gray-400">Icon</span>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <img src="/fi_image.png" className="w-6 h-6" />
                <span className="ms-3 text-gray-400">Image</span>
              </Link>
            </li>
            <p className="text-gray-400">Authorization</p>
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <img src="/fi_user.png" className="w-6 h-6" />
                <span className="ms-3 text-gray-400">Account</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <img src="/fi_pocket.png" className="w-6 h-6" />
                <span className="ms-3 text-gray-400">Role</span>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
              >
                <img src="/Icons.png" className="w-6 h-6" />
                <span className="ms-3 text-gray-400">Workspace</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </section>
  );
}
