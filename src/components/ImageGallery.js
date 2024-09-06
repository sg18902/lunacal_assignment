import React, { useState } from 'react';
import { Box, Grid, Button, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';

export default function ImageGallery() {
  const [images, setImages] = useState([img2, img3, img4, img1]);
  const [index, setIndex] = useState(0);
  const [fileInput, setFileInput] = useState(null);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleAddImage = (event) => {
    const file = event.target.files[0]; // Get the uploaded file
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Convert file to URL
      setImages((prevImages) => [...prevImages, imageUrl]); // Add new image to the array
    }
  };

  const visibleImages = [
    images[index],
    images[(index + 1) % images.length],
    images[(index + 2) % images.length],
  ];

  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: '#363C43',
        color: '#A3ADBA',
        borderRadius: '8px',
        p: 2,
        position: 'relative',
        maxWidth: '1200px', // Set a max width to limit stretching on large screens
        margin: '0 auto',   // Center the component on large screens
      }}
    >
      {/* Fixed icon at the top left corner */}
      <Box
        sx={{
          position: 'absolute',
          top: 16,
          left: 0,
          m: 1,
          color: '#A3ADBA',
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
          m: 1,
          display: 'flex',
          alignItems: 'center',
          color: '#A3ADBA',
        }}
      >
        <ViewModuleIcon />
      </Box>

      {/* Header Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
          pl: { xs: 1, sm: 2, md: 4 },  // Adjust padding based on screen size
          pr: { xs: 1, sm: 2, md: 4 },
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            backgroundColor: '#171717',
            borderRadius: '16px',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'Poppins, sans-serif',
            width: { xs: '100px', sm: '135px' },  // Adjust width for smaller screens
            p: 1,
          }}
        >
          Gallery
        </Typography>
        <Box>
          <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }} // Hide the default input field
            id="upload-button"
            onChange={handleAddImage}
          />
          <label htmlFor="upload-button">
            <Button
              variant="contained"
              component="span"
              sx={{
                bgcolor: '#52575D',
                color: '#E0FBE2',
                borderRadius: '25px',
                textTransform: 'none',
                mr: { xs: 2, sm: 4 },  // Adjust margin based on screen size
                boxShadow: `
                  inset 0px 3.26px 3.26px 0px #FFFFFF26, 
                  inset 0px 0px 48.91px 0px #FFFFFF0D, 
                  9px 10px 7.1px 0px #00000066, 
                  -0.5px -0.5px 6.9px 0px #FFFFFF40
                `,
                '&:active': {
                  background: 'linear-gradient(150deg, #6096B4 0%, #000 100%)',
                },
              }}
              startIcon={<AddIcon />}
            >
              Add Image
            </Button>
          </label>

          <IconButton
            onClick={handlePrev}
            sx={{
              bgcolor: '#171717',
              color: '#E0FBE2',
              borderRadius: '50%',
              boxShadow: `
                inset 0px 3.26px 3.26px 0px #FFFFFF26, 
                inset 0px 0px 48.91px 0px #FFFFFF0D, 
                9px 10px 7.1px 0px #00000066, 
                -0.5px -0.5px 6.9px 0px #FFFFFF40
              `,
              '&:active': {
                background: 'linear-gradient(150deg, #6096B4 0%, #000 100%)',
              },
              ml: { xs: 0.5, sm: 1 },  // Adjust margin for smaller screens
            }}
          >
            <WestIcon />
          </IconButton>
          <IconButton
            onClick={handleNext}
            sx={{
              bgcolor: '#171717',
              color: '#E0FBE2',
              borderRadius: '50%',
              boxShadow: `
                inset 0px 3.26px 3.26px 0px #FFFFFF26, 
                inset 0px 0px 48.91px 0px #FFFFFF0D, 
                9px 10px 7.1px 0px #00000066, 
                -0.5px -0.5px 6.9px 0px #FFFFFF40
              `,
              '&:active': {
                background: 'linear-gradient(150deg, #6096B4 0%, #000 100%)',
              },
              ml: { xs: 0.5, sm: 1 },  // Adjust margin for smaller screens
            }}
          >
            <EastIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Image Grid */}
      <Grid
        container
        spacing={2}
        sx={{
          pl: { xs: 1, sm: 2, md: 4 }, // Adjust padding for smaller screens
          pr: { xs: 1, sm: 2, md: 4 },
        }}
      >
        {visibleImages.map((image, idx) => (
          <Grid
            item
            xs={12} // Full width on extra small screens
            sm={4}  // 4 columns on small screens and above
            key={idx}
          >
            <Box
              sx={{
                bgcolor: '#1F1F1F',
                borderRadius: '8px',
                paddingBottom: '75%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(${image})`,
                filter: 'grayscale(100%)',
                transition: 'all 0.3s ease-in-out',
                transform: 'scale(1)', // Default scale
                '&:hover': {
                  filter: 'grayscale(0%)',
                  transform: 'scale(1.05) rotate(-3deg) translateY(-15px)', // Adds Y-axis lift along with tilt and scale
                  boxShadow: '0 15px 25px rgba(0, 0, 0, 0.5)', // Enhanced shadow for more lift effect
                },
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
