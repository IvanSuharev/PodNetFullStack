import '../styles/main.css';
import { Container, Typography, Paper, Grid, Card, Avatar } from '@mui/material';
import CardH from '../components/card';
import PodcastGrid from '../components/podcastCategory';
const cards = CardH()

const Main = () => {
  return (
    <>
      <Paper
        sx={{
          background: `linear-gradient(8deg,rgba(248, 250, 252, 1) 0%, rgba(207, 254, 255, 1) 62%)`,
          backgroundSize: 'cover',       // Важно!
          backgroundRepeat: 'no-repeat', // Важно!
          backgroundPosition: 'center',  // Важно!
          //  minHeight: 300,                // Минимальная высота
          paddingTop: 11,
          paddingBottom: 5,
        }}>
        <Container fixed>
          <Grid container textAlign={'center'}>
            <Grid size={12}> {/* Исправлено: item вместо size */}
              <Typography
                variant={'h5'}
                color='black'
                gutterBottom
                sx={{
                  textShadow: '0px 2px 4px rgba(0,0,0,0.5)', // Для лучшей читаемости
                  fontWeight: 'bold'
                }}
              >
                Слушай, записывай, изучай вместе с PodNet
              </Typography>
              <Typography>
                Сообщество, где создатели и слушатели подкаста объединяются. Исследуйте тысячи подкастов или поделитесь своим собственным голосом с целым миром
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Container fixed
        sx={{
          paddingTop: 5,

        }}
      >
        <Typography
          variant='h4'
        >
          Популярное
        </Typography>
        <Typography variant='body2'
          color='text.secondary'
          gutterBottom
          sx={{ textAlign: "right" }}
        >
          Все слушают это
        </Typography>
      </Container>
      <Container fixed sx={{
        paddingBottom: 5,
      }}>
        <CardH />
      </Container>
      <Container fixed >
        <Typography
          variant='h4'
        >Категории</Typography>
        <PodcastGrid />
      </Container>
      <Container fixed sx={{
        marginTop: 5,
        marginBottom: 5
      }}>
        <Typography variant='h4' gutterBottom>
          Авторы
        </Typography>
        <Grid container spacing={30} >
          <Grid textAlign={'center'}>
            <Avatar sx={{ bgcolor: 'grey', color: 'text.primary', left:65 }}>Kate</Avatar>
            <Typography variant='body2'>
              подкасты: 15 | 10 подписчиков
            </Typography>
          </Grid>
          <Grid>
            <Avatar sx={{ bgcolor: 'blue',left:65 }}>Adam</Avatar>
            <Typography variant='body2'>
              подкасты: 15 | 10 подписчиков
            </Typography>
          </Grid>
          <Grid><Avatar sx={{ bgcolor: 'black',left:65 }} >Serj</Avatar>
          <Typography variant='body2'>
              подкасты: 15 | 10 подписчиков
            </Typography></Grid>
        </Grid>
      </Container>
    </>
  );

}

export default Main;



