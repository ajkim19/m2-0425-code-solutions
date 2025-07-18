import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('The date is', new Date());
  next();
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});

app.get('/', (req, res) => {
  res.send('This is the root');
});

app.get('/notes/', (req, res) => {
  res.send('This is the notes');
});

app.get('/notes/:noteId', (req, res) => {
  res.send(`This is {req.params}`);
});
