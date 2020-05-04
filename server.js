const express = require('express');
const next = require('next');
const basicAuth = require('basic-auth-connect');

const ENV = process.env.NODE_ENV || 'local';

const production = ENV === 'production';
const port = process.env.PORT || 3000;
const app = next({ dev: !production });
const handle = app.getRequestHandler();
const server = express();

console.log(`App is ${ENV} mode.`);

if (production) {
  const USER_NAME = process.env.USER_NAME;
  const PASSWORD = process.env.PASSWORD;
  server.use(basicAuth(USER_NAME, PASSWORD));
}

app
  .prepare()
  .then(() => {

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
