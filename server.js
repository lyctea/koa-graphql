import Koa from 'koa';
import KoaStatic from 'koa-static';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';

const app = new Koa();
const router = new Router();

// 使用中间件
app.use(bodyParser());
app.use(KoaStatic(__dirname + '/public'));

// 设置路由
router.get('/test', (ctx, next) => {
  ctx.body = 'test body';
});

app.use(router.routes())
  .use(router.allowedMethods());

app.listen(4000);

console.log('graphQL server listen prot: ' + 4000);
