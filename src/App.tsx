



import {CurrencyInput} from './CurrencyInput';
import {useState,useEffect} from "react";
import ApiCurrency from './ApiCurrency';
import './style.css'
function App() {


  const [amount1,setAmount1]=useState(1);
  const [amount2,setAmount2]=useState(1);
  const [currency1,setCurrency1]=useState('USD');
  const [currency2,setCurrency2]=useState('PKR');
  const [rates,setRates]=useState<{[key:string]:string}>();


  const { loading, data } = ApiCurrency()
  console.log("Fetching data from api=",data,loading)

  useEffect(()=>{
     if (loading !='true' && data!=null){
      // console.log("In func",data)
      setRates(data.rates)
     }
    },[data])

useEffect(() => {
  if(!!rates){
    handleAmount1Change(1)
  }
},[rates])
console.log("Rates=",rates)

function format(number:any){
  return number.toFixed(4);
}
function handleAmount1Change(amount1:any){
  setAmount2(format(amount1*rates[currency2]/rates[currency1]));
  setAmount1(amount1);
}

function handleCurrency1Change(currency1:any){
  setAmount2(format(amount1*rates[currency2]/rates[currency1]));
  setCurrency1(currency1);
}

function handleAmount2Change(amount2:any){
  setAmount1(format(amount2*rates[currency1]/rates[currency2]));
  setAmount2(amount2);
}

function handleCurrency2Change(currency2:any){
  setAmount1(format(amount2*rates[currency1]/rates[currency2]));
  setCurrency2(currency2);
}
  return (
    <div >
   <h1>Currency Convertor</h1>
   <CurrencyInput 
   onAmountChange={handleAmount1Change}
   onCurrencyChange={handleCurrency1Change}
   currencies={[Object.keys(rates)]} 
   amount={amount1} 
   currency={currency1}/>

   <CurrencyInput
    onCurrencyChange={handleCurrency2Change}
     onAmountChange={handleAmount2Change}
    currencies={[Object.keys(rates)]}  
    amount={amount2}
     currency={currency2}/>
    </div>
  );
}

export default App;

