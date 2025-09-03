import './navbar.css';

function Nav() {
  return (
    <>
      <header>
        <div id="D1">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Our Staff</a>
          <a href="#">Blogs</a>
          <a href="#">Feedback</a>
          <a href="#">FAQ's</a>

          {/* Dropdown Start */}
          <div className="dropdown">
            <button className="dropbtn">Services ▾</button>
            <div className="dropdown-content">
              <a href="#">Dentist</a>
              <a href="#">Therapist</a>
              <a href="#">Neurologist</a>
            </div>
          </div>
          {/* Dropdown End */}

          <a href="#">Contact Us</a>
        </div>
        <div id="D2">
          <button>GET APPOINTMENT</button>
        </div>
      </header>
    </>
  );
}

export default Nav;
