import React from 'react';
import { Box, Tabs, Tab, Typography, createTheme  } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import RemoveIcon from '@mui/icons-material/Remove';




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
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function UserProfile() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  

  return (
    <Box sx={{ width: '100%', bgcolor: '#363C43', color: '#A3ADBA ', borderRadius: '8px', p: 2, position: 'relative' }}>

      {/* Fixed icon at the top left corner */}
      <Box
        sx={{
          position: 'absolute',
          top: 16,
          left: 0,
          m: 1, // Optional: Adds some margin from the edge of the screen
          color: '#A3ADBA '
        }}
      >
        <HelpOutlineIcon />
      </Box>

      {/* Rotated icon fixed on the left middle of the card */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%) rotate(90deg)',
          m: 1, // Optional: Adds some margin from the edge of the card
          display: 'flex',
          alignItems: 'center',
          color: '#A3ADBA '

        }}
      >
        <ViewModuleIcon />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          right: 5,
          top: '50%',
          transform: 'translateY(-50%)',
          width: '5px',  // Adjust width as needed
          height: '50px', // Adjust height as needed
          background: 'linear-gradient(to top, #4A4E54 0%, #A3ADBA 100%)',
          borderRadius: '8px', // Optional: Adds rounded corners
          m: 1, // Optional: Adds some margin from the edge of the card
        }}
      />

      <Box sx={{ pl: 4, pr: 4 }}>
        <Box sx={{ borderBottom: 1, backgroundColor: '#171717', borderRadius: '16px', p: 1, borderColor: 'rgba(255, 255, 255, 0.2)', display: 'flex', alignContent: 'space-between', justifyContent: 'space-between', mb: 2 }}>
          <Tabs value={value}   variant="scrollable" indicatorColor="secondary"
  allowScrollButtonsMobile onChange={handleChange} aria-label="styled tabs example" sx={{ display: 'flex', justifyContent: 'space-between', alignContent: 'space-between', width: '100%' }} TabIndicatorProps={{
            style: { background: 'white' }
          }}>
            <Tab
              label="About Me"
              {...a11yProps(0)}
              sx={{
                backgroundColor: '#171717',
                boxShadow: '-8.4px -16.9px 50.6px -16.9px #485B71, 13.5px 16.9px 67.5px 8.4px #0A0A0A',
                borderRadius: '16px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'Poppins, sans-serif',
                mr: 5,
                width: '135px',
                color: '#FFFFFF',
                '&.Mui-selected': {
                  backgroundColor: '#28292F',
                  color: 'white'
                },
              }}
            />
            <Tab
              label="Experiences"
              {...a11yProps(1)}
              sx={{
                backgroundColor: '#171717',
                boxShadow: '-8.4px -16.9px 50.6px -16.9px #485B71, 13.5px 16.9px 67.5px 8.4px #0A0A0A',
                borderRadius: '16px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'Poppins, sans-serif',
                mx: 4,
                width: '135px',
                color: '#FFFFFF',
                '&.Mui-selected': {
                  backgroundColor: '#28292F',
                  color: 'white'
                },
              }}
            />
            <Tab
              label="Recommended"
              {...a11yProps(2)}
              sx={{
                backgroundColor: '#171717',
                boxShadow: '-8.4px -16.9px 50.6px -16.9px #485B71, 13.5px 16.9px 67.5px 8.4px #0A0A0A',
                borderRadius: '16px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'Poppins, sans-serif',
                color: '#FFFFFF',
                width: '135px',
                ml: 5,
                '&.Mui-selected': {
                  backgroundColor: '#28292F',
                  color: 'white'
                },
              }}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
          <br />
          <br />
          I was born and raised in Albany, NY & have been living in Santa Clara for the past 10 years with my wife Tiffany and my 4-year-old twin daughters - Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...
        </TabPanel>
        <TabPanel value={value} index={1}>
          Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
          <br />
          <br />
          I was born and raised in Albany, NY & have been living in Santa Clara for the past 10 years with my wife Tiffany and my 4-year-old twin daughters - Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...
        </TabPanel>
        <TabPanel value={value} index={2}>
          Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
          <br />
          <br />
          I was born and raised in Albany, NY & have been living in Santa Clara for the past 10 years with my wife Tiffany and my 4-year-old twin daughters - Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...
        </TabPanel>
      </Box>
    </Box>
  );
}
