"use client";

import { useState } from 'react';
import DashboardIcon from "@/icons/DashBoardIcon";
import ScenesIcon from "@/icons/ScenesIcon";
import LogoIcon from "@/icons/LogoIcon";
import UsersIcon from "@/icons/UsersIcon";
import IncidentsIcon from "@/icons/IncidentsIcon";
import CameraIcon from "@/icons/CameraIcon";
import Image from 'next/image';
import GreaterIcon from '@/icons/GreaterIcon';
const navLinks = [
  { name: 'Dashboard', icon: DashboardIcon },
  { name: 'Cameras', icon: CameraIcon },
  { name: 'Scenes', icon: ScenesIcon },
  { name: 'Incidents', icon: IncidentsIcon },
  { name: 'Users', icon: UsersIcon },
];
const User = {name:"Mohmmad Ajhas",email:"ajhas@mandlac.com",pfp:"/User/Image.png"}
const Header = () => {
  const [activeLink, setActiveLink] = useState('Dashboard');

  return (
    <header className="flex p-8 justify-between">
      <div className="flex gap-[10px] items-center">
        <LogoIcon className="" />
        <p className="text-white text-base font-jakarta">MANDLAC<span className="font-bold">X</span></p>
      </div>

      <nav className="flex items-center">
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = link.name === activeLink;
            return (
              <li
                className="flex items-center gap-3 p-2 cursor-pointer"
                key={link.name}
                onClick={() => setActiveLink(link.name)}
              >
                <link.icon className={`h-7 w-7 ${isActive ? 'fill-[#FFCC00]' : 'fill-white'}`} />
                <span className={`font-jakarta font-bold text-sm ${isActive ? 'text-[#FFCC00]' : 'text-white'}`}>
                  {link.name}
                </span>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="flex gap-[10px] items-center">
        <Image
                    src={User.pfp}
                    width={32}
                    height={32}
                    alt="User"
                    objectFit="cover"
                    className="rounded-md"
                  />
        <div className='text-white'>
            <p className="text-base font-jakarta">{User.name}</p>
            <p className='text-sm'>{User.email}</p>
        </div>
        <GreaterIcon className="fill-white w-5 h-5 rotate-90"/>
      </div>
    </header>
  );
};

export default Header;