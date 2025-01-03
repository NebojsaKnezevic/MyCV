import React from "react";
import { Box, Typography } from "@mui/material";

export const WorkExperience: React.FC = () => {
    return (
        <Box sx={{ my: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Work Experience
            </Typography>

            {/* First Job: Intern at Vega IT */}
            <Box sx={{ my: 2 }}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Intern at Vega IT (2022-2022)
                </Typography>
                <Typography variant="body2" sx={{ fontStyle: "italic", mb: 1 }}>
                    (Full-Stack Developer: React, .NET, SQL Server)
                </Typography>
                <Typography variant="body2">
                    Developed a full-stack web application using React, .NET, and SQL Server. 
                    Gained experience in both frontend and backend development, enhancing my understanding 
                    of software engineering principles and teamwork.
                </Typography>
            </Box>

            {/* Second Job: Advanced Computing Technology */}
            <Box sx={{ my: 2 }}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Advanced Computing Technology (2022-present)
                </Typography>
                <Typography variant="body2" sx={{ fontStyle: "italic", mb: 1 }}>
                    (Data Integration, Business Intelligence, and Full-Stack Development)
                </Typography>
                <Typography variant="body2">
                    Initially focused on data integration, analysis, and business intelligence 
                    using SQL, Power BI, and Excel. Expanded to full-stack development, creating 
                    applications with React, TypeScript, .NET, and SQL Server.
                </Typography>
            </Box>
        </Box>
    );
};
