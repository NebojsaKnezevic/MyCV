import React from "react";
import { Box, Typography } from '@mui/material';

export const Skills: React.FC = () => {
    return (
        <Box sx={{ my: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Skills</Typography>

            {/* First Row: React */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 0 }}>
                <Typography variant="h6" sx={{ mr: 1 }}>⚛️</Typography> {/* React icon */}
                <Typography variant="body1">React/TypeScript</Typography>
            </Box>

         

            {/* Second Row: .NET */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 0 }}>
                <Typography variant="h6" sx={{ mr: 1 }}>🔵</Typography> {/* .NET icon */}
                <Typography variant="body1">.NET (Dapper, EF Core)</Typography>
            </Box>

                       {/* Second Row: Express */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 0 }}>
                <Typography variant="h6" sx={{ mr: 1 }}>🟢</Typography> {/* Express icon */}
                <Typography variant="body1">Express (TypeScript, Node.js)</Typography>
            </Box>


            {/* Third Row: MUI */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 0 }}>
                <Typography variant="h6" sx={{ mr: 1 }}>📐</Typography> {/* MUI icon */}
                <Typography variant="body1">MUI</Typography>
            </Box>

            {/* Fourth Row: Bootstrap */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 0 }}>
                <Typography variant="h6" sx={{ mr: 1 }}>⚙️</Typography> {/* Bootstrap icon */}
                <Typography variant="body1">Bootstrap</Typography>
            </Box>

            {/* Fifth Row: Python */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 0 }}>
                <Typography variant="h6" sx={{ mr: 1 }}>🐍</Typography> {/* Python icon */}
                <Typography variant="body1">Python</Typography>
            </Box>

            {/* Sixth Row: SQL Server */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 0 }}>
                <Typography variant="h6" sx={{ mr: 1 }}>🗃️</Typography> {/* SQL icon */}
                <Typography variant="body1">SQL</Typography>
            </Box>

            {/* Seventh Row: Power BI */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 0 }}>
                <Typography variant="h6" sx={{ mr: 1 }}>📊</Typography> {/* Power BI icon */}
                <Typography variant="body1">Power BI</Typography>
            </Box>

            {/* Eighth Row: Git */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 0 }}>
                <Typography variant="h6" sx={{ mr: 1 }}>🌱</Typography> {/* Git icon */}
                <Typography variant="body1">Git</Typography>
            </Box>


        </Box>
    );
}
