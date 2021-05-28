import React from "react";
import axios from "axios";
import converter from "./converter.css";
class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      fromCurrency: "USD",
      toCurrency: "GBP",
      amount: 1,
      currencies: []
    };
  }
 
  }
}
export default Converter;
