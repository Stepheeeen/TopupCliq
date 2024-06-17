import React from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const select = ({selectProviders =[], selectText, marginTop}) => {
  return (
    <Box
    component="form"
    sx={{
      "& .MuiTextField-root": {marginTop: {marginTop}, width: "100%" },
    }}
    noValidate
    autoComplete="off"
  >
    <div>
      <TextField id="outlined-select-currency" select label={selectText}>
        {selectProviders.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  </Box>

  )
}

export default select
