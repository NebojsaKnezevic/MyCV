import { Box, Typography, Grid2 } from "@mui/material";
import React from "react";
import sample from "../../../../public/sample.png";

export const Projects: React.FC = () => {
  return (
    <Box sx={{ my: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Projects
      </Typography>

      <Grid2 container spacing={3} sx={{ mt: 2 }}>
        <Grid2>
          <Typography variant="h4">CPU Simulator(PUBLIC)</Typography>
          <Typography variant="body1">
            The only project I actually LOVE and actively work on for the past
            year and a half. The scope of this project is huge (still going),
            and the amount of research needed was also significant (still
            going). It included two books and dozens of other articles, videos,
            and available resources.
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, fontWeight: "bold" }}>
            My goal is to create educational software for developers and tech
            enthusiasts to learn how computers work through an interactive
            graphical interface, where the student can observe every clock tick
            and its consequences inside the machine while executing programs
            written by the student in the assembly language.
          </Typography>

          <Typography variant="h6">- CPU + Assembler</Typography>
          <Typography variant="body1">
            This is the heart of the project and it is almost finished. By
            "almost" I mean I still need to make code base a bit prettier and
            write README. I started by implementing basic logic gates (NAND, OR,
            NOT, XOR), then built higher-order circuits (adders, counters,
            steppers), and eventually complete CPU components such as the ALU,
            Control Unit, and RAM. I also developed a full assembler with a
            complete instruction set.
          </Typography>

          <Typography variant="h6">- CPU8FE</Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            Frontend for the CPU simulator. It provides an interactive UI where
            you can visualize everything described in the "CPU + Assembler"
            section of the project. This part is still under development.
          </Typography>

          <Box sx={{ textAlign: "center", mb: 2 }}>
            <img
              src={sample}
              alt="CPU8FE Preview"
              style={{
                width: "100%",
                maxWidth: "700px",
                borderRadius: "8px",
                marginTop: "8px",
              }}
            />

            <Typography variant="body2" sx={{ mt: 1 }}>
              {/* Ovde ti dodaješ opis slike */}
              This is a preview of the frontend interface as of
              2025-11-17.
            </Typography>
          </Box>

          <Typography variant="h6">- CPU8BE</Typography>
          <Typography variant="body1">
            I need yet to begin my work on this one.
          </Typography>
        </Grid2>

        {/* Concur Project */}
        <Grid2>
          <Typography variant="h6">Concur (PRIVATE)</Typography>
          <Typography variant="body1">
            Prepared ABB data for integration into their system and developed a
            web application using .NET and React. The application allowed
            employees to compare the state of data between ABB and Concur
            database in a user-friendly interface.
          </Typography>
        </Grid2>

        {/* GBT Project */}
        <Grid2>
          <Typography variant="h6">GBT (PRIVATE)</Typography>
          <Typography variant="body1">
            Similar to the Concur project but without the web application
            component. Focused on data preparation and integration for GBT
            systems.
          </Typography>
        </Grid2>

        {/* Medical Survey Web App */}
        <Grid2>
          <Typography variant="h6">Medical Survey Web App (PRIVATE)</Typography>
          <Typography variant="body1">
            Web application for a hospital using .NET, React, and TypeScript.
            The application includes a medical survey feature, streamlining
            patient data collection and analysis.
          </Typography>
        </Grid2>
      </Grid2>
    </Box>
  );
};
