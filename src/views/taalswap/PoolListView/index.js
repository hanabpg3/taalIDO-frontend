import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { capitalCase } from 'change-case';
import { Icon } from '@iconify/react';
import roundAccountBox from '@iconify-icons/ic/round-account-box';
import { HeaderDashboard } from 'src/layouts/Common';
import Page from '../../../components/Page';
import {
  Tab,
  Tabs,
  Card,
  Container,
  Grid,
  Box,
  Typography
} from '@material-ui/core';
import BasicTable from './BasicTable';
import { useTranslation } from 'react-i18next';
import MyPools from './MyPools';
import { useWeb3React } from '@web3-react/core';
import { useDispatch, useSelector } from 'react-redux';
import { getSwapList, getPoolList } from '../../../redux/slices/pool';

// ----------------------------------------------------------------------

const ACCOUNT_TABS = [
  {
    value: 0,
    title: 'All Projects',
    icon: <Icon icon={roundAccountBox} width={20} height={20} />,
    component: <BasicTable />
  },
  {
    value: 1,
    title: 'My Projects',
    icon: <Icon icon={roundAccountBox} width={20} height={20} />,
    component: <MyPools />
  }
];
const useStyles = makeStyles((theme) => ({
  root: {},
  tabBar: {
    marginBottom: theme.spacing(5)
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Card>{children}</Card>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

function PoolListView() {
  const classes = useStyles();
  const context = useWeb3React();
  const dispatch = useDispatch();
  const [currentTab, setCurrentTab] = useState('All Pools');
  const [value, setValue] = useState(0);
  const { library, account } = context;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeTab = (event, newValue) => {
    setCurrentTab(newValue);
  };
  const { i18n, t } = useTranslation();

  useEffect(async () => {
    await dispatch(getPoolList());
    await dispatch(getSwapList(account));
  }, [dispatch]);

  return (
    <Page title={t('taalswap.projects')} className={classes.root}>
      <Container maxWidth="lg">
        {/* <HeaderDashboard
          heading={t('taalswap.projects')}
          links={[{ name: 'Swap' }]}
        /> */}
        <HeaderDashboard
          heading={t('taalswap.projects')}
          links={[{ name: 'textejfiej' }]}
        />
        <Tabs
          value={value}
          scrollButtons="auto"
          variant="scrollable"
          allowScrollButtonsMobile
          onChange={handleChange}
          className={classes.tabBar}
        >
          {ACCOUNT_TABS.map((tab) => (
            <Tab
              disableRipple
              key={tab.value}
              label={capitalCase(tab.title)}
              icon={tab.icon}
              value={tab.value}
            />
          ))}
        </Tabs>
        <TabPanel value={value} index={0}>
          <BasicTable />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <MyPools />
        </TabPanel>
      </Container>
    </Page>
  );
}

export default PoolListView;
