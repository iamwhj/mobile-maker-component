const Koa = require('koa');
const router = require('./routes');
const cors = require('@koa/cors');

const app = new Koa();

app.use(cors());

app.use(router.routes(), router.allowedMethods());

app.listen(3333, () => {
  console.log('server listen to 3333');
});
