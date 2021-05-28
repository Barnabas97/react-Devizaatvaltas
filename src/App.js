import React from "react";
import axios from "axios";
import converter from "./converter.css";
class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      fromCurrency: "USD",
      toCurrency: "HUF",
      amount: 1,
      currencies: []
    };
  }
  componentDidMount() {
    axios
      .get("http://api.exchangerate.host/latest?base=huf")
      .then(response => {
        const currencyAr = ["HUF"];
        for (const key in response.data.rates) {
          currencyAr.push(key);
        }
        this.setState({ currencies: currencyAr });
      })
      .catch(err => {
        
      });
  }
  
        </div>
      </div>
    );
  }
}
export default Converter;
