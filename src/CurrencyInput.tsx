import PropTypes from "prop-types";
import './style.css'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
type curr={
     onAmountChange:(event:string)=>void
   onCurrencyChange:(event:string)=>void
   currencies: string[][]
   amount:number
   currency:string
}
const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }));
  
export function CurrencyInput(props:curr){
  const t_curr1=props.currencies[0];
  return (
    <div className="Curr">
      <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="demo-customized-textbox"></InputLabel>
        <BootstrapInput value={props.amount} onChange={ev => props.onAmountChange(ev.target.value)} id="demo-customized-textbox" />
      </FormControl>
      <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel id="demo-customized-select-label"></InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={props.currency}
          onChange={ev=>props.onCurrencyChange(ev.target.value)}
          input={<BootstrapInput />}
        >
                {t_curr1.map((currency => (
       <MenuItem value={currency}>{currency}</MenuItem>
     )))}
        </Select>
      </FormControl>
     
    </div>
  );





    // return (
    //   <div className="Curr">
    //     <input type="text" value={props.amount} onChange={ev => props.onAmountChange(ev.target.value)}></input>
    //     <select value={props.currency} onChange={ev=>props.onCurrencyChange(ev.target.value)}>
    //     {t_curr1.map((currency => (
    //         <option value={currency}>{currency}</option>
    //       )))}
    //     </select>




    //   </div>
    // );

    // return (
      
    //     <Box sx={{ minWidth: 120 }} className="Curr">
    
    //       <FormControl fullWidth>
    //         <InputLabel id="demo-simple-select-label"></InputLabel>
    //         <Select
    //           labelId="demo-simple-select-label"
    //           id="demo-simple-select"
    //           value={props.currency}
    //           label="Age"
    //           onChange={ev => props.onAmountChange(ev.target.value)}
    //         >
    //        {t_curr1.map((currency => (
    //        <MenuItem value={currency}>{currency}</MenuItem>
    //     )))}
             
    //         </Select>
    //       </FormControl>
    //     </Box>
        
    //   );


}