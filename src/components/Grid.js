import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AccDetail from './AccDetail';
import Balance from '../components/Balance';
import Details from '../components/Details';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}><AccDetail/></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><Details/></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><Balance/></Paper>
        </Grid>
      </Grid>
    </div>
  );
}