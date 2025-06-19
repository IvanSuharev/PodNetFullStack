import React from 'react';
import { 
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';

const ProfilePage: React.FC = () => {
  return (
    <Box sx={{ 
      minHeight: '100vh', 
      bgcolor: '#f5f5f5',
      pb: 8,
      height:100000000000
    }}>
      {/* Header */}
      <Paper 
        elevation={3}
        sx={{ 
          p: 4,
          bgcolor: '#2196F3',
          color: 'white',
          mb: 4,
          position:"fixed",
          width: "100%"
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid  >
            <Typography variant="h5" component="h1" gutterBottom>
              TEMPLATE
            </Typography>
          
          </Grid>
        </Grid>
      </Paper>

      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{paddingTop: 15}}>
          {/* Left sidebar */}
          <Grid   xs={12} md={4}>
            <Paper 
              elevation={3}
              sx={{ 
                p: 3,
                bgcolor: '#f8f9fa',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <Avatar
                sx={{ 
                  width: 100,
                  height: 100,
                  bgcolor: '#9C27B0',
                  mb: 2
                }}
              >
              </Avatar>
              
              <Typography variant="h6" align="center">
                Алексей Бакланов
              </Typography>
              
              <Typography variant="body2" color="text.secondary" align="center">
                Слушатель
              </Typography>

              <Divider sx={{ my: 2, width: '100%' }} />

              <List sx={{ width: '100%' }}>
                <ListItem disablePadding>
                  <ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary="ivan.petrov@example.com" />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>

                  </ListItemIcon>
                  <ListItemText primary="+7 (999) 123-45-67" />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon>

                  </ListItemIcon>
                  <ListItemText primary="Москва, Россия" />
                </ListItem>
              </List>

              <Button 
                variant="contained" 
                color="primary" 
                fullWidth
                sx={{ mt: 2 }}
              >
                Редактировать профиль
              </Button>
            </Paper>
          </Grid>

          {/* Main content */}
          <Grid   xs={5} md={8}>
            <Paper 
              elevation={3}
              sx={{ 
                p: 3,
                bgcolor: '#f8f9fa'
              }}
            >
              <Typography variant="h6" gutterBottom>
                О себе
              </Typography>
              <Typography paragraph>
                Рассказываю о прелестях математике, геометрии, и других точных науках.
              </Typography>

              <Divider sx={{ my: 3 }} />

              <Typography variant="h6" gutterBottom>
                Образование
              </Typography>
              <Typography paragraph>
                МГУ им. М.В. Ломоносова, факультет информационных технологий
              </Typography>

              <Divider sx={{ my: 3 }} />

              <Typography variant="h6" gutterBottom>
                Сделанные подкасты
              </Typography>
              
              <Grid container spacing={2}>
                <Grid   xs={12} sm={6}>
                  <Paper 
                    variant="outlined" 
                    sx={{ 
                      p: 2,
                      height: '80%'
                    }}
                  >
                    <Typography variant="subtitle1">Основы мат-логики</Typography>
                    <Typography variant="body2" color="text.secondary">lorem ipsum</Typography>
                  </Paper>
                </Grid>
                <Grid   xs={12} sm={6}>
                  <Paper 
                    variant="outlined" 
                    sx={{ 
                      p: 2,
                      height: '80%'
                    }}
                  >
                    <Typography variant="subtitle1">Аналитическая геометрия в доказательстве школьных теорем</Typography>
                    <Typography variant="body2" color="text.secondary">lorem ipsum</Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProfilePage;

  