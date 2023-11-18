import React, { useState } from 'react';
import {Grid, Button, CardActionArea, CardActions, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import backgroundImage from '../img/home-page-background2.jpg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';

const ResponsiveSize = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    
    [theme.breakpoints.up('xs')]: {
        maxWidth: '350px',
    },
    [theme.breakpoints.up('md')]: {
        maxWidth: 'unset'
    }
  }));

const serviceList = [
{url: backgroundImage, title: 'Title1', description: 'Desc1'}
,{url: backgroundImage, title: 'Title2', description: 'Desc2'}
,{url: backgroundImage, title: 'Title3', description: 'Desc3'}
,{url: backgroundImage, title: 'Title4', description: 'Desc4'}
,{url: backgroundImage, title: 'Title5', description: 'Desc5'}
,{url: backgroundImage, title: 'Title6', description: 'Desc6'}];
const Services = ({props}) => {
    return (
        <React.Fragment>
            <Grid style={{background:'white', marginBottom: '20px'}} justifyContent="center" alignItems="center" container>
                <Grid container justifyContent="center" alignItems="center" item>
                    <h1>Services</h1>
                </Grid>

            </Grid>
            <Grid style={{background:'white'}} justifyContent="center" alignItems="center" container spacing={2}>

                {serviceList.map((link, index) => (
                    <Grid container justifyContent="center" alignItems="center" item xs={12} md={6} lg={4}>
                        <ResponsiveSize>
                            <Card sx={{border: 'none'}}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="300"
                                    image={link.url}
                                    alt="green iguana"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {link.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {link.description}
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </ResponsiveSize>
                    </Grid>
                ) )}
            </Grid>
        </React.Fragment>

    )
}

export default Services;