import { NavLink } from "react-router-dom";


function Footer() {
  return (
    <>
      <div className="bg-dark">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between text-white py-4">
            <p className="mb-0">© 2020 LOGO All Rights Reserved.</p>
            <ul className="d-flex list-unstyled mb-0 h4">
              <li>
                <NavLink  className="text-white mx-3">
                  <i className="fab fa-facebook"></i>
                </NavLink>
              </li>
              <li>
                <NavLink  className="text-white mx-3">
                  <i className="fab fa-instagram"></i>
                </NavLink>
              </li>
              <li>
                <NavLink  className="text-white ms-3">
                  <i className="fab fa-line"></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
