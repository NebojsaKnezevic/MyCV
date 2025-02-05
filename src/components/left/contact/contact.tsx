import { Box, Typography } from '@mui/material';
import React from 'react';

export const Contact: React.FC = () => {
    return (
        <Box sx={{ my: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Contact</Typography>

            {/* First Row: Email */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 0 }}>
                <Typography variant="h6" sx={{ mr: 1 }}>📧</Typography> {/* Email icon */}
                <Typography variant="body1">nebojsaknezevic94@gmail.com</Typography>
            </Box>

            {/* Second Row: Phone */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 0 }}>
                <Typography variant="h6" sx={{ mr: 1 }}>📞</Typography> {/* Phone icon */}
                <Typography variant="body1">+381-61-500-7654</Typography>
            </Box>

            {/* Third Row: GitHub */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 0 }}>
                <Typography variant="h6" sx={{ mr: 1 }}>🐙</Typography> {/* GitHub icon */}
                <Typography variant="body1">
                    <a href="https://github.com/NebojsaKnezevic" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </Typography>
            </Box>


            {/* Fourth Row: LinkedIn */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" sx={{ mr: 1 }}>💼</Typography> {/* LinkedIn icon */}
                <Typography variant="body1">
                    <a href="https://www.linkedin.com/in/nebojsa-knezevic-952b1b344/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </Typography>
            </Box>
        </Box>
    );
};
