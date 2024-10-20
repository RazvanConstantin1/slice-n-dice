import { Link } from "react-router-dom";

function Button({ children, disabled, to }) {
  const className =
    "inline-block rounded-full bg-btn px-4 py-3 font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-btnHover focus:bg-btnHover focus:outline-none focus:ring focus:ring-btn focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-600 sm:px-6 sm:py-4";

  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );

  return (
    <button className={className} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
