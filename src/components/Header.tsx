import "../styles/header.scss";
import { HeaderMenuOptions } from "../utils/strings";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div>
          <a href="#">
            <h2>{HeaderMenuOptions.Logo}</h2>
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">{HeaderMenuOptions.Home}</a>
            </li>
            <li>
              <a href="#">{HeaderMenuOptions.Rescue}</a>
            </li>
            <li>
              <a href="#">{HeaderMenuOptions.About}</a>
            </li>
            <li>
              <a href="#">{HeaderMenuOptions.Contacts}</a>
            </li>
          </ul>
        </nav>
        <div className="announcement-button">
          <a href="#">{HeaderMenuOptions.Announcement}</a>
        </div>
      </div>
    </header>
  );
}
