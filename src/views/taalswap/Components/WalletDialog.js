import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography
} from '@material-ui/core';

import { injected, walletconnect } from 'src/connectors';
import { setActivatingConnector } from 'src/redux/slices/wallet';
import { useDispatch } from 'react-redux';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

const useStyles = makeStyles((theme) => ({
  root: {},
  button: {
    width: '100px'
  },
  dialogTitle: {
    textAlign: 'center',
    fontSize: 20,
    // color: '#000000',
    paddingTop: 10
  },
  // page 4-1 디자인 변경 : border 테두리,
  walletBoxWrapper: {
    padding: '0rem 1rem 0rem 1rem',
    borderRadius: '1em',
    border: '1px solid',
    borderColor: theme.palette.primary.main,
    marginBottom: '1rem',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  // 4-1 디자인 변경 connect to wall,
  walletBoxIcon: {
    alignItems: 'center'
  },
  walletBoxContent: {
    margin: '0.5rem',
    minWidth: 135,
    padding: '0rem 0.5rem 0rem 0.5rem'
  }
}));

const walletList = [
  {
    name: 'MetaMask'
  },
  {
    name: 'WalletConnect'
  },
  {
    name: 'Binance Wallet'
  }
];

const WalletDialog = ({ isOpenModal, handleCloseModal, activate }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onClickWallet = async (wallet) => {
    try {
      if (wallet.name === 'MetaMask') {
        await activate(injected);
        dispatch(setActivatingConnector(injected));
      } else if (wallet.name === 'WalletConnect') {
        console.log('await');
        const wc = walletconnect(true);
        await activate(wc, undefined, true);
      }
      console.log('end', wallet);
    } catch (e) {
      console.log(e);
    }

    handleCloseModal(wallet.name);
  };

  return (
    <React.Fragment>
      <Dialog
        maxWidth="xs"
        fullWidth
        open={isOpenModal}
        onClose={handleCloseModal}
        aria-labelledby="max-width-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box className={classes.dialogTitle}>CONNECT TO A WALLET</Box>
        <DialogTitle
          className={classes.dialogTitle}
          id="customized-dialog-title"
          onClose={handleCloseModal}
        />
        <DialogContent>
          {walletList.map((wallet, index) => (
            <Box
              key={index}
              className={classes.walletBoxWrapper}
              boxShadow="3"
              onClick={() => onClickWallet(wallet)}
            >
              <Box
                component="img"
                alt="logo"
                src={'/static/icons/wallet_icon0' + (index + 1) + '.png'}
                height={index == 1 ? 30 : 40}
                className={classes.walletBoxIcon}
              />
              <Box className={classes.walletBoxContent}>
                <Typography>{wallet.name}</Typography>
              </Box>
            </Box>
          ))}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default WalletDialog;
