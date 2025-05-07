import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ReplayIcon from '@mui/icons-material/Replay';
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Dashboard() {
  return (
    <Box sx={{ backgroundColor: '#f3f4f6', minHeight: '100vh' }}>
      {/* Header */}
      <AppBar position="static" color="default" elevation={0} sx={{ backgroundColor: '#e8edf2', p: 1 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box display="flex" alignItems="center" gap={2}>
            <img src="/logo192.png" alt="ShipIn logo" style={{ height: 32 }} />
            <Typography variant="h6" color="primary">ShipIn</Typography>
            <Typography sx={{ mx: 2, color: 'text.secondary' }}>DASHBOARD</Typography>
            <Typography sx={{ mx: 2, color: 'text.secondary' }}>FLEETS</Typography>
            <Typography sx={{ mx: 2, color: 'text.secondary' }}>VESSELS</Typography>
            <Typography sx={{ mx: 2, color: 'text.secondary' }}>ACTIVITIES</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={2}>
            <IconButton><ReplayIcon /></IconButton>
            <IconButton><NotificationsIcon /></IconButton>
            <Avatar sx={{ bgcolor: '#06b6d4', width: 32, height: 32 }}>A</Avatar>
            <Typography>Ahmed Khan</Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ p: 4 }}>
        {/* Dashboard title */}
        <Typography variant="h5" sx={{ mt: 2 }}>MT BOSTON</Typography>

        {/* Activity Cards */}
        <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2} mt={2}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="secondary">ALL ACTIVITIES</Typography>
              <Typography variant="h4" color="success.main">618</Typography>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography variant="h6" color="warning.main">CARGO</Typography>
              <Typography variant="h4" color="success.main">13</Typography>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography variant="h6" color="info.main">MAINTENANCE</Typography>
              <Typography variant="h4" color="success.main">597</Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Description Section */}
        <Card sx={{ mt: 4 }}>
          <CardContent>
            <Typography variant="h6">MT BOSTON - <span style={{ color: '#facc15' }}>Pilot Onboard</span></Typography>
            <Typography variant="body2">Current Operations: <strong>Piloting</strong></Typography>
            <Typography variant="body2">Location: EUR – Netherlands</Typography>
            <Typography variant="body2">Distance to Land: 0.2 nm</Typography>
            <Typography variant="body2">GEO Security Risk: LOW</Typography>
            <Typography variant="body2">Proximity AIS: TUG</Typography>
            <Typography variant="body2">Time: 20:45 local</Typography>
            <Typography variant="body2" color="warning.main" sx={{ fontWeight: 'bold' }}>DETERMINATION: ALERT – YELLOW</Typography>
            <Typography variant="h6" sx={{ color: '#fb923c' }}>5 PEOPLE IN THE BRIDGE</Typography>
            <Typography variant="h6" sx={{ color: '#fb923c' }}>PILOT ONBOARD</Typography>
          </CardContent>
        </Card>

        {/* Map and Voyage Info */}
        <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2} mt={2}>
          <Card>
            <CardContent>
              <Typography variant="h6">Voyage</Typography>
              <Typography variant="body2">From: Rotterdam Botlek (NL BOT)</Typography>
              <Typography variant="body2">To: Rotterdam (NL RTM)</Typography>
              <Typography variant="body2">ATD: 2021-12-02 12:00 (UTC)</Typography>
              <Typography variant="body2">ETA: 2021-12-02 04:00 (UTC)</Typography>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Box sx={{ height: 256, borderRadius: 2, overflow: 'hidden' }}>
                <MapContainer
                  center={[51.9, 4.5]}
                  zoom={5}
                  scrollWheelZoom={false}
                  style={{ height: '100%', width: '100%' }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                </MapContainer>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
