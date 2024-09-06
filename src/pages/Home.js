import React from "react";
import UserProfile from "../components/UserProfile";
import { Box, Grid } from "@mui/material";
import ImageGallery from "../components/ImageGallery";

export default function Home() {
    return (
        <Box sx={{ p: 2, background: 'linear-gradient(180deg, #373E44 -100%, #191B1F 100%)', minHeight: '96vh' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Box sx={{ width: '100%', height: '100%' }}></Box>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Box>
                        <Box sx={{ p: 5, pb: 1 }}>
                            <UserProfile />
                        </Box>
                        <Box sx={{ p: 5, pb: 0 }}>
                            <ImageGallery />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
