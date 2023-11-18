import React, { useState } from 'react';
import { AppBar, Grid, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useTranslation } from 'react-i18next';
import DrawerComp from './DrawerComp.js';
import logo from '../img/LOGOVERTICAL-WHITE.png'

interface Props {
window?: () => Window;
children: React.ReactElement;
}

const ScrollHandler = props => {
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(props.children, {
    elevation: trigger ? 15 : 0,
    style: {
            opacity: trigger ? 0.4 : 0.7,
            background: trigger ? 'black' : 'black',
            color: 'white'
        }
    });
  };



const Navbar = ({links, props}) => {
    const { t } = useTranslation();
    const [tab, setTab] = useState();
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <React.Fragment>
            <ScrollHandler {...props}>
                <AppBar position="fixed" style={{left: '0', top: '0'}} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <Toolbar>
                        {isMatch ? 
                            <Grid justifyContent="center" alignItems="center" container>
                                <Grid xs={6}>
                                    <Typography>
                                        <img style={{color: 'white'}} src={logo}></img>
                                    </Typography>
                                </Grid>
                                <Grid xs={4}>
                                </Grid>
                                <Grid direction="row" alignItems="center" justifyContent="flex-end"  xs={2}>
                                    <DrawerComp links={links}></DrawerComp>
                                </Grid>
                            </Grid>
                        :
                        <Grid justifyContent="center" alignItems="center" container>


                            <Grid justifyContent="center" alignItems="center" xs={2}>

                            </Grid>
                            <Grid container justifyContent="center" alignItems="center" item xs={8}>
                                <Typography>
                                        <img src={logo}></img>
                                </Typography>
                                <Tabs  TabIndicatorProps={{style: {background:'#B0B0B0	'}}} textColor='white' value={tab} onChange={(e, tab) => {setTab(tab)}}>
                                    {links.map((link, index) => (
                                        <Tab key={link} label={t(link)}></Tab>
                                    ) )}
                                </Tabs>
                            </Grid>
                            <Grid justifyContent="center" alignItems="center" xs={2}>
                            </Grid>
                        </Grid>
                        }


                    </Toolbar>
                </AppBar>
                </ScrollHandler>
      </React.Fragment>

    )
}

export default Navbar;/*                            <Grid justifyContent="center" alignItems="center" xs={3}>
<Typography>
    <img src={logo}></img>
</Typography>
</Grid>
<Grid container justifyContent="left" alignItems="center" item xs={9}>
<Tabs  TabIndicatorProps={{style: {background:'#B0B0B0	'}}} textColor='white' value={tab} onChange={(e, tab) => {setTab(tab)}}>
    {links.map((link, index) => (
        <Tab key={link} label={t(link)}></Tab>
    ) )}
</Tabs>
</Grid>
*/