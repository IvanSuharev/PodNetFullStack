import React from 'react';
import { Grid, Typography } from '@mui/material';

// Компонент карточки
const CardItem = ({ title, podcastsCount, backgroundColor, borderColor, textColor, bodyColor }) => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={10}
      lg={2}
      sx={{
        border: 'solid',
        borderColor: borderColor,
        backgroundColor: backgroundColor,
        borderRadius: '0.5rem',
        width: 265,
        padding: 2,
        boxShadow:"0 3px 5px 2px rgba(0, 0, 0, .2)"
      }}
    >
      <Typography color={textColor}>{title}</Typography>
      <Typography variant="body2" color={bodyColor}>
        {podcastsCount} подкастов
      </Typography>
    </Grid>
  );
};

// Основной компонент с сеткой
const PodcastGrid = () => {
  return (
    <Grid container sx={{ marginTop: 4 }} spacing={2}>
      <CardItem
        title="Здоровье"
        podcastsCount={10}
        backgroundColor="#FCE7F3"
        borderColor = '#FCE7F3'
        textColor="#9D174D"
        bodyColor="text.secondary"
      />
      <CardItem
        title="Бизнес"
        podcastsCount={110}
        backgroundColor="#FEF9C3"
        borderColor = '#FEF9C3'
        textColor="#885213"
        bodyColor="text.secondary"
      />
      <CardItem
        title="Путешествия"
        podcastsCount={110}
        backgroundColor="#FEF9C3"
        borderColor = '#FEF9C3'
        textColor="#885213"
        bodyColor="text.secondary"
      />
      <CardItem
        title="Юмор"
        podcastsCount={110}
        backgroundColor="#FEF9C3"
        borderColor = '#FEF9C3'
        textColor="#885213"
        bodyColor="text.secondary"
      />
      <CardItem
        title="Культура"
        podcastsCount={110}
        backgroundColor="#166534"
        borderColor = '#166534'
        textColor="white"
        bodyColor="text.secondary"
      />
      <CardItem
        title="Наука"
        podcastsCount={110}
        backgroundColor="black"
        borderColor="black"
        textColor="white"
        bodyColor="grey"
      />
      <CardItem
        title="Образование"
        podcastsCount={110}
        backgroundColor="#1E3A8A"
        borderColor='#1E3A8A'
        textColor="white"
        bodyColor="grey"
      />
      <CardItem
        title="Спорт"
        podcastsCount={110}
        backgroundColor="#808080"
        borderColor="#808080"
        textColor="white"
        bodyColor="text.secondary"
      />
    </Grid>
  );
};

export default PodcastGrid;
