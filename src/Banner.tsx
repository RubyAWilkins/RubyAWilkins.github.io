import { Box, Button, ButtonGroup, CardMedia, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import Spacer from './Spacer';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function BannerImage() {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        height: '100vh',
        backdropFilter: 'blur(5px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CardMedia
        component="img"
        alt="Banner Image"
        image="profile.png"
        sx={{
          width: '170px',
        }}
      />
      <Spacer />
      <Typography sx={{
        textShadow: '8px 8px 8px rgba(0, 0, 0, 1)',
        fontWeight: '600'
      }} variant="h1" color="text.primary">
        Ruby Wilkins
      </Typography>
      <Typography sx={{
        textShadow: '8px 8px 8px rgba(0, 0, 0, 1)',
        fontWeight: '300',
        width:"70%"
      }} variant="h5" color="text.primary">
        I'm passionate about the ways that diversity, equity and inclusion can enhance employees' experience, ease stakeholder engagement and deliver better outcomes for organisations.
      </Typography>
      <Spacer />
      {Links()}
    </Box>
  );
}

function Links() {
  return <ButtonGroup aria-label="Contact Buttons">
      <Button href="https://www.seek.com.au/profile/ruby-wilkins-jt8BJFntbb" target="_blank">
          Seek <AccountCircleIcon sx={{paddingLeft: "8px"}} />
      </Button>
      <Button href="mailto:contact@rubywilkins.com">
          Email <EmailIcon sx={{paddingLeft: "8px"}} />
      </Button>
  </ButtonGroup>;
}
