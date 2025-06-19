import { PlayCircle } from "@mui/icons-material";
import { Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, Box } from "@mui/material";

const cards = [1, 2, 3, 4];

const CardH = () => {
  return (
    <Grid container spacing={2} sx={{marginTop: 2,}}>
      {cards.map((card) => (
        <Grid  key={card} xs={12} sm={6} md={10} lg={2}> 
          <Card sx={{ 
            position: 'relative',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: "0.5rem",
            width: 265,
          }}>
            {/* Плейер поверх изображения */}
            <Box sx={{ position: 'relative' }}>
              <CardMedia
                component="img"
                height="140"
                image="https://source.unsplash.com/random" // Заглушка
                alt="Podcast cover"
              />
              <PlayCircle 
                sx={{ 
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: 60,
                  color: 'white',
                  opacity: 0.7,
                  '&:hover': { opacity: 1 }
                }} 
              />
            </Box>
            
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="div">
                Название
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Описание
              </Typography>
            </CardContent>
            
            <CardActions>
              <Button size="small" color="primary">Слушать</Button>
              <Button size="small" color="secondary">Обсуждать</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default CardH;