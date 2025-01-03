import React from 'react';
import { Box, Typography, Paper, Container, CssBaseline, Grid2 } from '@mui/material';
import { Contact } from './components/left/contact/contact';
import { Education } from './components/left/education/education';
import { Skills } from './components/left/skills/skills';
import { WorkExperience } from './components/right/work-expirience/work-expirience';
import { Projects } from './components/right/projects/projects';
import { Summary } from './components/right/summary/summary';

const Resume: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ backgroundColor: "#1a1a1a;", m: 0, p: 0 }}>
        <Container sx={{ backgroundColor: 'white', minHeight: '100vh', py: 5 }}>

          <Paper elevation={4} sx={{ width: 'auto', mb: 2 }}>
            <Box sx={{ backgroundColor: "#2b2b2b;", color: 'white', textAlign: 'center', py: 3 }}>
              <Typography variant="h3">Nebojša Knežević</Typography>
              <Typography variant="h6" sx={{ fontWeight: 'lighter' }}>Software Developer</Typography>
            </Box>
            <Grid2 container spacing={2}>
              <Grid2 size={{ xs: 12, md: 4 }}
                sx={{ backgroundColor: "#f3f3f3", p: 2 }}>

                <Contact />

                <Education />

                <Skills />

              </Grid2>
              <Grid2 size={{ xs: 12, md: 8 }} sx={{ p: 2 }}>

                <Summary/>

                <WorkExperience/>

                <Projects/>

              </Grid2>

            </Grid2>
          </Paper>

        </Container>
      </Box>
    </>

  );
};

export default Resume;
