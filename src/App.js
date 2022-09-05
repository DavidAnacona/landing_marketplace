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
      </Stack>
    </div >
  );
}

export default App;
