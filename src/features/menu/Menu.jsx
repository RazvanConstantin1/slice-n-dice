import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant.js";
import MenuItem from "./MenuItem.jsx";

function Menu() {
  const menu = useLoaderData();

  return (
    <ul className="divide-y-2 divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = getMenu();
  return menu;
}

export default Menu;
