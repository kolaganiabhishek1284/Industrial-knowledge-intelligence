import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { getAnalytics } from "../../services/dashboard";

import {
  Box,
  Grid,
  Card,
  Typography,
  CircularProgress,
} from "@mui/material";

import DescriptionIcon from "@mui/icons-material/Description";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import HubIcon from "@mui/icons-material/Hub";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      const res = await getAnalytics();
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  }

  if (!data) {
    return (
      <MainLayout>
        <Box
          display="flex"
          justifyContent="center"
          mt={10}
        >
          <CircularProgress />
        </Box>
      </MainLayout>
    );
  }

  const cards = [
    {
      title: "Documents",
      value: data.documents,
      icon: <DescriptionIcon fontSize="large" />,
      color: "#2563eb",
    },
    {
      title: "Knowledge Nodes",
      value: data.knowledge_nodes,
      icon: <HubIcon fontSize="large" />,
      color: "#10b981",
    },
    {
      title: "AI Queries",
      value: data.ai_queries,
      icon: <SmartToyIcon fontSize="large" />,
      color: "#9333ea",
    },
    {
      title: "System Health",
      value: data.system_health,
      icon: <MonitorHeartIcon fontSize="large" />,
      color: "#ef4444",
    },
  ];

  return (
    <MainLayout>

      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
      >
        Enterprise Dashboard
      </Typography>

      <Grid container spacing={3}>

        {cards.map((card, index) => (

          <Grid
            item
            xs={12}
            md={6}
            lg={3}
            key={index}
          >

            <Card
              sx={{
                p: 3,
                borderRadius: 4,
                boxShadow: 6,
              }}
            >

              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >

                <Box>

                  <Typography color="text.secondary">
                    {card.title}
                  </Typography>

                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    mt={1}
                  >
                    {card.value}
                  </Typography>

                </Box>

                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    bgcolor: card.color,
                    borderRadius: 3,
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {card.icon}
                </Box>

              </Box>

            </Card>

          </Grid>

        ))}

      </Grid>

    </MainLayout>
  );
}