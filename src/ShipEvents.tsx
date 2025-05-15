import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { ShipEvent } from "./ShipEvent";

function ShipEventsPage() {
  const [events, setEvents] = useState<ShipEvent[]>([]);
  const [shipId, setShipId] = useState<string>("");
  const [eventType, setEventType] = useState<string>("");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    fetchEvents();
  }, [shipId, eventType]);

  const fetchEvents = async () => {
    try {
      const params: any = {};
      if (shipId) params.shipId = shipId;
      if (eventType) params.eventType = eventType;

      const response = await axios.get("http://localhost:8080/api/events", { params });
      setEvents(response.data);
    } catch (error) {
      console.error("Failed to fetch events", error);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#1e1e1e",
        color: "white",
        padding: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Box sx={{ maxWidth: 1200, margin: "0 auto" }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 3, textAlign: "center" }}>
          Ship Events Dashboard
        </Typography>

        <Card sx={{ mb: 4, backgroundColor: "#2c2c2c" }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Filter by Ship ID"
                  variant="filled"
                  value={shipId}
                  onChange={(e) => setShipId(e.target.value)}
                  InputProps={{
                    style: {
                      color: "white",
                      backgroundColor: "#424242",
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "#bbb" },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Filter by Event Type"
                  variant="filled"
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  InputProps={{
                    style: {
                      color: "white",
                      backgroundColor: "#424242",
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "#bbb" },
                  }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <TableContainer component={Paper} sx={{ backgroundColor: "#2c2c2c" }}>
          <Table size={isMobile ? "small" : "medium"}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "#ccc" }}>ID</TableCell>
                <TableCell sx={{ color: "#ccc" }}>Event Type</TableCell>
                <TableCell sx={{ color: "#ccc" }}>Timestamp</TableCell>
                <TableCell sx={{ color: "#ccc" }}>Additional Data</TableCell>
                <TableCell sx={{ color: "#ccc" }}>Ship ID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event.id} hover>
                  <TableCell sx={{ color: "#eee" }}>{event.id}</TableCell>
                  <TableCell sx={{ color: "#eee" }}>{event.eventType}</TableCell>
                  <TableCell sx={{ color: "#eee" }}>
                    {new Date(event.timestamp).toLocaleString()}
                  </TableCell>
                  <TableCell sx={{ color: "#eee" }}>{event.additionalData}</TableCell>
                  <TableCell sx={{ color: "#eee" }}>{event.shipId}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default ShipEventsPage;
