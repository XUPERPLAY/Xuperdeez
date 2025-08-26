const Song = require('../models/Song');

exports.getSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching songs' });
  }
};

exports.uploadSong = async (req, res) => {
  try {
    const { title, artist, url } = req.body;
    const song = new Song({ title, artist, url });
    await song.save();
    res.status(201).json(song);
  } catch (error) {
    res.status(500).json({ error: 'Error uploading song' });
  }
};
