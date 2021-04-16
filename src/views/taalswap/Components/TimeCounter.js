import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Box, Card, Typography } from '@material-ui/core';
import { useTheme, alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(3),
    color: theme.palette.info.darker
  },
  countdownWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },

  countdownItem: {
    color: theme.palette.text.primary,
    fontSize: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: '2px',
    position: 'relative',
    width: '50px',
    '& span': {
      color: theme.palette.info.darker,
      fontSize: '10px',
      fontWeight: '600',
      textTransform: 'uppercase'
    }
  }
}));

const TimeCounter = ({ timeTillDate, endFlag, poolStatus, timeFormat }) => {
  const classes = useStyles();
  const [days, setDays] = useState('00');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  // const days = moment.duration(then.diff(now)).days();
  // const hours = moment.duration(then.diff(now)).hours();
  // const minutes = moment.duration(then.diff(now)).minutes();
  // const seconds = moment.duration(then.diff(now)).seconds();

  useEffect(() => {
    try {
      if (endFlag === false) {
        const interval = setInterval(() => {
          const then = moment(timeTillDate, timeFormat);
          const now = moment();

          setDays(moment.duration(then.diff(now)).days());
          setHours(moment.duration(then.diff(now)).hours());
          setMinutes(moment.duration(then.diff(now)).minutes());
          setSeconds(moment.duration(then.diff(now)).seconds());
        }, 1000);
        return () => clearInterval(interval);
      }
    } catch (error) {
      console.log(error);
    }
  }, [timeTillDate]);

  return (
    <>
      {endFlag === false ? (
        <Box>
          <div className={classes.countdownWrapper}>
            <Box className={classes.countdownItem}>
              {days}
              <span>days</span>
            </Box>
            <Box className={classes.countdownItem}>
              {hours}
              <span>hours</span>
            </Box>
            <Box className={classes.countdownItem}>
              {minutes}
              <span>min</span>
            </Box>
            <Box className={classes.countdownItem}>
              {seconds}
              <span>sec</span>
            </Box>
          </div>
        </Box>
      ) : (
        <Box>
          <div className={classes.countdownWrapper}>
            <Box className={classes.countdownItem}>
              00
              <span>days</span>
            </Box>

            <Box className={classes.countdownItem}>
              00
              <span>hours</span>
            </Box>

            <Box className={classes.countdownItem}>
              00
              <span>min</span>
            </Box>

            <Box className={classes.countdownItem}>
              00
              <span>sec</span>
            </Box>
          </div>
        </Box>
      )}
    </>
  );
};

export default TimeCounter;
