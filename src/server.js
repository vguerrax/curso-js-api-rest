import app from './app';

const port = process.env.APP_PORT;
app.listen(port, () => {
  // eslint-disable-next-line
  console.info(`Escutando na porta ${port} \nAcesse em http://localhost:${port}`);
});
