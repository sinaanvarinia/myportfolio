import { Link } from "react-router-dom";
import { styles } from "../styles";
import { useState } from "react";

const [active, setActive] = useState("second");
const Navbar = () => {
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo"
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;