import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { BASE_IMG } from 'src/utils/getImages';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, Typography } from '@material-ui/core';
import {
  varFadeInUp,
  varFadeInDown,
  MotionInView
} from 'src/components/Animate';

// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(10)
  },
  content: {
    maxWidth: 520,
    margin: 'auto',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'Center',
      position: 'absolute'
    }
  }
}));

// ----------------------------------------------------------------------

const getImg = (width) => `/static/images/multipage.png`;

CleanInterfaces.propTypes = {
  className: PropTypes.string
};

function CleanInterfaces({ className }) {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={clsx(classes.root, className)}>
      <div className={classes.heading}>
        <MotionInView variants={varFadeInUp}>
          <Typography
            gutterBottom
            variant="overline"
            align="center"
            sx={{ color: 'text.secondary', display: 'block' }}
          >
            TaalSwap
          </Typography>
        </MotionInView>
        <MotionInView variants={varFadeInDown}>
          <Typography variant="h2" align="center">
            Fire up your project <br />
            with TaalSwap
          </Typography>
        </MotionInView>

        <MotionInView variants={varFadeInUp}>
          <Box
            component="img"
            alt="multipage"
            src={getImg(600)}
            srcSet={`${getImg(600)} 600w, ${getImg(1200)} 960w, ${getImg(
              1440
            )} 1280w`}
            variants={varFadeInUp}
            sx={{ m: 'auto' }}
          />
        </MotionInView>
      </div>
    </Container>
  );
}

export default CleanInterfaces;
