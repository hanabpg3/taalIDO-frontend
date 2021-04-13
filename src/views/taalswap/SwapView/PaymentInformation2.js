import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, TextField, Grid } from '@material-ui/core';
import { MLabel } from 'src/theme';
import WebsiteVisits from './WebsiteVisits';

// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
      paddingLeft: theme.spacing(5)
    }
  },
  box: {
    marginTop: '1rem',
    marginBottom: '1rem',
    paddingLeft: '1rem',
    paddingRight: '1rem'
  },
  box2rem: {
    marginTop: '2rem',
    marginBottom: '2rem',
    paddingLeft: '1rem',
    paddingRight: '1rem'
  }
}));

// ----------------------------------------------------------------------

PaymentInformation.propTypes = {
  className: PropTypes.string
};

function PaymentInformation({ className, index }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      <MLabel color="primary">Candidate</MLabel>
      <MLabel color="info">Info</MLabel>
      <MLabel color="success">Success</MLabel>
      <MLabel color="warning">Waring</MLabel>
      <MLabel color="error">Error</MLabel>
      <Box className={classes.box2rem} display="flex">
        <div className={classes.row}>
          <Typography variant="h6" component="p">
            Participant : Public
          </Typography>
        </div>
      </Box>
      <Box className={classes.box2rem}>
        <TextField
          label="Fixed Swap Ratio"
          variant="standard"
          InputLabelProps={{
            shrink: true
          }}
          fullWidth
          value="1 BNB = 30000 ALICE"
        />
      </Box>
      <Box
        className={classes.box2rem}
        display="flex"
        justifyContent="space-between"
      >
        <TextField
          label="Price"
          variant="standard"
          InputLabelProps={{
            shrink: true
          }}
          style={{ width: '49%' }}
          value="0.008881"
        />

        <TextField
          label="Maximum Allocation per Wallet"
          variant="standard"
          InputLabelProps={{
            shrink: true
          }}
          style={{ width: '49%' }}
          value="5 BNB"
        />
      </Box>
      <Box
        className={classes.box2rem}
        display="flex"
        justifyContent="space-between"
      >
        <TextField
          label="Price"
          variant="standard"
          InputLabelProps={{
            shrink: true
          }}
          style={{ width: '49%' }}
          value="0.008881"
        />

        <TextField
          label="Maximum Allocation per Wallet"
          variant="standard"
          InputLabelProps={{
            shrink: true
          }}
          style={{ width: '49%' }}
          value="5 BNB"
        />
      </Box>
      <Box
        className={classes.box2rem}
        display="flex"
        justifyContent="space-between"
      >
        <Box
          width="35%"
          sx={{
            mb: 2.5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end'
          }}
        ></Box>
      </Box>
    </div>
  );
}

export default PaymentInformation;
