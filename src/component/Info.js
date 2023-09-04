import React from "react";
import SideNavbar from "./SideNavbar";
import LeftNvbar from "./LeftNvbar";

function Info() {
  return (
    <div>
      <nav>
        <div>
          <br></br>
        </div>
        <div className="container-fluid" style={{ textAlign: "right" }}>
          <button className="btn btn-primary">Log out</button>
        </div>
        <div className="container-fluid">
          <div>
            <marquee>
              {" "}
              <h1>Welcome to JPMC Bank</h1>
            </marquee>
          </div>
        </div>
      </nav>

      <div className="container-fluid text-center">
        <div className="row content">
          <div className="col-sm-2 sidenav">
            <LeftNvbar></LeftNvbar>
          </div>

          <div className="col-sm-8 text-left">Info page</div>
          <div className="col-sm-2 sidenav">
            {" "}
            <SideNavbar></SideNavbar>
          </div>
        </div>
      </div>

      <footer
        className="container-fluid text-center footer"
        style={{
          position: "fixed",
          bottom: "0",
          width: "100%",
          height: "40px",
          background: "#ffc107",
        }}
      >
        <p>Footer Text</p>
      </footer>
    </div>
  );
}

export default Info;
