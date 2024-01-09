import express from 'express';

const app = express();
const port = 3033;

app.get('/', (req, res) => {
  res.send('Hola mundo!');
})

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
})


