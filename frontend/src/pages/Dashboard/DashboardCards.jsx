import Grid from "@mui/material/Grid";
import DescriptionIcon from "@mui/icons-material/Description";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import HubIcon from "@mui/icons-material/Hub";
import ShieldIcon from "@mui/icons-material/Shield";

import StatCard from "../../components/common/StatCard";

export default function DashboardCards() {
  return (
    <Grid container spacing={3}>

      <Grid item xs={12} md={6} lg={3}>
        <StatCard
          title="Documents"
          value="128"
          icon={<DescriptionIcon />}
        />
      </Grid>

      <Grid item xs={12} md={6} lg={3}>
        <StatCard
          title="AI Queries"
          value="2456"
          color="#9333ea"
          icon={<SmartToyIcon />}
        />
      </Grid>

      <Grid item xs={12} md={6} lg={3}>
        <StatCard
          title="Knowledge Nodes"
          value="5860"
          color="#10b981"
          icon={<HubIcon />}
        />
      </Grid>

      <Grid item xs={12} md={6} lg={3}>
        <StatCard
          title="Compliance"
          value="99.8%"
          color="#ef4444"
          icon={<ShieldIcon />}
        />
      </Grid>

    </Grid>
  );
}