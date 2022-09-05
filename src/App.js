import { Stack, Box, Button, Typography } from '@mui/material';
import './App.css';
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="App">
      <Stack sx={{ width: '100%', height: '100%', backgroundImage: "url('./assets/background-main-landian.svg')" }}>
        <Stack sx={{ width: '100%', height: '100vh' }}>
          <Stack sx={{ width: '100%', flexDirection: 'row', alignItems: 'center', height: '120px', justifyContent: 'space-between' }}>
            <Box sx={{ marginTop: '180px' }}>
              <img src='./assets/landian-text-logo.svg' alt='LANDIAN' />
            </Box>
            <Box sx={{ marginRight: '100px' }}>
              <Button sx={{ backgroundColor: 'white', color: 'black', fontSize: '10px', fontWeight: '400', width: '153px', height: '40px', borderRadius: '60px', marginRight: '40px' }}>WHITEPAPER</Button>
              <Button sx={{ backgroundColor: 'black', color: 'white', fontSize: '10px', fontWeight: '400', width: '153px', height: '40px', borderRadius: '60px', border: '1px solid white' }}>HOW TO BUY IT</Button>
            </Box>
          </Stack>
          <Stack sx={{ color: 'white', fontSize: '32px', fontWeight: '400', marginTop: '50px' }}>
            <Typography variant='h4'>LANDIAN <b>STARTS HERE, WITH YOU.</b></Typography>
          </Stack>
          <Stack sx={{ flexDirection: 'row', alignItems: 'center', marginTop: '-190px' }}>
            <img src='./assets/hand 1.png' alt='LANDIAN' style={{ width: '1000px', height: '1100px', marginLeft: '-400px' }} />
            <Box sx={{ width: '950px', height: '345px', marginLeft: '-130px', marginTop: '-250px' }}>
              <ReactPlayer url='https://youtu.be/s0rHe0uw-V8' width='100%' height='100%' controls />
            </Box>
          </Stack>
          <Stack sx={{ marginTop: '-450px', alignItems: 'center' }}>
            <Typography sx={{ color: 'white', fontSize: '20px', fontWeight: '300' }}>You are a few steps away from <b>buying land in Landian.</b></Typography>
            <Typography sx={{ color: 'white', fontSize: '20px', fontWeight: '300' }}>You can now <b>dream about</b> what you will build in this metaverse.</Typography>
            <Button sx={{ backgroundColor: 'black', color: 'white', fontSize: '20px', fontWeight: '700', width: '233px', height: '75px', borderRadius: '100px', border: '1px solid white', marginTop: '40px' }}>BUY LNDA</Button>
            <Typography sx={{ fontSize: '30px', fontWeight: '200', lineHeight: '40px', color: 'white', marginTop: '40px' }}>TAKE ADVANTAGE OF <b>THE METAVERSE WITH YOUR LANDS.</b></Typography>
          </Stack>
        </Stack>
        <Stack sx={{ width: '100%', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
          <Stack sx={{ color: 'white', fontSize: '32px', fontWeight: '400', marginTop: '50px' }}>
            <Typography variant='h4'>OUR <b>MARKETPLACE</b> GUIDES YOU <b>TO THE GATES OF LANDIAN</b></Typography>
          </Stack>
          <Stack sx={{ flexDirection: 'row', color: 'white', marginTop: '80px' }}>
            <Box sx={{ border: '1px solid white', borderRadius: '103px', width: '333px', height: '449px', marginRight: '50px' }}>
              <img src='./assets/seccion2-money.png' alt='LANDIAN' style={{ width: '500px', height: '409px', marginLeft: '-80px' }} />
              <Typography sx={{ marginTop: '-40px', fontSize: '20px', opacity: '0.8' }}>1. BUY <b>$LNDA</b> NOW</Typography>
            </Box>
            <Box sx={{ border: '1px solid white', borderRadius: '103px', width: '333px', height: '449px', marginRight: '50px' }}>
              <img src='./assets/seccion2-golden.png' alt='LANDIAN' style={{ width: '300px', height: '400px', transform: 'rotate(-10.6deg)', marginTop: '10px' }} />
              <Typography sx={{ marginTop: '-40px', fontSize: '12px', opacity: '0.8' }}>2. DECIDE <b>WHAT YOU'RE GOING</b></Typography>
              <Typography sx={{ fontSize: '12px', opacity: '0.5' }}><b>TO BUILD IN LANDIAN</b></Typography>
            </Box>
            <Box sx={{ border: '1px solid white', borderRadius: '103px', width: '333px', height: '449px' }}>
              <img src='./assets/seccion2-planet.png' alt='LANDIAN' style={{ width: '367px', height: '307px', marginLeft: '-16px', marginTop: '55px' }} />
              <Typography sx={{ marginTop: '5px', fontSize: '12px', opacity: '0.8' }}>3. SET UP THE <b>LANDIAN ECOSYSTEM</b></Typography>
            </Box>
          </Stack>
          <Button sx={{ backgroundColor: 'black', color: 'white', fontSize: '20px', fontWeight: '700', width: '233px', height: '75px', borderRadius: '100px', border: '1px solid white', marginTop: '100px' }}>LET'S START!</Button>
        </Stack>
        <Stack sx={{ width: '100%', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
          <Stack sx={{ color: 'white', fontSize: '32px', fontWeight: '400' }}>
            <Typography sx={{ fontSize: '20px', lineHeight: '19.14px' }}><b>6 DISTRICTS TO EXPLORE</b> WITH THE SAME TOPOGRAPHY AS THE EARTH.</Typography>
          </Stack>
          <Stack sx={{ flexDirection: 'row', color: 'white', marginTop: '80px' }}>
            <Box marginLeft={-45}>
              <Box maxWidth={230} paddingTop={5}>
                <Typography paragraph textAlign={'left'} fontSize={20} fontWeight={300}><b>CHOOSE YOUR LAND</b> IN ANY OF OUR SIX DISTRICT</Typography>
              </Box>
              <img src='./assets/seccion3.svg' alt='LANDIAN' style={{ width: '866px', height: '487px', marginTop: '-120px', marginLeft: '-150px' }} />
            </Box>
            <Box>
              <Box textAlign={'left'} maxWidth={200} marginTop={16} marginLeft={10}>
                <Typography paragraph fontSize={20} fontWeight={300}>ENTERTAINMENT</Typography>
                <Typography paragraph fontSize={20} fontWeight={300}><b>FINANCE AND EDUCATION</b></Typography>
                <Typography paragraph fontSize={20} fontWeight={300}>LIFESTYLE</Typography>
                <Typography paragraph fontSize={20} fontWeight={300}><b>TECH AND SCIENCE</b></Typography>
                <Typography paragraph fontSize={20} fontWeight={300}>SPORTS</Typography>
                <Typography paragraph fontSize={20} fontWeight={300}><b>ADULTS</b></Typography>
              </Box>
              <img src='./assets/oculus.svg' alt='LANDIAN' style={{ width: '900px', height: '920px', marginRight: '-600px', marginTop: '-420px' }} />
            </Box>
          </Stack>
          <Button sx={{ backgroundColor: 'black', color: 'white', fontSize: '20px', fontWeight: '700', width: '233px', height: '75px', borderRadius: '100px', border: '1px solid white', marginTop: '-350px' }}>BUY LNDA</Button>
        </Stack>
        <Stack sx={{ width: '100%', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
          <Stack sx={{ color: 'white', fontSize: '32px', fontWeight: '400', marginTop: '50px' }}>
            <Typography variant='h4'>OUR <b>MARKETPLACE</b> GUIDES YOU <b>TO THE GATES OF LANDIAN</b></Typography>
          </Stack>
          <Stack sx={{ flexDirection: 'row', color: 'white', marginTop: '80px' }}>
            <Box sx={{ border: '1px solid white', borderRadius: '103px', width: '333px', height: '449px', marginRight: '50px' }}>
              <img src='./assets/seccion2-money.png' alt='LANDIAN' style={{ width: '500px', height: '409px', marginLeft: '-80px' }} />
              <Typography sx={{ marginTop: '-40px', fontSize: '20px', opacity: '0.8' }}>1. BUY <b>$LNDA</b> NOW</Typography>
            </Box>
            <Box sx={{ border: '1px solid white', borderRadius: '103px', width: '333px', height: '449px', marginRight: '50px' }}>
              <img src='./assets/seccion2-golden.png' alt='LANDIAN' style={{ width: '300px', height: '400px', transform: 'rotate(-10.6deg)', marginTop: '10px' }} />
              <Typography sx={{ marginTop: '-40px', fontSize: '12px', opacity: '0.8' }}>2. DECIDE <b>WHAT YOU'RE GOING</b></Typography>
              <Typography sx={{ fontSize: '12px', opacity: '0.5' }}><b>TO BUILD IN LANDIAN</b></Typography>
            </Box>
            <Box sx={{ border: '1px solid white', borderRadius: '103px', width: '333px', height: '449px' }}>
              <img src='./assets/seccion2-planet.png' alt='LANDIAN' style={{ width: '367px', height: '307px', marginLeft: '-16px', marginTop: '55px' }} />
              <Typography sx={{ marginTop: '5px', fontSize: '12px', opacity: '0.8' }}>3. SET UP THE <b>LANDIAN ECOSYSTEM</b></Typography>
            </Box>
          </Stack>
          <Button sx={{ backgroundColor: 'black', color: 'white', fontSize: '20px', fontWeight: '700', width: '233px', height: '75px', borderRadius: '100px', border: '1px solid white', marginTop: '100px' }}>LET'S START!</Button>
        </Stack>
      </Stack>
    </div >
  );
}

export default App;
