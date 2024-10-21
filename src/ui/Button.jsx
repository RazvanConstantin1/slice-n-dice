import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block rounded-full bg-btn font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-btnHover focus:bg-btnHover focus:outline-none focus:ring focus:ring-btn focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-600";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    secondary:
      "inline-block px-4 py-3 md:px-6 md:py-4 md:px-5 md:py-2.5 rounded-full border-2 bg-stone-700 border-stone-300 font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-stone-500 focus:bg-stone-500 focus:outline-none focus:ring focus:ring-stone-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-600 sm:px-6 sm:py-4",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    small: base + " py-2 px-4 md:px-5 md:py-2.5 text-xs",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button className={styles[type]} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    );

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
