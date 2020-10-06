import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    roots: {
        '& > *': {
          margin: theme.spacing(1),
        },
    },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 350,
  },
  selectEmpty: {
   marginTop: theme.spacing(1),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>  
        <FormControl required className={classes.formControl}>
        <InputLabel id="demo-simple-select-required-label">Account Number</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={age}
          onChange={handleChange}
          className={classes.selectEmpty}
        >
          <MenuItem value="">
          <em>12583459562</em>
          </MenuItem>
          <MenuItem value={10}>12583454562</MenuItem>
          <MenuItem value={20}>12583453990</MenuItem>
          <MenuItem value={30}>12583452549</MenuItem>
        </Select>        
      </FormControl>
      
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-readonly-label">Account Type</InputLabel>
        <Select
          labelId="demo-simple-select-readonly-label"
          id="demo-simple-select-readonly"
          value={age}
          onChange={handleChange}
          inputProps={{ readOnly: true }}
        >
          <MenuItem value="">
          <em>Current</em>
          </MenuItem>
          <MenuItem value={10}>Payroll</MenuItem>
          <MenuItem value={20}>Savings</MenuItem>
          <MenuItem value={30}>Investment</MenuItem>
        </Select>
        
      </FormControl>
     
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-readonly-label">Account Name</InputLabel>
        <Select
          labelId="demo-simple-select-readonly-label"
          id="demo-simple-select-readonly"
          value={age}
          onChange={handleChange}
          inputProps={{ readOnly: true }}
        >
          <MenuItem value="">
            <em>Ramesh Sharma</em>
          </MenuItem>
          <MenuItem value={10}>Sunil Kumar Purohit</MenuItem>
          <MenuItem value={20}>Tanvi Maheshwari</MenuItem>
          <MenuItem value={30}>Dhriti Shah</MenuItem>
        </Select>
        
      </FormControl>
    <div className={classes.roots}>
      <Button variant="contained" color="primary">
        Show Details
      </Button>  
      </div>  
    </div>    
  );
}