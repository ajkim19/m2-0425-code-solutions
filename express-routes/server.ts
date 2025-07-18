import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log(new Date(), ':', req.method, req.path);
  next();
});

app.get('/', (req, res) => {
  res.send('This is a response to a GET request to /');
});

app.get('/notes/', (req, res) => {
  res.send('This is a response to a GET request to /notes');
});

app.post('/notes/:noteId', (req, res) => {
  const { noteId } = req.params;
  res.send(`This is a response to a POST request to /notes/${noteId}`);
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
