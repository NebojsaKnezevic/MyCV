import { Box, Typography, Grid2 } from "@mui/material";
import React from "react";

export const Projects: React.FC = () => {
  return (
    <Box sx={{ my: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Projects</Typography>

      <Grid2 container spacing={3} sx={{ mt: 2 }}>
        {/* eTime Project */}
        <Grid2 >
          <Typography variant="h6" >eTime</Typography>
          <Typography variant="body1">
            Worked on ensuring data quality between the eTime database and ABB database. Used Power BI to analyze and display differences between the two datasets, providing insights into data inconsistencies.
          </Typography>
        </Grid2>

        {/* EmailParser Project */}
        <Grid2>
          <Typography variant="h6">EmailParser</Typography>
          <Typography variant="body1">
            Developed a tool to extract data and text from email files. This data was then presented in a tabular format using Power BI, enabling efficient data analysis and reporting.
          </Typography>
        </Grid2>

        {/* Concur Project */}
        <Grid2>
          <Typography variant="h6">Concur</Typography>
          <Typography variant="body1">
            Prepared ABB data for integration into their system and developed a web application using .NET and React. The application allowed employees to compare the state of data between ABB and Concur database in a user-friendly interface.
          </Typography>
        </Grid2>

        {/* GBT Project */}
        <Grid2>
          <Typography variant="h6">GBT</Typography>
          <Typography variant="body1">
            Similar to the Concur project but without the web application component. Focused on data preparation and integration for GBT systems.
          </Typography>
        </Grid2>

        {/* Medical Survey Web App */}
        <Grid2>
          <Typography variant="h6">Medical Survey Web App</Typography>
          <Typography variant="body1">
            Web application for a hospital using .NET, React, and TypeScript. The application includes a medical survey feature, streamlining patient data collection and analysis.
          </Typography>
        </Grid2>
      </Grid2>
    </Box>
  );
};
