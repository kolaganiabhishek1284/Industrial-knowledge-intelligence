import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import api from "../../services/api";

import {
  Box,
  Paper,
  Typography,
  Grid,
  Chip,
} from "@mui/material";

import DescriptionIcon from "@mui/icons-material/Description";

export default function Documents() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    loadDocuments();
  }, []);

  async function loadDocuments() {
    try {
      const res = await api.get("/documents/");
      setDocuments(res.data.documents || []);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <MainLayout>

      <Typography variant="h4" mb={4}>
        Industrial Documents
      </Typography>

      <Grid container spacing={3}>

        {documents.map((doc, index) => (

          <Grid item xs={12} md={6} lg={4} key={index}>

            <Paper
              elevation={4}
              sx={{
                p: 3,
                borderRadius: 4,
              }}
            >

              <Box
                display="flex"
                alignItems="center"
                gap={2}
              >

                <DescriptionIcon
                  color="primary"
                  sx={{ fontSize: 50 }}
                />

                <Box>

                  <Typography fontWeight="bold">
                    {doc.name}
                  </Typography>

                  <Chip
                    label={`${doc.size} KB`}
                    sx={{ mt: 1 }}
                  />

                </Box>

              </Box>

            </Paper>

          </Grid>

        ))}

      </Grid>

    </MainLayout>
  );
}