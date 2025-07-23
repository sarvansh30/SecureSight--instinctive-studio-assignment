import DashboardIcon from "@/icons/DashBoardIcon";
import ScenesIcon from "@/icons/ScenesIcon";
import LogoIcon from "@/icons/LogoIcon";
import UsersIcon from "@/icons/UsersIcon";
import IncidentsIcon from "@/icons/IncidentsIcon";
import CameraIcon from "@/icons/CameraIcon";


const Header = () => {

    const navLinks = [
  { name: 'Dashboard', icon: DashboardIcon, active: true},
  { name: 'Cameras', icon: CameraIcon, active: false },
  { name: 'Scenes', icon: ScenesIcon, active: false },
  { name: 'Incidents', icon: IncidentsIcon, active: false },
  { name: 'Users', icon: UsersIcon, active: false },
];

    return (
        <div className="flex p-8 justify-between">
            <div className="flex gap-[10px] items-center">
            <LogoIcon className=""/>
            <p className="text-white text-base font-jakarta  text-base">MANDLAC<span className="font-bold">X</span></p>
            </div>

            <nav className="flex items-center ">
                <ul className="flex items-center gap-8 ">
                    {navLinks.map((link)=>(
                        <li className="flex items-center gap-3 p-2 cursor-pointer"
                        key={link.name}>
                           <link.icon className={`h-5 w-5 ${link.active ? 'fill-[#FFCC00]' : 'fill-white'}`} />
                            <span className="font-jakarta text-white text-bold text-xs">{link.name}</span>
                        </li>
                    ))}
                </ul>
            </nav>
            
            <div className="flex gap-[10px] items-center">
            <LogoIcon className=""/>
            <p className="text-white text-base font-jakarta  text-base">MANDLAC<span className="font-bold">X</span></p>
            </div>

        </div>
    );
};

export default Header;