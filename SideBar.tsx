import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
interface Props {
  items: string[];
  icons: string[];
  logo: string;
}

function SideBar({ items, icons, logo }: Props) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className={`bg-dark text-white p-2 vh-100 position-fixed  w-60"}`}>
        <img src={logo}></img>
        <ul className="list-unstyled">
          <li>
            <input type="serach" style={{ width: "100px", height: "25px" }} />
          </li>
          {items.map((item, index) => (
            <li key={index}>
              <a href="#" className="text-white text-decoration-none">
                {icons[index]}
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
