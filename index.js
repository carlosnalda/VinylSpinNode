const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.log(err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
  const course = new Course({
    name: 'Nodejs course',
    author: 'Carlos',
  });

  const result = await course.save();
  console.log(result);
}

createCourse();

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  const vinylArray = [
    {
      artistId: '1',
      artist: 'Extremoduro',
      released: '2020-09-14T05:00:00',
      rating: 4.2,
      description: 'description extremo',
      GenreId: '1',
    },
    {
      artistId: '1',
      artist: 'Extremoduro',
      released: '2020-09-14T05:00:00',
      rating: 4.2,
      description: 'description extremo',
      GenreId: '1',
    },
    {
      artistId: '1',
      artist: 'Extremoduro',
      released: '2020-09-14T05:00:00',
      rating: 4.2,
      description: 'description extremo',
      GenreId: '1',
    },
    {
      artistId: '1',
      artist: 'Extremoduro',
      released: '2020-09-14T05:00:00',
      rating: 4.2,
      description: 'description extremo',
      GenreId: '1',
    },
  ];

  res.send(vinylArray);
});

app.listen(3001, () => console.log('Listening on port 3001...'));
