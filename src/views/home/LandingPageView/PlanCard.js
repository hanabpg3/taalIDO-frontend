import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import {
  Card,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Divider,
  Checkbox
} from '@material-ui/core';
import Progress from './Progress';
import getMax from '../../../utils/getMax';
import getProgressValue from '../../../utils/getProgressValue';
import { useHistory } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';
import StatusLabel from '../../taalswap/Components/StatusLabel';
import Taalswap from 'src/utils/taalswap';
import Numbers from 'src/utils/Numbers';
import { MLabel } from 'src/theme';
import { useTranslation } from 'react-i18next';

// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 480,
    margin: 'auto',
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'column',
    padding: theme.spacing(3),
    [theme.breakpoints.up(414)]: {
      padding: theme.spacing(5)
    },
    '&:hover': {
      boxShadow: `0 0 0 1.5px ${theme.palette.primary.main}`
    }
  }
}));

// ----------------------------------------------------------------------

PlanCard.propTypes = {
  index: PropTypes.number,
  card: PropTypes.object,
  className: PropTypes.string
};

function PlanCard({ pool, ethPrice, index, className }) {
  const classes = useStyles();
  const history = useHistory();
  const context = useWeb3React();

  const [max, setMax] = useState(0);
  const [progressValue, setProgressValue] = useState(0);
  const [progressDollorValue, setProgressDollorValue] = useState(0);
  const [totalRaise, setTotalRaise] = useState(0);
  const [participants, setParticipants] = useState(0);
  const [isOpenModal, setOpenModal] = useState(false);
  const [checkWarning, setCheckWarning] = useState(false);
  const [showWarningMessage, setShowWarningMessage] = useState(false);

  const { library, account } = context;
  const { i18n, t } = useTranslation();

  const handleCloseModal = () => {
    setCheckWarning(false);
    setOpenModal(false);
  };

  const handleOnClickSwap = () => {
    if (checkWarning) {
      setCheckWarning(false);
      history.push({
        pathname: '/app/taalswap/pools/swap',
        state: { selectedPool: pool }
      });
    } else {
      setShowWarningMessage(true);
    }
  };

  const handleCheckWarningChange = () => {
    setCheckWarning(!checkWarning);
    checkWarning === true
      ? setShowWarningMessage(true)
      : setShowWarningMessage(false);
  };

  useEffect(async () => {
    try {
      let taalswap = null;
      if (!!library) {
        taalswap = new Taalswap({
          application: pool,
          account,
          library
        });
      } else {
        taalswap = new Taalswap({
          application: pool,
          notConnected: true
        });
      }

      await taalswap
        .getBuyers()
        .then((result) => {
          setParticipants(result.length);
        })
        .catch((error) => console.log(error));

      await taalswap
        .tokensAllocated()
        .then((result) => {
          setProgressValue(getProgressValue(result, pool.tradeAmount));
          setProgressDollorValue((parseFloat(ethPrice) / pool.ratio) * result);
          setTotalRaise(result * pool.tradeValue);
        })
        .catch((error) => console.log(error));

      setMax(getMax(pool.maxIndividuals, pool.tradeValue));

      return () => {};
    } catch (error) {
      console.log(error);
      return () => {};
    }
  }, [pool, library]);

  const onClickDetails = () => {
    setOpenModal(true);
  };

  return (
    <Card className={clsx(classes.root, className)} id="plan_card">
      <StatusLabel poolStatus={pool.poolStatus} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          my: 2,
          flexWrap: 'wrap'
        }}
        className="cardtitle_wrap"
      >
        <Box
          component="img"
          src={
            pool.iconUrl && pool.iconUrl !== ''
              ? `${pool.iconUrl}`
              : `/static/icons/json-logo.svg`
          }
          sx={{
            width: 45,
            height: 45
          }}
          className="plancard_icon"
        />
        <Typography variant="h3" sx={{ mx: 1 }} className="card_title">
          {pool.poolName}
          <Typography variant="h5" className="card_subtitle">
            {Numbers.toFloat(pool.ratio)} {pool.symbol} = 1 ETH
          </Typography>
        </Typography>
      </Box>
      {pool.selectChain && pool.selectChain !== '' && (
        <MLabel
          variant="filled"
          sx={{
            top: 40,
            left: 40,
            position: 'absolute'
          }}
          className="erc_label"
        >
          {pool.selectChain}
        </MLabel>
      )}

      <Box
        component="ul"
        sx={{ my: 5, width: '100%' }}
        className="plancard_wrap"
      >
        {/* Maximum */}
        <Box
          key="maximum"
          component="li"
          sx={{
            display: 'flex',
            typography: 'body2',
            '&:not(:last-of-type)': { mb: 0.7 }
          }}
        >
          <Typography color="#637381" fontSize="0.875rem">
            {t('taalswap.Maximum')}
          </Typography>
          <Box sx={{ flex: 1 }} />
          <Box>
            <Box className="text_effect">{Numbers.toFloat(max)} ETH</Box>
          </Box>
        </Box>
        {/* Access */}
        <Box
          key="access"
          component="li"
          sx={{
            display: 'flex',
            typography: 'body2',
            '&:not(:last-of-type)': { mb: 0.7 }
          }}
        >
          <Typography color="#637381" fontSize="0.875rem">
            {t('taalswap.Access')}
          </Typography>
          <Box sx={{ flex: 1 }} />
          <Box>
            <Box sx={{ fontSize: '20px' }}>{!!pool.access && pool.access}</Box>
          </Box>
        </Box>

        {/* Participants */}
        <Box
          key="participants"
          component="li"
          sx={{
            display: 'flex',
            typography: 'body2',
            '&:not(:last-of-type)': { mb: 0.7 }
          }}
        >
          <Typography color="#637381" fontSize="0.875rem">
            {t('taalswap.Participants')}
          </Typography>
          <Box sx={{ flex: 1 }} />
          <Box>
            <Box sx={{ fontSize: '20px' }}>{participants}</Box>
          </Box>
        </Box>

        {/* Total Raise */}
        <Box
          key="totalraise"
          component="li"
          sx={{
            display: 'flex',
            typography: 'body2',
            '&:not(:last-of-type)': { mb: 0.7 }
          }}
        >
          <Typography color="#637381" fontSize="0.875rem">
            {t('taalswap.TotalRaise')}
          </Typography>
          <Box sx={{ flex: 1 }} />
          <Box>
            <Box sx={{ color: '#00AB55', fontSize: '20px' }}>
              {Numbers.toFloat(totalRaise)} ETH
            </Box>
          </Box>
        </Box>

        {/* Start Date */}
        <Box
          key="startDate"
          component="li"
          sx={{
            display: 'flex',
            typography: 'body2',
            '&:not(:last-of-type)': { mb: 0.7 }
          }}
          className="start_date"
        >
          <Typography color="#637381" fontSize="0.875rem">
            {t('taalswap.StartDate')}
          </Typography>
          <Box sx={{ flex: 1 }} />
          <Box>
            <Box>{moment.unix(pool.startDate).format('YYYY-MM-DD')}</Box>
          </Box>
        </Box>

        {/* End Date */}
        <Box
          key="endDate"
          component="li"
          sx={{
            display: 'flex',
            typography: 'body2',
            '&:not(:last-of-type)': { mb: 0.7 }
          }}
        >
          <Typography color="#637381" fontSize="0.875rem">
            {t('taalswap.EndDate')}
          </Typography>
          <Box sx={{ flex: 1 }} />
          <Box>
            <Box>{moment.unix(pool.endDate).format('YYYY-MM-DD')}</Box>
          </Box>
        </Box>
      </Box>
      <Progress
        progressValue={progressValue}
        progressDollorValue={progressDollorValue}
      />
      <Box sx={{ my: 1.3 }}></Box>
      <Button
        fullWidth
        size="large"
        variant="contained"
        onClick={onClickDetails}
      >
        {t('taalswap.Details')}
      </Button>
      <Dialog
        open={isOpenModal}
        onClose={handleCloseModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xs"
        style={{ padding: '1rem' }}
      >
        <DialogTitle
          className={classes.dialogTitle}
          id="customized-dialog-title"
          onClose={handleCloseModal}
        >
          <Box display="flex" justifyContent="flex-start">
            <Box>
              <ErrorOutlineOutlinedIcon style={{ color: 'red' }} />
            </Box>
            <Box marginLeft="0.5rem">
              <Typography color="red">
                {t('taalswap.TokenSafetyAlert')}
              </Typography>
            </Box>
          </Box>
        </DialogTitle>

        <DialogContent>
          <Divider />
          <Box>
            <Typography padding="0.5rem" align="justify">
              {t('taalswap.Alert1')}
            </Typography>

            <Typography padding="0.5rem" align="justify">
              {t('taalswap.Alert2')}
            </Typography>

            <Typography padding="0.5rem" align="justify">
              {t('taalswap.Alert3')}
            </Typography>
          </Box>
          <Divider />
          <Box textAlign="right">
            <Box display="flex" justifyContent="flex-end" alignItems="center">
              <Checkbox
                checked={checkWarning}
                onChange={handleCheckWarningChange}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
              <Typography
                sx={{ cursor: 'pointer' }}
                onClick={handleCheckWarningChange}
              >
                {t('taalswap.Understand')}
              </Typography>
            </Box>
          </Box>
          {showWarningMessage === true && (
            <Box>
              <Typography textAlign="center" color="red">
                {t('taalswap.Agree')}
              </Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions style={{ height: '60px' }}>
          <Button
            className={classes.button}
            variant="outlined"
            color="inherit"
            onClick={handleCloseModal}
          >
            Cancel
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            onClick={handleOnClickSwap}
            color="primary"
            autoFocus
          >
            Proceed
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}

export default PlanCard;
