import { useEffect, useState } from "react"

const ApiCurrency = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<{
success: boolean,
timestamp: number,
base: string,
date: string,
rates: {
    [key:string]:string
}   
}>(null)

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