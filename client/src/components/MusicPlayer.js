import React, { useState, useEffect } from 'react';
import { Grid, Slider, IconButton } from '@material-ui/core';
import { PlayArrow, Pause, VolumeUp, VolumeOff } from '@material-ui/icons';

const MusicPlayer = ({ song }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [audioPlayer, setAudioPlayer] = useState(null);

  useEffect(() => {
    const player = new Audio(song.url);
    setAudioPlayer(player);

    return () => {
      player.pause();
      player.currentTime = 0;
    };
  }, [song.url]);

  useEffect(() => {
    if (isPlaying) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }
  }, [isPlaying, audioPlayer]);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event, newVolume) => {
    setVolume(newVolume);
    audioPlayer.volume = newVolume / 100;
  };

  return (
    <Grid container alignItems="center" spacing={2}>
      <Grid item>
        <IconButton onClick={handlePlay}>
          {isPlaying ? <Pause /> : <PlayArrow />}
        </IconButton>
      </Grid>
      <Grid item xs>
        <Slider value={volume} onChange={handleVolumeChange} />
      </Grid>
      <Grid item>
        {volume > 0 ? <VolumeUp /> : <VolumeOff />}
      </Grid>
    </Grid>
  );
};

export default MusicPlayer;
