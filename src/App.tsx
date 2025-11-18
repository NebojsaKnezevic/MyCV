import React from "react";
import {
  Box,
  Typography,
  Paper,
  Container,
  CssBaseline,
  Grid2,
  Button,
} from "@mui/material";
import { Contact } from "./components/left/contact/contact";
import { Education } from "./components/left/education/education";
import { Skills } from "./components/left/skills/skills";
import { WorkExperience } from "./components/right/work-expirience/work-expirience";
import { Projects } from "./components/right/projects/projects";
import { Summary } from "./components/right/summary/summary";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Resume: React.FC = () => {
  // const exportPDF = async () => {
  //   const element = document.getElementById("nk-cv"); // tvoj div sa FE
  //   if (!element) return;

  //   const canvas = await html2canvas(element);
  //   const imgData = canvas.toDataURL("image/png");

  //   const pdf = new jsPDF({
  //     orientation: "portrait",
  //     unit: "px",
  //     format: [canvas.width, canvas.height],
  //   });

  //   pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
  //   pdf.save("NebojsaKnezevic_CV_.pdf");
  // };
  const exportPDF = async () => {
    const element = document.getElementById("nk-cv");
    if (!element) return;

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");

    // dimenzije u px
    const imgWidthPx = canvas.width;
    const imgHeightPx = canvas.height;

    // konverzija px → mm (jer jsPDF koristi mm)
    const pxToMm = (px) => px * 0.144583;

    const pdfWidth = pxToMm(imgWidthPx);
    const pdfHeight = pxToMm(imgHeightPx);

    // PDF format = iste dimenzije kao element
    const pdf = new jsPDF({
      orientation: pdfWidth > pdfHeight ? "landscape" : "portrait",
      unit: "mm",
      format: [pdfWidth, pdfHeight],
    });

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("NebojsaKnezevic_CV.pdf");
  };

  return (
    <>
      <CssBaseline />
      <Box sx={{ backgroundColor: "#1a1a1a;", m: 0, p: 0 }}>
        <Container sx={{ backgroundColor: "white", minHeight: "100vh", py: 5 }}>
          <Button
            variant="outlined"
            sx={{
              position: {
                xs: "static", // default
                sm: "absolute", // na sm i više
              },
              mb: 3,
              top: 50,
              left: 50,
            }}
            onClick={() => exportPDF()}
          >
            Download PDF
          </Button>
          <Paper elevation={4} sx={{ width: "auto", mb: 2 }} id="nk-cv">
            <Box
              sx={{
                backgroundColor: "#2b2b2b;",
                color: "white",
                textAlign: "center",
                py: 3,
              }}
            >
              <Typography variant="h3">Nebojša Knežević</Typography>
              <Typography variant="h6" sx={{ fontWeight: "lighter" }}>
                Software Developer
              </Typography>
            </Box>
            <Grid2 container spacing={2}>
              <Grid2
                size={{ xs: 12, md: 4 }}
                sx={{ backgroundColor: "#f3f3f3", p: 2 }}
              >
                <Contact />

                <Education />

                <Skills />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 8 }} sx={{ p: 2 }}>
                <Summary />

                <WorkExperience />

                <Projects />
              </Grid2>
            </Grid2>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default Resume;
