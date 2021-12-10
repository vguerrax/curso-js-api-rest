import app from './app';

const port = 3001;
app.listen(port, () => {
  // eslint-disable-next-line
  console.info(`Escutando na porta ${port} \nAcesse em http://localhost:${port}`);
});
