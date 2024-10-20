import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder.jsx";
import Username from "../features/user/Username.jsx";
import logo from "/logo.png";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-mainColor px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest text-white">
        <div className="flex items-center justify-center gap-2">
          <img src={logo} alt="logo" className="h-6 w-6" />
          Slice&Dice
        </div>
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
