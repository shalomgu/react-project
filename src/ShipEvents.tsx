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
} from "@mui/material";
import { ShipEvent } from "./ShipEvent";

function ShipEventsPage() {
  const [events, setEvents] = useState<ShipEvent[]>([]);
  const [shipId, setShipId] = useState<string>("");
  const [eventType, setEventType] = useState<string>("");

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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 4,
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
        Ship Events Dashboard
      </Typography>

      <Card sx={{ width: "80%", mb: 4, p: 2, backgroundColor: "#2c2c2c" }}>
        <CardContent>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <TextField
              label="Filter by Ship ID"
              variant="filled"
              value={shipId}
              onChange={(e) => setShipId(e.target.value)}
              fullWidth
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
            <TextField
              label="Filter by Event Type"
              variant="filled"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              fullWidth
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
          </Box>
        </CardContent>
      </Card>

      <TableContainer component={Paper} sx={{ width: "80%", backgroundColor: "#2c2c2c" }}>
        <Table>
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
  );
}

export default ShipEventsPage;
