import { useState, useEffect } from "react";
import axios from "axios";
//`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Clitecoin%2Cbinancecoin%2Ctether&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1d%2C%202d%2C%203d%2C%204d%2C%205d`
const useCryptoCurrentValue = () => {
  /* States */
  const [btcUsd, setBtcUsd] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /* Fetch Data with axios + async/await */
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Clitecoin%2Ccosmos%2Cdogecoin%2Cmetal&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1d%2C%202d%2C%203d%2C%204d%2C%205d`
      );
      // console.log("====================================");
      console.log("use crypto value", response.data);
      // console.log("====================================");
      setBtcUsd(response.data);

      setIsLoading(false);
    };
    fetchData();
    // le [] empeche la requete de boucler à l'infini
  }, []);

  /*Check isLoading */
  return { isLoading, btcUsd };
};

export default useCryptoCurrentValue;
