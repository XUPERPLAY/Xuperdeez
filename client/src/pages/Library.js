import React, { useState, useEffect } from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import MusicPlayer from '../components/MusicPlayer';
import { getSongs } from '../utils/api';

const Library = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      const data = await getSongs();
      setSongs(data);
    };
    fetchSongs();
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4">Music Library</Typography>
      </Grid>
      {songs.map((song) => (
        <Grid item xs={12} sm={6} md={4} key={song._id}>
          <Paper elevation={3} style={{ padding: '16px' }}>
            <Typography variant="h6">{song.title}</Typography>
            <Typography variant="subtitle1">{song.artist}</Typography>
            <MusicPlayer song={song} />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Library;
