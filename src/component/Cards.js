import React from "react";

export default function Cards() {
  return (
    <div>
      Cards
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Account</h5>
              <p className="card-text">Click here to see your balance.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Transaction History</h5>
              <p className="card-text">Click here to see your transaction.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">All Acount details</h5>
              <p className="card-text">Click here to see all account details</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Debit/Credit</h5>
              <a href="/txn">Click here to do any tranaction.</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
