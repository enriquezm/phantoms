import app from './server';

// creates and starts a server for our API on a defined port
app.listen(3000, () => {
  console.log('Server listening at http://localhost:3000');
});