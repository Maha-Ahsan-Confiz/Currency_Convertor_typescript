import { useEffect, useState } from "react"

const ApiCurrency = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  const fetchApi = () => {
    fetch('https://haseeb-apis.herokuapp.com/api/currencies/latest?base=PKR') 
    .then(response => {
      return response.json()
    })
    .then(json => {
      console.log(json)
      setLoading(false)
      setData(json)
    })
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return { loading, data }
};

export default ApiCurrency ;