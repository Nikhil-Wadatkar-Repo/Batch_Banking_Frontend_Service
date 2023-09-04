import axios from "axios";
import React, { useState } from "react";

export default function DebitCredit() {
  let initalData = {
    amount: 0,
    txType: "",
    accountNumber: 0,
  };
  const [txnDetails, setTxnDetails] = useState(initalData);
  const handleChange = (name, val) => {
    setTxnDetails((prevalue) => {
      return {
        ...prevalue,
        [name]: val,
      };
    });
  };
  const debitCreditAPI = () => {
    axios
      .post("http://localhost:3333/debitcredit", {
        amount: txnDetails.amount,
        txnType: txnDetails.txType,
        accountNumber: txnDetails.accountNumber,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="container">
      <div id="formId" style={{ width: "250px" }}>
        <div className="row">
          <div className="col">
            <div>
              <label htmlFor="inputPassword5" className="form-label">
                Enter Account Number
              </label>
              <input
                type="text"
                id="accountNumber"
                className="form-control"
                aria-describedby="passwordHelpBlock"
                onKeyUp={(e) => {
                  handleChange("accountNumber", e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div>
              <label htmlFor="inputPassword5" className="form-label">
                Enter Amount htmlFor Debit/Credit
              </label>
              <input
                type="text"
                id="amount"
                className="form-control"
                aria-describedby="passwordHelpBlock"
                onKeyUp={(e) => {
                  handleChange("amount", e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="radio2"
                value={"Debit"}
                onClick={(e) => {
                  //   console.log(e.target.value, "  ", e.target.name);
                  handleChange("txType", e.target.value);
                }}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Debit
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                value={"Credit"}
                id="radio1"
                onClick={(e) => {
                  //   console.log(e.target.value, "  ", e.target.name);
                  handleChange("txType", e.target.value);
                }}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Credit
              </label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <button
              className="btn btn-primary"
              onClick={() => {
                console.log("on Click: ", txnDetails);
                debitCreditAPI();
              }}
            >
              Click
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
