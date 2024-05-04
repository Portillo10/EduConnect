import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function SideBarElement({ children, href }) {
  const isActive = window.location.href.endsWith(href)
  const [active, setActive] = useState(isActive);

  return (
    <NavLink
      className={`px-3 py-3 flex items-center w-10/12 gap-2.5 font-semibold cursor-pointer rounded-xl ${
        active ? "bg-slate-200" : ""
      }`}
      to={href}
    >
      {children}
    </NavLink>
  );
}
