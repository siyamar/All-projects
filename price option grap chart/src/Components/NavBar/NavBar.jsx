import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {
    const[open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/dashboard', name: 'Dashboard' }
      ];
      


    return (
        <nav className="text-black bg-teal-600 p-4"> 
            <div className="text-2xl md:hidden" onClick={()=>setOpen(!open)}>
                {
                    open===true ? 
                    <AiOutlineClose></AiOutlineClose>
                    : <AiOutlineMenu ></AiOutlineMenu> 
                }

            
            </div>

          <ul className={`md:flex absolute md:static bg-teal-600 duration-1000
                ${open ? 'top-16' : '-top-60'}
                px-6 `}>
          {
                routes.map(route=> <Link key={route.id} route={route}></Link>)
            }
          </ul>
        </nav>
    );
};

export default NavBar;