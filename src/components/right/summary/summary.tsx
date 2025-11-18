import React from "react";
import { Box, Typography } from "@mui/material";

export const Summary: React.FC = () => {
    return (
        <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>Summary</Typography>
            <Typography variant="body1">
                Software Developer with experience in full-stack web development, data integration and business intelligence. 
                Skilled in React, .NET, Express, Typescript and SQL, with a strong focus on creating efficient and user-friendly applications. 
                Continuously learning and improving to tackle new challenges.
            </Typography>
        </Box>
    );
};
