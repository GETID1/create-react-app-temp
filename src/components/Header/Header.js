import "./header.css";
import {
  FaAngleDown,
  FaLocationArrow,
  FaPhone,
  FaGg,
  FaShoppingCart,
} from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

function Header() {
  return (
    <header>
      <section className="top-header">
        <div className="container flex sb">
          <div className="left-top-header flex">
            <FaPhone className="phone" />
            <p>+12049382834</p>
          </div>
          <div className="middle-top-header flex">
            <FaLocationArrow className="locate" />
            <p>Find a store near you</p>
          </div>
          <div className="right-top-header flex">
            <p>Eng</p>
            <FaAngleDown className="down" />
            <p>Cst</p>
            <FaAngleDown className="down" />
          </div>
        </div>
      </section>
      <div className="container">
        <section className="main-header flex sb">
          <div className="logo flex">
            <FaGg className="fa-logo" />
            <h1>STORE</h1>
          </div>
          <div className="flex header-buttons">
            <FaUser />
            <p>Account</p>
            <FaShoppingCart />
            <p>Cart</p>
          </div>
        </section>
      </div>
    </header>
  );
}

export default Header;
