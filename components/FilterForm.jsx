import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function FilterForm(props) {
  const {sortNameFunc, sortDateFunc} = props

  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Sort</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="Alphebetical" control={<Radio />} label="Alphebetical" onClick={sortNameFunc}/>
        <FormControlLabel value="Date" control={<Radio />} label="Date" onClick={sortDateFunc}/>
      </RadioGroup>
    </FormControl>
  );
}