import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width : 505,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width:270,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  rightAlign: {
    float : 'right',
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Account Balance
          </Typography>
          <Typography variant="h5" color="primary">
            INR 0.00
          </Typography>
        </CardContent>
        <div className={classes.controls}>
        <Button size="small" color="primary">
          <br />
          View Statement
        </Button>
        </div>
     </div>
      <CardMedia
        className={classes.cover}
        image="data:image/jpeg;base64,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"
        title="Standard Chartered"
      />
    </Card>    
  );
}