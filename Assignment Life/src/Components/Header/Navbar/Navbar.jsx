import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
        <nav>
        <ul className="flex">
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-pink-600" : ""
            }
          >
            Home
          </NavLink>
        </li>

        <li>
        <NavLink
            to="/donatoin"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-pink-600" : ""
            }
          >
            Donation
          </NavLink>
        </li>

        <li>
        <NavLink
            to="/statistics"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-pink-600" : ""
            }
          >
            Statistics
          </NavLink>
        </li>
      </ul>
        </nav>
     
    </div>
    //
  );
};

export default Navbar;

