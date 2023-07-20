import "../styles/header.scss";
import { Link } from "react-router-dom";
import { HeaderMenuOptions } from "../utils/strings";

export default function Header() {
  return (
    <header>
      <div className="container-header">
        <div>
          <Link to="/">
            <h2>{HeaderMenuOptions.Logo}</h2>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">{HeaderMenuOptions.Home}</Link>
            </li>
            <li>
              <Link to="/">{HeaderMenuOptions.Rescue}</Link>
            </li>
            <li>
              <Link to="/about">{HeaderMenuOptions.About}</Link>
            </li>
            <li>
              <Link to="/">{HeaderMenuOptions.Contacts}</Link>
            </li>
          </ul>
        </nav>
        <div className="announcement-button">
          <Link to="/announcement">{HeaderMenuOptions.Announcement}</Link>
        </div>
      </div>
    </header>
  );
}
