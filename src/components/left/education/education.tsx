import { Box, Typography } from '@mui/material';
import React from 'react';

export const Education: React.FC = () => {
  return (
    <Box sx={{ my: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Education</Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', mb: 0 }}>
        <Typography variant="h6" sx={{ mr: 1 }}>🎓</Typography> {/* Graduation Cap emoji */}
        <Typography variant="body1">Bachelor's Degree in Information Technology, Higher Technical School of Professional Studies in Novi Sad (VTSNS)</Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', mb: 0 }}>
        <Typography variant="h6" sx={{ mr: 1 }}>🏫</Typography> {/* School emoji */}
        <Typography variant="body1">Graduated: 2023</Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', mb: 0 }}>
        <Typography variant="h6" sx={{ mr: 1 }}>🔄</Typography> {/* Repeat/Refresh emoji */}
        <Typography variant="body1">Currently pursuing Master's in Information Technologies at VTSNS</Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', mb: 0 }}>
        <Typography variant="h6" sx={{ mr: 1 }}>🏫</Typography> {/* School emoji */}
        <Typography variant="body1">Graduated: 202_</Typography>
      </Box>
    </Box>
  );
};
