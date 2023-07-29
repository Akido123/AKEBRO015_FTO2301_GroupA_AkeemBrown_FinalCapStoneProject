import React from "react";
import { FormControl, InputLabel, Select, OutlinedInput, MenuItem} from '@mui/material'

function SeasonsForm(props) {
  const [seasonsNumber, setseasonsNumber] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setseasonsNumber(
      typeof value === 'number' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Name</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={seasonsNumber}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
        >
          {props.seasons.seasons.map((item) => (
            <MenuItem
              key={item.title}
              value={item.season}
            >
              {item.season}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
} 

export default SeasonsForm