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
            A long-term personal project focused on building an educational CPU
            simulator with an assembler, a web-based frontend, and a backend
            architecture. The simulator aims to help developers and students
            understand how computers work by visualizing each clock cycle,
            instruction, and hardware-level operation.
          </Typography>
          {/* <Typography variant="body1" sx={{ mt: 1, fontWeight: "bold" }}>
            My goal is to create educational software for developers and tech
            enthusiasts to learn how computers work through an interactive
            graphical interface, where the student can observe every clock tick
            and its consequences inside the machine while executing programs
            written by the student in the assembly language.
          </Typography> */}

          <Typography variant="h6">- CPU + Assembler</Typography>
          <Typography variant="body1">
            Implemented the CPU entirely from first principles: starting with
            logic gates (NAND, OR, NOT, XOR), constructing higher-level circuits
            (adders, counters, registers), and finally assembling complete
            components such as the ALU, RAM, and the Control Unit. Also
            developed a custom assembler with a full instruction set.
          </Typography>

          <Typography variant="h6">- CPU8FE</Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            An interactive UI that visualizes CPU state changes in real-time.
            Still in active development.
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
              This is a preview of the frontend interface as of 2025-11-17.
            </Typography>
          </Box>

          <Typography variant="h6">- CPU8BE</Typography>
          <Typography variant="body1">Work planned.</Typography>
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
