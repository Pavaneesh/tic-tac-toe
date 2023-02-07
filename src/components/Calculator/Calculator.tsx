import { Box, Button, TextField } from '@mui/material'
import React from 'react'

const CalculatorComp = () => {

  const [count, setCount] = React.useState<string>("")

  const onAddDigit = (digit: string) => {
    const newCount = String(count).concat('', digit);
    setCount(newCount)
  }

  const buttonStyle = { height: "45px", width: "65px", margin: "2px" }

  return (
    <Box>
      <h3 style={{ color: "#1976d2" }}> CALCULATOR </h3>
      <TextField id="calc" value={count} style={{ width: "275px", marginBottom: "5px" }} />
      <Box className="flex-container">
        <Button variant="outlined" style={buttonStyle} onClick={() => onAddDigit("1")} > 1 </Button>
        <Button variant="outlined" style={buttonStyle} onClick={() => onAddDigit("2")} > 2 </Button>
        <Button variant="outlined" style={buttonStyle} onClick={() => onAddDigit("3")} > 3 </Button>
        <Button variant="outlined" style={buttonStyle} onClick={() => onAddDigit("+")} > + </Button>
      </Box>
      <Box className="flex-container">
        <Button variant="outlined" style={buttonStyle} onClick={() => onAddDigit("4")}> 4 </Button>
        <Button variant="outlined" style={buttonStyle} onClick={() => onAddDigit("5")}> 5 </Button>
        <Button variant="outlined" style={buttonStyle} onClick={() => onAddDigit("6")}> 6 </Button>
        <Button variant="outlined" style={buttonStyle} onClick={() => onAddDigit("-")}> - </Button>
      </Box>
      <Box className="flex-container">
        <Button variant="outlined" style={buttonStyle} onClick={() => onAddDigit("7")}> 7 </Button>
        <Button variant="outlined" style={buttonStyle} onClick={() => onAddDigit("8")}> 8 </Button>
        <Button variant="outlined" style={buttonStyle} onClick={() => onAddDigit("9")}> 9 </Button>
        <Button variant="outlined" style={buttonStyle} onClick={() => onAddDigit("*")}> * </Button>
      </Box>
      <Box className="flex-container">
        <Button variant="outlined" style={buttonStyle} onClick={() => onAddDigit("/")}> / </Button>
        <Button variant="outlined" style={buttonStyle} onClick={() => onAddDigit("0")}> 0 </Button>
        <Button variant="outlined" style={buttonStyle} onClick={() => onAddDigit(".")}> . </Button>
        {/* eslint-disable-next-line no-eval */}
        <Button variant="outlined" style={buttonStyle} onClick={() => setCount(eval(count))}> = </Button>
      </Box>
      <Button variant="outlined" color="error" style={{ height: "45px", width: "275px" }} onClick={() => { setCount("") }}> Clear All </Button>
    </Box>
  )
}

export default CalculatorComp