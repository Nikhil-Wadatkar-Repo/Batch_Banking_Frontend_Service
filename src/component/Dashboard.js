import React from "react";
import Info from "./Info";
import Cards from "./Cards";

export default function Dashboard() {
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
            <p>
              <a href="#">Account statement</a>
            </p>
            <p>
              <a href="#">Transactions</a>
            </p>
            <p>
              <a href="#">New registrations</a>
            </p>
          </div>
          <div className="col-sm-8 text-left">
            <Cards />
          </div>

          <div className="col-sm-2 sidenav">
            <div className="well">
              <p>Advertisements</p>
            </div>
            <div className="well">
              <p>Notifications</p>
            </div>
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
