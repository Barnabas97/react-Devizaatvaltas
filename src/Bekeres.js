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
        console.log("Nem jó a bekérés", err);
      });
  }

