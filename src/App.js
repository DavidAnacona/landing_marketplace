import { Stack, Box, Button, Typography, Input } from '@mui/material';
import './App.css';
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="App">
      <Stack sx={{ width: '100%', height: '100%', backgroundImage: "url('./assets/background-main-landian-min.png')" }}>
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
              <img src='./assets/oculus.svg' alt='LANDIAN' style={{ width: '880px', height: '920px', marginRight: '-600px', marginTop: '-420px' }} />
            </Box>
          </Stack>
          <Button sx={{ backgroundColor: 'black', color: 'white', fontSize: '20px', fontWeight: '700', width: '233px', height: '75px', borderRadius: '100px', border: '1px solid white', marginTop: '-350px' }}>BUY LNDA</Button>
        </Stack>
        <Stack sx={{ width: '100%', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
          <Stack sx={{ color: 'white', fontSize: '32px', fontWeight: '400', marginTop: '50px' }}>
          </Stack>
          <Stack sx={{ flexDirection: 'column', color: 'white' }}>
            <Box textAlign={'left'} marginLeft={4} marginBottom={-11}>
              <Typography paragraph sx={{ fontSize: '32px', lineHeight: '30px', fontWeight: '300', marginBottom: '36px' }}>WELCOME TO PLANET LANDIAN</Typography>
              <Typography paragraph sx={{ fontSize: '42px', lineHeight: '30px', fontWeight: '700' }}><b>TIER 1</b></Typography>
            </Box>
            <Box maxWidth={650} marginLeft={115} marginBottom={8}>
              <Typography fontSize={20} fontWeight={400} textAlign={'right'}>Tier 1 of the Landian metaverse is divided into 6 districts, each composed of 120,000 lots, and 73,520,664 sq meters to build upon. </Typography>
            </Box>
            <img src='./assets/seccion4.svg' alt='LANDIAN' style={{ width: '1700px', height: '900px', marginLeft: '-60px', marginTop: '-160px' }} />
            <img src='./assets/hand-seccion4.svg' alt='LANDIAN' style={{ width: '650px', height: '915px', marginLeft: '1080px', marginTop: '0px', position: 'absolute', transform: 'rotate(-1.76deg)' }} />
            <Box sx={{ opacity: '0.6', textAlign: 'center', color: 'white', marginTop: '-330px', border: '1px solid white', maxWidth: '200px', height: '208px', marginLeft: '1050px', lineHeight: '16px' }}>
              <Typography fontSize={17} >BIOMES:</Typography>
              <Typography fontSize={13} marginTop={1}>TUNDRA</Typography>
              <Typography fontSize={13} marginTop={1}>FOREST</Typography>
              <Typography fontSize={13} marginTop={1}>SAVANNA</Typography>
              <Typography fontSize={13} marginTop={1}>JUNGLE</Typography>
              <Typography fontSize={13} marginTop={1}>PLAIN</Typography>
              <Typography fontSize={13} marginTop={1}>DESERT</Typography>
            </Box>
            <Button sx={{ backgroundColor: 'black', color: 'white', fontSize: '20px', fontWeight: '700', width: '233px', height: '75px', borderRadius: '100px', border: '1px solid white', marginTop: '20px', marginLeft: '10px' }}>GET MY LAND</Button>
          </Stack>
        </Stack>
        <Stack sx={{ backgroundImage: "url('./assets/background-metal.svg')" }}>
          <Stack sx={{ width: '100%', height: '100vh', justifyContent: 'center' }}>
            <Stack sx={{ color: 'white', fontSize: '32px', fontWeight: '400', marginTop: '50px', flexDirection: 'row', justifyContent: 'space-around' }}>
              <Typography paragraph sx={{ fontSize: '20px', fontWeight: '300', maxWidth: '800px', textAlign: 'left', lineHeight: '50px', marginLeft: '-100px' }}><b>LANDIAN</b> IS A DECENTRALIZED <b>METAVERSE </b> WITH <b>SIX DISTRICT AVAILABLE FOR GAMING, PURCHASING, SELLING, AND LEARNING NEW WAYS TO INTERACT WITH OTHERS.</b></Typography>
              <Button sx={{ backgroundColor: 'black', color: 'white', fontSize: '20px', fontWeight: '700', width: '233px', height: '75px', borderRadius: '100px', border: '1px solid white', marginLeft: '-200px' }}>GET THE TOKEN</Button>
            </Stack>
            <Stack sx={{ color: 'white', fontSize: '32px', fontWeight: '400', marginTop: '50px', flexDirection: 'row' }}>
              <img src='./assets/statistic.png' alt='LANDIAN' style={{ width: '950px', height: '332px', marginLeft: '150px' }} />
              <img src='./assets/seccion2-money.png' alt='LANDIAN' style={{ width: '750px', height: '700px', marginTop: '-200px', marginLeft: '-40px' }} />
            </Stack>
          </Stack>
          <Stack sx={{ wigth: '100vw', height: '100vh' }}>
            <Stack sx={{ width: '100%', height: '100%', backgroundImage: "url('./assets/background-6.svg')", backgroundSize: 'cover' }} justifyContent={'space-between'}>
              <Stack sx={{ justifyContent: 'end', alignItems: 'end', marginTop: '100px', marginRight: '150px' }}>
                <Button sx={{ backgroundColor: 'black', color: 'white', fontSize: '20px', fontWeight: '700', width: '233px', height: '75px', borderRadius: '100px', border: '1px solid white' }}>GET MY LAND</Button>
              </Stack>
              <Stack alignItems={'center'} marginBottom={'20'}>
                <Typography paragraph textAlign={'center'} fontSize={36} fontWeight={300} color={'white'}>Enjoy the best graphics with the magic of <b>UNREAL 5</b></Typography>
                <img src='./assets/discord.png' alt='Discord' style={{ width: '160px', height: '128px', marginTop: '0px', marginLeft: '0px' }} />
              </Stack>
            </Stack>
          </Stack>
          <Stack sx={{ width: '100%', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
            <img src='./assets/twitter-landian.svg' alt='Twitter' style={{ width: '837px', height: '311px', marginTop: '0px', marginLeft: '0px' }} />
            <Stack sx={{ flexDirection: 'row', marginTop: '60px' }}>
              <Input variant='outlined' sx={{ width: '577px', height: '38px', borderRadius: '100px', border: '1px solid white', color: 'white' }} />
              <Typography paragraph sx={{ fontSize: '16px', fontWeight: '700', color: 'white', marginLeft: '20px', marginTop: '10px' }}>SUBSCRIBE TO OUR NEWSLETTER</Typography>
            </Stack>
            <Stack flexDirection={'row'}>
              <Stack sx={{ color: 'white', marginTop: '100px', lineHeight: '19px', width: '600px', marginRight: '400px', textAlign: 'left' }}>
                <Box>
                  <Typography paragraph sx={{ fontSize: '20px', fontWeight: '400' }}>EVERYTHING LOOKS <b>BETTER IN LANDIAN;</b></Typography>
                  <Typography paragraph sx={{ fontSize: '20px', fontWeight: '400' }}><b>BUY YOUR FIRST LAND</b> AND START BUILDING.</Typography>
                </Box>
                <Box sx={{ marginTop: '80px' }}>
                  <Typography paragraph sx={{ fontSize: '20px', fontWeight: '400' }}>KEEP UP WITCH EVERYTHING HAPPENING IN <b>LANDIAN.</b></Typography>
                  <Typography paragraph sx={{ fontSize: '20px', fontWeight: '400' }}><b>LET'S CONNECT!</b></Typography>
                </Box>
              </Stack>
              <Stack sx={{ flexDirection: 'row', marginLeft: '50px', alignItems: 'center', letterSpacing: '50%' }}>
                <Typography sx={{ color: 'white', fontSize: '20px', fontWeight: '700', marginRight: '-100px', marginBottom: '-100px' }}>L A N D I A N . I O</Typography>
                <img src='./assets/human-landian.svg' alt='Human' style={{ width: '450px', height: '450px' }} />
              </Stack>
            </Stack>
            <Stack flexDirection={'row'}>
              <img src='./assets/logo-twitter.svg' alt='Twitter' style={{ width: '38px', height: '35px', marginRight: '20px' }} />
              <img src='./assets/logo-instagram.svg' alt='Instagram' style={{ width: '38px', height: '35px', marginRight: '20px' }} />
              <img src='./assets/logo-youtube.svg' alt='Youtube' style={{ width: '38px', height: '35px', marginRight: '20px' }} />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </div >
  );
}

export default App;
