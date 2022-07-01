const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())

app.get('/', (req, res) => {
  const vinylArray = [
    {
      artistId: "1",
      artist: "Extremoduro",
      released: "2020-09-14T05:00:00",
      rating: 4.2,
      description: "description extremo",
      GenreId: "1",
    }
  ]

  res.send(vinylArray);
});

app.listen(3001, () => console.log('Listening on port 3001...'));