import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Choose Account</FormLabel>
      <RadioGroup aria-label="account" name="account1" value={value} onChange={handleChange}>
        <FormControlLabel value="Account 1" control={<Radio />} label="Account 1" />
        <FormControlLabel value="Account 2" control={<Radio />} label="Account 2" />
        <FormControlLabel value="Account 3" control={<Radio />} label="Account 3" />
      </RadioGroup>
    </FormControl>
  );
}