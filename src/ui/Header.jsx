import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder.jsx";

function Header() {
  return (
    <header>
      <Link to="/">Slice&Dice</Link>
      <SearchOrder />
      <p>Razvan</p>
    </header>
  );
}

export default Header;
