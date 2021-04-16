import clsx from 'clsx';

import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { fNumber, fPercent } from 'src/utils/formatNumber';
import trendingUpFill from '@iconify-icons/eva/trending-up-fill';
import trendingDownFill from '@iconify-icons/eva/trending-down-fill';
import { useTheme, alpha, makeStyles } from '@material-ui/core/styles';
import { Box, Card, Typography } from '@material-ui/core';
import baselineHistory from '@iconify-icons/ic/baseline-history';
import AnimatedNumber from 'react-animated-number';
import { useWeb3React } from '@web3-react/core';
import Taalswap from 'src/utils/taalswap';
import { PoolStatus } from 'src/utils/poolStatus';
import { getPoolStatus } from '../../../utils/getPoolStatus';
import { useTranslation } from 'react-i18next';
import TimeCounter from 'src/views/taalswap/Components/TimeCounter';
import moment from 'moment';
// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // alignItems: 'center',
    padding: theme.spacing(3),
    color: theme.palette.info.darker
    // backgroundColor: theme.palette.info.lighter

    // height: '160px'
  },
  trending: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(0.5)
  },
  trendingIcon: {
    width: 24,
    height: 24,
    display: 'flex',
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing(1),
    color: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, 0.16)
  },
  isTrendingDown: {
    color: theme.palette.error.main,
    backgroundColor: alpha(theme.palette.error.main, 0.16)
  }
}));

// ----------------------------------------------------------------------

// CurrentProgress.propTypes = {
//   className: PropTypes.string
// };

function Countdown({ className, pool, ...other }) {
  const classes = useStyles();
  const { i18n, t } = useTranslation();
  const context = useWeb3React();
  const theme = useTheme();
  const { connector, library, account } = context;

  const [timeTillDate, setTimeTillDate] = useState('');
  const [endFlag, setEndFlag] = useState(true);
  const [poolStatus, setPoolStatus] = useState('');

  useEffect(async () => {
    try {
      let taalswap = null;
      if (!!library) {
        taalswap = new Taalswap({
          application: pool,
          account,
          library
        });

        const status = await getPoolStatus(
          taalswap,
          pool.status,
          pool.minFundRaise
        );
        console.log(status);
        setPoolStatus(status);

        var nowEpoch = moment();

        if (poolStatus === PoolStatus.LIVE) {
          console.log('live -> Countdown to IDO End');
          const endEpoch = moment.unix(pool.endDate);
          setEndFlag(false);
          setTimeTillDate(endEpoch.format('MM DD YYYY, h:mm a'));
        } else if (poolStatus === PoolStatus.UPCOMING) {
          console.log('upcoming -> Countdown to IDO Start');
          const startEpoch = moment.unix(pool.startDate);
          setEndFlag(false);
          setTimeTillDate(startEpoch.format('MM DD YYYY, h:mm a'));
        } else {
          console.log('else -> 00 : : 00 : 00 : 00');
          setEndFlag(true);
        }
      } else {
        console.log('188');
      }
    } catch (error) {
      console.log(error);
    }
  }, [pool, poolStatus]);

  return (
    <Card className={clsx(classes.root, className)} {...other}>
      {poolStatus === PoolStatus.LIVE && (
        <Typography marginBottom="20px" variant="subtitle2">
          {t('taalswap.CountDown')} {endFlag && ` - ${t('taalswap.Finish')}`}
        </Typography>
      )}

      {poolStatus === PoolStatus.UPCOMING && (
        <Typography marginBottom="20px" variant="subtitle2">
          {t('taalswap.CountDown')} {endFlag && ` - ${t('taalswap.Finish')}`}
        </Typography>
      )}

      {poolStatus !== PoolStatus.LIVE && poolStatus !== PoolStatus.UPCOMING && (
        <Typography marginBottom="20px" variant="subtitle2">
          {t('taalswap.CountDown')}
        </Typography>
      )}

      <TimeCounter
        timeTillDate={timeTillDate}
        endFlag={endFlag}
        timeFormat="MM DD YYYY, h:mm a"
        color={theme.palette.info.darker}
        poolStatus={poolStatus}
      />
    </Card>
  );
}

export default Countdown;
