"use client";

import Link from "next/link";
import React from "react";
import ThemeController from "./ThemeController";

interface NavbarProps {
  brandName: string;
  profileImage: string;
  onProfileClick: string;
  onSettingsClick: string;
  onLogoutClick: string;
  toggleProfile: string;
}

const Navbar: React.FC<NavbarProps> = ({
  brandName,
  profileImage,
  onProfileClick,
  onSettingsClick,
  onLogoutClick,
  toggleProfile
}) => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">{brandName}</a>
      </div>
      <div className="flex-none">
        <ThemeController />

        <div className={`dropdown dropdown-end ${toggleProfile}`}>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={profileImage} alt="User Profile"/>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <Link className="justify-between" href={onProfileClick}>
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link href={onSettingsClick}>Settings</Link>
            </li>
            <li>
              <Link href={onLogoutClick}>Logout</Link>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
