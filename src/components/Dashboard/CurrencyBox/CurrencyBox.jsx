import React from "react";
import "./currencyBox.css";

const CurrencyBox = ({ currency }) => (
 <div className="currency">
  <span className="currency__name">{currency.key}</span>
  <span className="currency__value">
   {currency.value} <span className="currency__desc">{currency.unit}</span>
  </span>
 </div>
);

export default CurrencyBox;
