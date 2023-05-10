import React from 'react'
import TextField from '@mui/material/TextField';

export const Filter= ({handleChange, value}) => {
  return (
    <TextField onChange={handleChange} value={value} id="standard-basic" label="Standard" variant="standard" />
  )
}
// 