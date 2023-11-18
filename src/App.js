import { useEffect } from 'react';
import './App.css';
import { styled } from '@mui/material/styles';

import Navbar from './components/Navbar.tsx';
import Services from './components/Services.tsx';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import backgroundImage from './img/home-page-background.jpg'
import { Grid } from '@mui/material';
import { red, green, blue } from '@mui/material/colors';

const BackgroundDiv = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  
  [theme.breakpoints.up('xs')]: {
    minWidth: '100%',
    overflow: 'hidden',
    transform: 'translate(-50%,0)',
    marginLeft: '50%',
    padding: 0,
    maxHeight: '100%'
  },
  [theme.breakpoints.up('md')]: {
    width: '100%',
    overflow: 'hidden',

    padding: 0,
  }
}));
const links = ['home-page', 'about-us-page', 'services-page', 'project-page', 'contact-page',];
function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [])

  const lng = navigator.language;
  return (
    <div className="App">
      <Navbar style={{zIndex:'3'}} links={links}></Navbar>
      <div style={{height: '100vh', position: 'relative', overflow: 'hidden', marginBottom: '20px'}}>
        <BackgroundDiv className='home-page-backgroud-div'>
          <div class="dotted-img"></div>
          <img className='home-page-backgroud-image' src={backgroundImage}></img>
        </BackgroundDiv>
        <div className='home-page-background-texts'>
          <h1>25 YILLIK ÜLKEDE</h1>
          <h1>85 YILLIK TECRUBE</h1>
        </div>

      </div>
      <Services></Services>

        <Box sx={{ my: 2 }}>

        <Grid justifyContent="center" alignItems="center" container>
          <Grid xs={3}></Grid>
          <Grid xs={9}>


          </Grid>
        </Grid>
      </Box>

      
          <Box sx={{ my: 2 }}>
          {[...new Array(100)]
              .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                  Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
              )
              .join('\n')}
          </Box>
      <h1>{lng}</h1>
    </div>
  );
}

export default App;
