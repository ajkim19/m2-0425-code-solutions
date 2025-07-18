import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log(new Date(), ':', req.method, req.path);
  next();
});

app.get('/', (req, res) => {
  res.send('This is /');
});

app.get('/notes/', (req, res) => {
  res.send('This is /notes');
});

app.get('/notes/:noteId', (req, res) => {
  const { noteId } = req.params;
  res.send(`This is /notes/${noteId}`);
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
