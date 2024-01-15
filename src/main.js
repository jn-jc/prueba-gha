import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mundo! Se cambio de puerto');
})

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
})


