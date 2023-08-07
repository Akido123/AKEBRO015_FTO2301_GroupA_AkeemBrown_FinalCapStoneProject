import React from "react";
import { FormControl, InputLabel, Select, OutlinedInput, MenuItem, Typography, CardMedia, TextField} from '@mui/material'

function SeasonsForm(props) {
  const {seasonsFunc} = props
  const [seasonsNumber, setseasonsNumber] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    seasonsFunc(value)
    // setseasonsNumber(value); - value will append to selected the menu list and clicking the last item will crash the system.
  };

  return (
    <div>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
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
            <div key={item.season}>
              <MenuItem
                key={item.title}
                value={item.season}
              >
                Season: {item.season} Episodes: {item.episodes.length}
              </MenuItem>
              <CardMedia
                component='img'
                image={item.image}
                sx={{
                  width: '50px',
                  height: '50px',
                  justifyContent: 'center'
                }}
              />
            </div>
          ))}
        </Select>
      </FormControl>
    </div>
  );
} 

export default SeasonsForm